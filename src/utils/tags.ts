export const TAG_CONFIGS: Record<string, { color: string; darkColor?: string }> = {
	review: { color: '#ec4899', darkColor: '#f472b6' },
	code: { color: '#3b82f6', darkColor: '#60a5fa' },
	tutorial: { color: '#a855f7', darkColor: '#c084fc' },
	album: { color: '#b66a00ff', darkColor: '#f7cd62ff' },
	book: { color: '#009d69ff', darkColor: '#34d399' },
	movie: { color: '#e70000ff', darkColor: '#f87070ff' },
	game: { color: '#6442b3ff', darkColor: '#a78bfa' },
	show: { color: '#008ea8ff', darkColor: '#22d3ee' },
	blog: { color: '#64748b', darkColor: '#94a3b8' }
};

const DEFAULT_TAG_COLOR = { light: '#64748b', dark: '#94a3b8' };

export function getTagColor(tagName: string, isDark: boolean = false): string {
	const config = TAG_CONFIGS[tagName];
	if (!config) return isDark ? DEFAULT_TAG_COLOR.dark : DEFAULT_TAG_COLOR.light;
	return isDark && config.darkColor ? config.darkColor : config.color;
}