import type { Preview } from '@storybook/svelte';
import '../src/styles/app.postcss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			default: 'light'
		}
	}
};

export default preview;
