// astro.config.mjs — Vercel (server) staging config
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/server';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://azmobiledieselrepair.com', // keep canonical for sitemap URLs
  output: 'server',
  adapter: vercel(),

  integrations: [
    react(),
    tailwind({
      // Disable the default base styles
      applyBaseStyles: false,
    }),
    mdx()
  ],

  server: {
    port: 4321,
    host: true,
  },
});
