import type { Meta, StoryObj } from '@storybook/svelte';
import GameCard from './GameCard.svelte';

const meta = {
	title: 'Components/GameCard',
	component: GameCard,
	tags: ['autodocs'],
	argTypes: {
		compact: {
			control: 'boolean',
			description: 'Whether to show the compact version of the card'
		},
		title: {
			control: 'text',
			description: 'The title of the game'
		},
		description: {
			control: 'text',
			description: 'The description of the game'
		},
		image: {
			control: 'text',
			description: 'URL of the game image'
		},
		tags: {
			control: 'array',
			description: 'Array of game tags'
		},
		github: {
			control: 'text',
			description: 'GitHub repository URL'
		},
		features: {
			control: 'array',
			description: 'Array of game features'
		}
	}
} satisfies Meta<GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Ant Keeper',
		description:
			'Build and manage your own ant colony! Start with a single queen ant and grow your colony into a thriving empire.',
		image: '/images/ant-keeper.webp',
		tags: ['Simulation', 'Strategy'],
		github: 'https://github.com/JamesHusband/Ant-Keeper',
		features: [
			'Start with a single queen ant',
			'Manage colony resources',
			'Defend against predators',
			'Expand your territory'
		]
	}
};

export const Compact: Story = {
	args: {
		...Default.args,
		compact: true
	}
};

export const NoFeatures: Story = {
	args: {
		...Default.args,
		features: []
	}
};

export const LongDescription: Story = {
	args: {
		...Default.args,
		description: 'This is a very long description that should wrap to multiple lines. '.repeat(5)
	}
};

export const ManyTags: Story = {
	args: {
		...Default.args,
		tags: ['Simulation', 'Strategy', 'Management', 'Colony', 'Ants', 'Resource Management']
	}
};
