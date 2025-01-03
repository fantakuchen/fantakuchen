import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header', () => {
	it('renders logo', () => {
		render(Header, { isScrolled: false });
		const logo = screen.getByAltText('Fantakuchen');
		expect(logo).toBeTruthy();
	});

	it('renders navigation items', () => {
		render(Header, { isScrolled: false });
		expect(screen.getByText('Home')).toBeTruthy();
		expect(screen.getByText('Games')).toBeTruthy();
		expect(screen.getByText('About')).toBeTruthy();
	});

	it('applies correct styles when not scrolled', () => {
		render(Header, { isScrolled: false });
		const header = document.querySelector('div[class*="fixed"]');
		expect(header?.classList.contains('bg-transparent')).toBe(true);
		expect(header?.classList.contains('bg-[#FF6B4A]')).toBe(false);
	});

	it('applies correct styles when scrolled', () => {
		render(Header, { isScrolled: true });
		const header = document.querySelector('div[class*="fixed"]');
		expect(header?.classList.contains('bg-transparent')).toBe(false);
		expect(header?.classList.contains('bg-[#FF6B4A]')).toBe(true);
	});

	it('renders mobile menu button on small screens', () => {
		render(Header, { isScrolled: false });
		const button = document.querySelector('button.md\\:hidden');
		expect(button).toBeTruthy();
	});

	it('links have correct hrefs', () => {
		render(Header, { isScrolled: false });
		const links = screen.getAllByRole('link');

		// Logo link
		expect(links[0].getAttribute('href')).toBe('/');

		// Nav links
		expect(links[1].getAttribute('href')).toBe('/');
		expect(links[2].getAttribute('href')).toBe('/games');
		expect(links[3].getAttribute('href')).toBe('/about');
	});
});
