import type { Meta, StoryObj } from '@storybook/svelte';
import Header from '$lib/components/Header.svelte';

const meta = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'The title displayed in the header',
			defaultValue: 'Storybook Demo'
		},
		showIcon: {
			control: 'boolean',
			description: 'Whether to show the ship icon',
			defaultValue: true
		},
		iconSize: {
			control: { type: 'range', min: 4, max: 16, step: 1 },
			description: 'Size of the icon (in Tailwind units)',
			defaultValue: 8
		}
	}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Storybook Demo',
		showIcon: true,
		iconSize: 8
	}
};

export const NoIcon: Story = {
	args: {
		title: 'Header Without Icon',
		showIcon: false
	}
};

export const LargeIcon: Story = {
	args: {
		title: 'Header With Large Icon',
		showIcon: true,
		iconSize: 12
	}
}; 