import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ['tests/setup.ts'],
		alias: [
			{
				find: '$lib',
				replacement: path.resolve(__dirname, './src/lib')
			},
			{
				find: '$env/static/public',
				replacement: path.resolve(__dirname, './tests/mocks/app/env/static/public.ts')
			}
		]
	}
}); 