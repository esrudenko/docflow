import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/docflow/',
  test: {
    environment: 'jsdom',
  },
});
