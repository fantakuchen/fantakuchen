import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Header from '../src/lib/components/Header.svelte';

describe('Header', () => {
	it('renders with default props', async () => {
		render(Header);
		
		expect(screen.getByRole('banner')).toBeInTheDocument();
		expect(screen.getByRole('banner')).toHaveClass('sticky', 'top-0', 'z-50', 'w-full', 'border-b');
		expect(screen.getByRole('link', { name: /test project/i })).toBeInTheDocument();
		expect(screen.getByText('Test Project')).toBeInTheDocument();
	});

	it('displays custom title', async () => {
		render(Header, { props: { title: 'Custom Title' } });
		expect(screen.getByRole('link', { name: /custom title/i })).toBeInTheDocument();
	});

	it('shows/hides icon based on showIcon prop', async () => {
		const { component } = render(Header);
		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();

		await component.$set({ showIcon: false });
		expect(screen.queryByRole('img', { hidden: true })).not.toBeInTheDocument();
	});

	it('adjusts icon size based on iconSize prop', async () => {
		render(Header, { props: { iconSize: 12 } });
		const icon = screen.getByRole('img', { hidden: true });
		expect(icon).toHaveClass('h-12', 'w-12');
	});
}); 