import { defineCollection, z } from 'astro:content'

const diary = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { diary }
