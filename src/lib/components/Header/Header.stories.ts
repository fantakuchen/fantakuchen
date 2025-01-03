import type { Meta, StoryObj } from '@storybook/svelte';
import Header from './Header.svelte';

const meta = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs'],
	argTypes: {
		isScrolled: {
			control: 'boolean',
			description: 'Whether the page has been scrolled'
		}
	},
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isScrolled: false
	}
};

export const Scrolled: Story = {
	args: {
		isScrolled: true
	}
};

// Story that shows the header with a colored background to demonstrate transparency
export const WithBackground: Story = {
	args: {
		isScrolled: false
	},
	parameters: {
		backgrounds: {
			default: 'peach',
			values: [{ name: 'peach', value: '#FFE4C4' }]
		}
	}
};

// Story that shows the header at different viewport sizes
export const Responsive: Story = {
	args: {
		isScrolled: false
	},
	parameters: {
		viewport: {
			viewports: {
				mobile: {
					name: 'Mobile',
					styles: {
						width: '320px',
						height: '568px'
					}
				},
				tablet: {
					name: 'Tablet',
					styles: {
						width: '768px',
						height: '1024px'
					}
				},
				desktop: {
					name: 'Desktop',
					styles: {
						width: '1024px',
						height: '768px'
					}
				}
			},
			defaultViewport: 'desktop'
		}
	}
};
