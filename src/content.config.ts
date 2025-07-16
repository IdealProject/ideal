import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    links: z.array(z.string()).optional(),
  })
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    authors: z.array(z.string()).optional(),
    major: z.object({
      discriminant: z.string(),
      value: z.any(),
    }).optional(),
  })
});

const civil = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    authors: z.array(z.string()).optional(),
    major: z.object({
      discriminant: z.string(),
      value: z.any(),
    }).optional(),
  })
});

const cpa = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    authors: z.array(z.string()).optional(),
    major: z.object({
      discriminant: z.string(),
      value: z.any(),
    }).optional(),
  })
});

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    authors: z.array(z.string()).optional(),
    major: z.object({
      discriminant: z.string(),
      value: z.any(),
    }).optional(),
  })
});

const electro = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    authors: z.array(z.string()).optional(),
    major: z.object({
      discriminant: z.string(),
      value: z.any(),
    }).optional(),
  })
});

const indu = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    authors: z.array(z.string()).optional(),
    major: z.object({
      discriminant: z.string(),
      value: z.any(),
    }).optional(),
  })
});

const infor = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    authors: z.array(z.string()).optional(),
    major: z.object({
      discriminant: z.string(),
      value: z.any(),
    }).optional(),
  })
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    authors: z.array(z.string()).optional(),
    major: z.object({
      discriminant: z.string(),
      value: z.any(),
    }).optional(),
  })
});

export const collections = { authors, books, civil, cpa, docs, electro, indu, infor, posts };