import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'projects': projectsCollection,
}; 