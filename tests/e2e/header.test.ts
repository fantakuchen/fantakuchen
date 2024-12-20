import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
	test('should display header with default content', async ({ page }) => {
		await page.goto('/');

		// Check logo and title
		const logo = await page.locator('svg.lucide-rocket');
		await expect(logo).toBeVisible();
		await expect(page.getByRole('link', { name: /test project/i })).toBeVisible();
	});

	test('should have correct styles', async ({ page }) => {
		await page.goto('/');

		const header = await page.getByRole('banner');
		await expect(header).toHaveClass(/sticky.*top-0.*z-50.*w-full.*border-b/);

		const container = await header.locator('div').first();
		await expect(container).toHaveClass(/container.*flex.*h-14/);
	});

	test('should keep home link active', async ({ page }) => {
		await page.goto('/');
		const homeLink = page.getByRole('link', { name: /test project/i });
		
		// Click the home link
		await homeLink.click();

		// Check we're still on the home page
		await expect(page).toHaveURL('/');
		await expect(homeLink).toBeVisible();
	});

	test('should be responsive', async ({ page }) => {
		await page.goto('/');

		// Test mobile view
		
		await page.setViewportSize({ width: 375, height: 667 });
		await expect(page.getByRole('banner')).toBeVisible();
		await expect(page.getByRole('link', { name: /test project/i })).toBeVisible();

		// Test desktop view
		await page.setViewportSize({ width: 1440, height: 900 });
		await expect(page.getByRole('banner')).toBeVisible();
		await expect(page.getByRole('link', { name: /test project/i })).toBeVisible();
	});
}); 