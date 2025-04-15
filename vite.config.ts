import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => ({
  base: '/portfolio/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'production' && componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.', // copy to dist/404.html later manually
        }
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
