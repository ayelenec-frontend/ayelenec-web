import { defineCollection, z } from 'astro:content';

// Blog bilingue. Cada post es un .md en src/content/blog/ con este frontmatter.
// El idioma se define con `lang`; el listado y el post filtran por idioma.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    readingTime: z.string().optional(),
    lang: z.enum(['es', 'en']).default('es'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
