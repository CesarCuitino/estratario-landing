import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
		locale: z.enum(["es", "en"]),
		draft: z.boolean().default(false),
	}),
});

const changelog = defineCollection({
	type: "content",
	schema: z.object({
		version: z.string(),
		date: z.coerce.date(),
		locale: z.enum(["es", "en"]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, changelog };
