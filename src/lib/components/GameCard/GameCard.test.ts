import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import GameCard from './GameCard.svelte';

const mockGame = {
	title: 'Test Game',
	description: 'A test game description',
	image: '/test-image.jpg',
	tags: ['Test', 'Game'],
	github: 'https://github.com/test',
	features: ['Feature 1', 'Feature 2']
};

describe('GameCard', () => {
	it('renders compact version correctly', () => {
		render(GameCard, { ...mockGame, compact: true });

		expect(screen.getByText('Test Game')).toBeTruthy();
		expect(screen.getByText('Test')).toBeTruthy();
		expect(screen.getByText('Game')).toBeTruthy();
		expect(screen.getByText('Play Now')).toBeTruthy();
		expect(screen.queryByText('Feature 1')).toBeFalsy(); // Features not shown in compact mode
	});

	it('renders full version correctly', () => {
		render(GameCard, mockGame);

		expect(screen.getByText('Test Game')).toBeTruthy();
		expect(screen.getByText('A test game description')).toBeTruthy();
		expect(screen.getByText('Test')).toBeTruthy();
		expect(screen.getByText('Game')).toBeTruthy();
		expect(screen.getByText('Feature 1')).toBeTruthy();
		expect(screen.getByText('Feature 2')).toBeTruthy();
		expect(screen.getByText('Play Now')).toBeTruthy();
	});

	it('renders correct image', () => {
		render(GameCard, mockGame);
		const img = screen.getByAltText('Test Game') as HTMLImageElement;
		expect(img.src).toContain('test-image.jpg');
	});

	it('links to correct GitHub URL', () => {
		render(GameCard, mockGame);
		const link = screen.getByText('Play Now').closest('a');
		expect(link?.href).toBe('https://github.com/test');
	});
});
