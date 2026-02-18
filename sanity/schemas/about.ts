import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mission',
      title: 'Our Mission',
      type: 'text',
    }),
    defineField({
      name: 'vision',
      title: 'Our Vision',
      type: 'text',
    }),
    defineField({
      name: 'history',
      title: 'Company History',
      type: 'text',
    }),
    defineField({
      name: 'yearsExperience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'projectsCompleted',
      title: 'Projects Completed',
      type: 'number',
    }),
    defineField({
      name: 'happyClients',
      title: 'Happy Clients',
      type: 'number',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'number',
    }),
    defineField({
      name: 'teamImage',
      title: 'Team Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
