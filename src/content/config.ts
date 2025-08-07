import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      gitHubLink: z.string(),
      liveLink: z.string(),
      tags: z.array(z.string()),
    }),
});

const workCollection = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
      company: z.string(),
      role: z.string(),
      date: z.string(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  project: projectCollection,
  work: workCollection,
};
