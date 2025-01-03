declare module '*.svelte' {
	export { SvelteComponentDev as default } from 'svelte/internal';
}

export interface HeaderProps {
	isScrolled: boolean;
}
