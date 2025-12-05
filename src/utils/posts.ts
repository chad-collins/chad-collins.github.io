import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/**
 * Get all published posts
 */
export async function getPublishedPosts(): Promise<Post[]> {
	const allPosts = await getCollection('posts');
	return allPosts
		.filter(post => post.data.published === true)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Get published blog posts (excluding reviews)
 */
export async function getBlogPosts(limit?: number): Promise<Post[]> {
	const posts = await getPublishedPosts();
	const filtered = posts.filter(post => post.data.type === 'blog');
	return limit ? filtered.slice(0, limit) : filtered;
}

/**
 * Get published reviews
 */
export async function getReviews(limit?: number): Promise<Post[]> {
	const posts = await getPublishedPosts();
	const filtered = posts.filter(post => post.data.type === 'review');
	return limit ? filtered.slice(0, limit) : filtered;
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
	const posts = await getPublishedPosts();
	return posts.filter(post => 
		post.data.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
	);
}

/**
 * Get all unique tags from published posts
 */
export async function getAllTags(): Promise<string[]> {
	const posts = await getPublishedPosts();
	const tags = new Set<string>();
	posts.forEach(post => {
		post.data.tags?.forEach(tag => tags.add(tag));
	});
	return Array.from(tags).sort();
}

/**
 * Get posts by year
 */
export function getPostsByYear(posts: Post[], year: number): Post[] {
	return posts.filter(post => post.data.pubDate.getFullYear() === year);
}
