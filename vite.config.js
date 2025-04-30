import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        documentation1: resolve(__dirname, 'views/documentation-export.html'),
        documentation2: resolve(__dirname, 'views/documentation-stock.html'),
      },
    },
  },
  server: {
    port: 5001,
    host: "0.0.0.0",
    hmr: {
      clientPort: 80,
    },
  },
});