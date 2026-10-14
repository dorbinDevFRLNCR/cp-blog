import { DocumentTextIcon } from '@sanity/icons/DocumentText'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
      description: 'Ein Satz für Karten und Vorschau, max. 200 Zeichen.',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
      description: 'Genau eine Unterkategorie wählen (z. B. LMH, Simracing).',
      validation: (Rule) => Rule.required().min(1).max(1),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url' }],
              },
            ],
          },
        },

        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },

        {
          type: 'code',
          title: 'Code Block',
          options: { language: 'javascript', withFilename: true },
        },

        {
          name: 'callout',
          title: 'Callout',
          type: 'object',
          fields: [
            { name: 'type', type: 'string', options: { list: ['info', 'warning', 'success'] } },
            { name: 'text', type: 'text' },
          ],
          preview: {
            select: { title: 'text', subtitle: 'type' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'categories.0.title',
    },
  },
})
