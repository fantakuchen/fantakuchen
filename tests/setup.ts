import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/svelte';
import { afterEach, vi } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// Mock environment variables
vi.mock('$env/static/public', () => ({
	PUBLIC_PROJECT_NAME: 'Test Project'
}));

// Add custom matchers
expect.extend(matchers as any);

// Clean up after each test
afterEach(() => {
	cleanup();
}); 