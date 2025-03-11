import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5001,
    host: "0.0.0.0",
    hmr: {
      clientPort: 80,
    },
  },
});