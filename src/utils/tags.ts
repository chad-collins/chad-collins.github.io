export const TAG_CONFIGS: Record<string, { light: string; dark: string }> = {
	review: { light: '#ec4899', dark: '#f472b6' },
	code: { light: '#3b82f6', dark: '#60a5fa' },
	tutorial: { light: '#a855f7', dark: '#c084fc' },
	album: { light: '#b66a00ff', dark: '#f7cd62ff' },
	book: { light: '#009d69ff', dark: '#34d399' },
	movie: { light: '#e70000ff', dark: '#f87070ff' },
	game: { light: '#6442b3ff', dark: '#a78bfa' },
	show: { light: '#008ea8ff', dark: '#22d3ee' },
	blog: { light: '#64748b', dark: '#94a3b8' }
};

const DEFAULT_TAG_COLOR = { light: '#6a6a6aff', dark: '#b1b1b1ff' };

export function getTagColor(tagName: string, theme: 'light' | 'dark' = 'light'): string {
	const config = TAG_CONFIGS[tagName];
	if (!config) return DEFAULT_TAG_COLOR[theme];
	return config[theme];
}

export function getTagColors(tagName: string): { light: string; dark: string } {
	const config = TAG_CONFIGS[tagName];
	if (!config) return DEFAULT_TAG_COLOR;
	return config;
}