import path from 'path';

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.tsx'],
  },
  server: {
    port: 5175,
    cors: false,
    watch: {
      usePolling: true,
    },
    // proxy: {
    //   '/api': {
    //     target: 'https://go.v7labs.com',
    //     changeOrigin: true,
    //   },
    // },
  },
});
