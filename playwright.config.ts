import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // or './tests/e2e' if you use a subfolder for E2E
  testMatch: /.*\.spec\.ts$/, // Only run files ending with .spec.ts
  use: {
    baseURL: 'https://minitrello0.netlify.app', // Change if your dev server runs on a different port
    headless: true,
  },
});