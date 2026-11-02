# ayelenec-web

Portfolio de **Ayelen Cáceres** — Diseñadora UX/UI y web.
Sitio one-page, estático, construido con [Astro 4](https://astro.build/).

> La intención antecede a la forma.

## Stack

- **Astro 4** — salida 100 % estática, sin frameworks de UI ni Tailwind.
- **CSS propio** con variables por tema (`src/styles/theme.css`) y estilos por componente.
- **Fuentes self-hosted** (woff2): Cormorant Garamond, Instrument Sans, JetBrains Mono.
- **Cloudflare Workers** sirviendo el build estático desde `./dist` (`wrangler.jsonc`).

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en ./dist
npm run preview  # sirve el build de ./dist
```

## Estructura

```
src/
  components/   Header, Hero, Services, Projects, Process, About, Contact, Footer
  data/         site.ts (perfil y contenido) · projects.ts (proyectos)
  layouts/      BaseLayout.astro (SEO, tema no-flash, JSON-LD)
  pages/        index.astro · 404.astro
  styles/       theme.css (tokens de color, tipografía, utilidades)
public/
  fonts/        tipografías woff2
  work/         mockups de proyectos (pendientes)
  robots.txt · og.png
```

## Agregar contenido

- **Proyectos**: sumá un objeto a `src/data/projects.ts`. Cargá el mockup en
  `/public/work/` y completá el campo `image`. Si el proyecto tiene `href`, el
  título de la tarjeta pasa a ser link.
- **Perfil, contacto y redes**: `src/data/site.ts`. Los links vacíos no se muestran.

## Pendientes antes de publicar

- [ ] Confirmar con cada cliente que se puede mostrar su nombre.
- [ ] Mockups de los proyectos (`/public/work/`).
- [ ] Retrato para "Sobre mí".
- [ ] LinkedIn, Behance y CV (`/cv-ayelen-caceres.pdf`).
- [ ] Terminar de conectar el dominio `ayelenec.com` en Cloudflare y verificar HTTPS.
- [ ] Decidir si el sitio arranca bilingüe (estructura lista para `/en/`).
