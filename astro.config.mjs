// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://chad-collins.github.io',
	integrations: [mdx(), sitemap()],
	image: {
		// Enable image optimization
		experimentalLayout: 'responsive',
	},
	markdown: {
		// Automatically optimize images in markdown
		shikiConfig: {
			theme: 'github-dark-dimmed',
		},
	},
});
