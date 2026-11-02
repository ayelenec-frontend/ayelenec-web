// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio definitivo: usado para canonical, Open Graph y sitemap.
export default defineConfig({
  site: 'https://ayelenec.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
