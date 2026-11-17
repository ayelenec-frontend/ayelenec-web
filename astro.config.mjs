// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Dominio definitivo: usado para canonical, Open Graph y sitemap.
export default defineConfig({
  site: 'https://ayelenec.com',
  // El blog queda fuera del sitemap hasta que tenga contenido real.
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/blog'),
    }),
    mdx(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
