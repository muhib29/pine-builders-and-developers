"use client"

import React, { useEffect, useState } from 'react'

type Props = {
    phone?: string
    message?: string
}

const DEFAULT_PHONE = process.env.NEXT_PUBLIC_WHATSAPP ?? '+92313822-2808'
const DEFAULT_MSG =
    process.env.NEXT_PUBLIC_WHATSAPP_MSG ?? 'Hi! I would like to discuss a project with you.'

export default function WhatsAppFAB({
    phone = DEFAULT_PHONE,
    message = DEFAULT_MSG,
}: Props) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const cleanPhone = phone.replace(/[^0-9+]/g, '')
    const href = `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(
        message,
    )}`

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className={`group fixed z-50 right-5 bottom-5 md:right-8 md:bottom-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-400 ${
                mounted ? 'wa-fab-enter' : 'opacity-0'
            }`}
        >
            <div className="relative">
                {/* tooltip (desktop) */}
                <span className="hidden md:flex absolute right-full mr-3 items-center">
                    <span className="wa-tooltip transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 whitespace-nowrap bg-white text-slate-900 dark:bg-slate-800 dark:text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg border border-white/10">
                        Chat with us
                    </span>
                </span>

                <span className="absolute -inset-1 rounded-full bg-green-500 opacity-30 blur-lg animate-pulse" />
                <span className="absolute -inset-3 rounded-full bg-green-500 opacity-20 animate-ping" />
                <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-xl transform transition-all duration-150 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8">
                        <path fill="currentColor" d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 .01 5.36.01 12c0 2.11.55 4.18 1.6 6.02L0 24l6.21-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.5c-1.57 0-3.09-.37-4.45-1.08l-.32-.17-3.69.93.95-3.6-.21-.37A9.5 9.5 0 1 1 21.5 12 9.48 9.48 0 0 1 12 21.5z" />
                        <path fill="#fff" d="M17.2 14.6c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.34.23-.64.08-.3-.15-1.26-.46-2.4-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.2-.29.3-.48.1-.2 0-.37-.05-.52-.05-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17 0-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.03 1.01-1.03 2.47s1.06 2.86 1.22 3.06c.17.2 2.11 3.3 5.12 4.63 2.14.9 2.74.78 3.36.72.62-.05 1.97-.8 2.25-1.57.27-.78.27-1.45.19-1.59-.08-.15-.27-.24-.57-.39z" />
                    </svg>
                </div>
            </div>
        </a>
    )
}
