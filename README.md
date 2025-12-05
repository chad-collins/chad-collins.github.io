# Chad Collins - Personal Blog

Can be viewed live here: **[chadcollins.dev](https://chadcollins.dev)**

Hey, I'm Chad. I'm a dad, software developer, tinkerer, reader, and sometimes Pokémon trainer. In 2025 I decided to officially ditch social media and avoid shorts, reels, TikToks, and basically anything designed to melt your attention span. Instead of doom scrolling, I've been spending more time on hobbies, picking up new ones, and doing things that feel a little more meaningful. This blog is my way of thinking out loud, tracking what I'm into, and experimenting with ideas.

I'm an Ohio guy, born in a rural town, dragged to Columbus by a relationship and a job, then eventually pulled back to the sticks by family. Still trying to recover from the whiplash.

Work-wise, I'm in the backend world with Java, building things that actually help people, which is meaningful. But my heart is in the front end. I've always loved design, from drawing to graphic work, and I could happily spend a full day tweaking font weights, spacing, or color palettes. It's my version of meditation.

This blog is part experiment, part memory log, and part excuse to have an internet presence after deleting social media from my life.

## About This Site

I built this blog and template from scratch using [Astro](https://astro.build) and TypeScript. It features:

- Custom responsive design with mobile-first navigation
- Content collections for blog posts, reviews, and photo albums
- Light and dark themes with soft, easy-on-the-eyes color palettes
- MDX support for rich content
- SEO-friendly with sitemap and RSS feed

## Project Structure

```text
├── public/              # Static assets
│   ├── fonts/
│   └── images/
├── src/
│   ├── assets/          # Optimized images
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections (posts, albums)
│   │   ├── posts/       # Blog posts and reviews
│   │   ├── albums/      # Photo albums
│   │   └── templates/   # Content templates
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes and pages
│   └── styles/          # Global styles and themes
├── astro.config.mjs
└── tsconfig.json
```

## Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [MDX](https://mdxjs.com/) - Rich content with React components
- Custom CSS with CSS variables for theming

## License

Feel free to use this as inspiration for your own blog.
