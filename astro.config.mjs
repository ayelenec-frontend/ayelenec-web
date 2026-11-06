// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio definitivo: usado para canonical, Open Graph y sitemap.
export default defineConfig({
  site: 'https://ayelenec.com',
  // /preview (portfolio completo mientras el index muestra "en construccion")
  // se excluye del sitemap para que no lo indexen.
  integrations: [
    sitemap({ filter: (page) => !page.includes('/preview') && !page.includes('/proyectos') }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
