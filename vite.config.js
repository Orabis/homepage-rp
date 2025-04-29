import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'Documentation ExportGitlab': 'doc-export/index.html',
        'Documentation StockSeeker': 'doc-stock/index.html',
      }
    }
  },
  server: {
    port: 5001,
    host: "0.0.0.0",
    hmr: {
      clientPort: 80,
    },
  },
});