import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/posts/` directory
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			reviewImage: image().optional(), // For review cover art/posters
			// Post settings
			published: z.boolean().default(false),
			comments: z.boolean().default(true),
			// Tags for flexible categorization
			tags: z.array(z.string()).default([]),
			// Post type determines routing and template
			type: z.enum(['blog', 'review']).default('blog'),
			// Review-specific fields (only used when type is 'review')
			rating: z.number().min(0).max(5).step(0.5).optional(),
			creator: z.string().optional(), // Artist, author, director, etc.
			releaseYear: z.number().optional(),
		}),
});

const albums = defineCollection({
	loader: glob({ base: './src/content/albums', pattern: '**/album.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			coverImage: image(),
			published: z.boolean().default(false),
			category: z.string().optional(), // Category for grouping albums
			photos: z.array(
				z.object({
					image: image(),
					caption: z.string().optional(),
				})
			).optional(),
		}),
});

export const collections = { posts, albums };
