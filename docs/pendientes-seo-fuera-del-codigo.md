# Pendientes de SEO que no se resuelven en el código

Salen de la auditoría del 17/11/2026 (`ayelenec-com-auditoria-seo.pdf`). Los decide o los hace la dueña del sitio.

## Cloudflare

Hosting confirmado: **Cloudflare Workers con static assets** (`wrangler.jsonc` sirve `./dist`). No es Cloudflare Pages. Los archivos `_headers` y `_redirects` también funcionan en este modo, si se colocan en `public/` (terminan en `dist/`).

1. **Always Use HTTPS**: SSL/TLS > Edge Certificates > Always Use HTTPS. Hoy `http://ayelenec.com` responde 200. Después de activarlo, verificar que devuelva 301.
2. **HSTS**: en la misma pantalla, max-age 6 meses, includeSubDomains. Activarlo recién cuando HTTPS esté confirmado en todo el dominio.
3. **Cabeceras de seguridad**: propuesta de `public/_headers` (no se creó, queda a aprobación):

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

La Content-Security-Policy se deja afuera a propósito: el sitio usa scripts inline y llama a `api.web3forms.com`, así que hay que armarla y probarla con cuidado para no romper el formulario ni el tema.

## DNS

- `www.ayelenec.com` no resuelve. Crear el registro y redirigir con 301 al dominio raíz.

## Search Console y analítica

- Verificar el dominio en Search Console, enviar `sitemap-index.xml` y pedir reindexación de la home (el snippet de Google todavía muestra un texto anterior).
- Elegir analítica (GA4, Plausible o Cloudflare Web Analytics). Decisión de la dueña del sitio; no se agregó ningún script.

## Contenido (lo tiene que aportar Ayelen)

- Casos de estudio por proyecto (`/proyectos/[slug]/`): problema, proceso, decisiones y resultado reales. No se inventó nada.
- Testimonios, página "Sobre mí" ampliada y artículos del blog. El blog sigue en noindex mientras esté vacío.
- Enlaces desde sitios de clientes, Behance o Dribbble.
