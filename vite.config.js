import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        documentation1: resolve(__dirname, 'documentation-export.html'),
        documentation2: resolve(__dirname, 'documentation-stock.html'),
      },
    },
  },
});