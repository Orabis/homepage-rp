import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins:[
    viteStaticCopy({
      targets: [
        {
          src: 'views/*',
          dest: 'views'
        }
      ]
    })
  ],
  server: {
    port: 5001,
    host: "0.0.0.0",
    hmr: {
      clientPort: 80,
    },
  },
});