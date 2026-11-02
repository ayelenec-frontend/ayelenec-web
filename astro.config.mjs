// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio placeholder hasta definir el definitivo (ver brief: ayelencaceres.com).
export default defineConfig({
  site: 'https://ayelencaceres.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
