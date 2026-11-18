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
      // Agrega xhtml:link (hreflang) entre la version ES y la EN de cada URL.
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
      filter: (page) =>
        !page.includes('/blog'),
    }),
    mdx(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
