import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type Payload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  projectType?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const isDev = process.env.NODE_ENV !== 'production'
    const data: Payload = await req.json()
    const {
      firstName = '',
      lastName = '',
      email = '',
      phone = '',
      projectType = '',
      message = '',
    } = data

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    const SMTP_HOST = process.env.SMTP_HOST
    const SMTP_PORT = process.env.SMTP_PORT
    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASS = process.env.SMTP_PASS
    const SENDER_EMAIL = process.env.SENDER_EMAIL || process.env.SMTP_FROM || 'no-reply@pinebuilders.example.com'
    const TO_EMAIL = process.env.TO_EMAIL || 'pinebuilder83@gmail.com'

    const subject = `Website Contact: ${firstName} ${lastName} ${projectType ? `— ${projectType}` : ''}`
    const content = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\n\nMessage:\n${message}`

    // Prefer SendGrid if API key is provided
    if (SENDGRID_API_KEY) {
      const payload = {
        personalizations: [
          {
            to: [{ email: TO_EMAIL }],
            subject,
          },
        ],
        from: { email: SENDER_EMAIL, name: 'Pine Builders Website' },
        reply_to: { email },
        content: [
          {
            type: 'text/plain',
            value: content,
          },
        ],
      }

      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const text = await res.text().catch(() => '')
        console.error('SendGrid send error:', text)
        return NextResponse.json({ error: 'SendGrid error', details: text }, { status: 500 })
      }

      return NextResponse.json({ ok: true })
    }

    // Otherwise, try SMTP via nodemailer
    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      console.log('Using SMTP transport:', { host: SMTP_HOST, port: SMTP_PORT, user: SMTP_USER })
      const port = SMTP_PORT ? parseInt(SMTP_PORT, 10) : undefined
      const secure = port === 465

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: port || 587,
        secure: !!secure,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })

      try {
        // Verify SMTP connection early for clearer errors
        await transporter.verify()
      } catch (verifyErr: any) {
        console.error('SMTP verify failed:', verifyErr)
        const details = isDev ? (verifyErr?.message || String(verifyErr)) : 'SMTP authentication/connection failed'
        return NextResponse.json({ error: 'SMTP verify failed', details }, { status: 500 })
      }

      const mail = {
        from: `${SENDER_EMAIL}`,
        to: TO_EMAIL,
        subject,
        text: content,
        replyTo: email || undefined,
      }
      try {
        const info = await transporter.sendMail(mail)
        console.log('Email sent:', { messageId: info.messageId })
        return NextResponse.json({ ok: true })
      } catch (sendErr: any) {
        console.error('SMTP sendMail error:', sendErr)
        const details = isDev ? (sendErr?.message || String(sendErr)) : 'Failed to send email via SMTP'
        return NextResponse.json({ error: 'SMTP send failed', details }, { status: 500 })
      }
    }

    return NextResponse.json({ error: 'No mail provider configured' }, { status: 500 })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unexpected error' }, { status: 500 })
  }
}
