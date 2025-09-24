// astro.config.mjs — Vercel (server) + MDX integration
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://azmobiledieselrepair.com',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx()
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,

  server: {
    port: 4321,
    host: true,
  },

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Conservative chunking to keep SSR bundle lean
            vendor: ['react', 'react-dom']
          }
        }
      }
    }
  }
});
