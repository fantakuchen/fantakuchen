import { defineConfig, devices } from '@playwright/test';
import { resolve } from 'path';
import dotenv from 'dotenv';

// Load test environment variables
dotenv.config({ path: resolve(process.cwd(), '.env.test') });

export default defineConfig({
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173,
		reuseExistingServer: !process.env.CI,
		env: {
			NODE_ENV: 'test',
			PUBLIC_PROJECT_NAME: process.env.PUBLIC_PROJECT_NAME || 'Test Project'
		}
	},
	testDir: 'tests/e2e',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
	],
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? 'dot' : 'list'
});
