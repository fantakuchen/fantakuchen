import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	core: {
		disableTelemetry: true
	},
	viteFinal: async (config) => {
		return mergeConfig(config, {
			define: {
				'process.env.PUBLIC_PROJECT_NAME': JSON.stringify('Storybook Demo')
			},
			resolve: {
				alias: [
					{
						find: '$lib',
						replacement: fileURLToPath(new URL('../src/lib', import.meta.url))
					}
				]
			}
		});
	}
};

export default config;
