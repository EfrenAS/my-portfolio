import { z, defineCollection } from 'astro:content';

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

export const collections = {
  project: projectCollection,
};
