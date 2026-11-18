// Datos de proyectos (bilingue). Agregar un proyecto = sumar un objeto aqui.
// Cada tarjeta del carrusel linkea al sitio en vivo (`href`). `image` va en /public/work/.

export type Kind = 'redesign' | 'maintenance';

interface Loc {
  es: string;
  en: string;
}

export interface Project {
  slug: string;
  client: string;
  country: string;
  kind: Kind;
  title: Loc;
  description: Loc;
  /** Chips: rubro + herramientas (el tipo de trabajo va en la pildora) */
  tags: Loc[];
  image?: string;
  /** Sitio en vivo */
  href?: string;
}

export const kindLabel: Record<Kind, Loc> = {
  redesign: { es: 'Rediseño', en: 'Redesign' },
  maintenance: { es: 'Mejora continua', en: 'Ongoing support' },
};

export const projects: Project[] = [
  {
    slug: 'termas-de-chillan',
    image: '/work/termas-de-chillan.webp',
    client: 'Hotel Termas de Chillán',
    country: 'Chile',
    kind: 'redesign',
    title: {
      es: 'Un hotel de montaña, listo para reservar',
      en: 'A mountain hotel, ready to book',
    },
    description: {
      es: 'Rediseño del sitio del hotel: actividades de invierno y verano, habitaciones, spa y reservas en línea en una navegación clara.',
      en: "Redesign of the hotel's site: winter and summer activities, rooms, spa and online booking in a clear navigation.",
    },
    tags: [
      { es: 'Turismo', en: 'Tourism' },
      { es: 'WordPress', en: 'WordPress' },
    ],
    href: 'https://termaschillan.cl/',
  },
  {
    slug: 'la-butiq',
    image: '/work/la-butiq.webp',
    client: 'La Butiq',
    country: 'Chile',
    kind: 'redesign',
    title: {
      es: 'Una tienda de vinos y licores más fácil de recorrer',
      en: 'A wine and spirits store that is easier to browse',
    },
    description: {
      es: 'Rediseño del e-commerce de vinos, champagnes y whisky: promociones, categorías y catálogo ordenados para comprar rápido.',
      en: 'Redesign of a wine, champagne and whisky e-commerce site: promotions, categories and catalog organized for quick buying.',
    },
    tags: [
      { es: 'WordPress', en: 'WordPress' },
      { es: 'WooCommerce', en: 'WooCommerce' },
    ],
    href: 'https://labutiq.cl/',
  },
  {
    slug: 'yoprofe',
    image: '/work/yoprofe.webp',
    client: 'YoProfe',
    country: 'Chile',
    kind: 'redesign',
    title: {
      es: 'Docentes y colegios, un paso más cerca',
      en: 'Teachers and schools, one step closer',
    },
    description: {
      es: 'Rediseño de la plataforma que conecta a profesores con colegios: un sitio que explica rápido cómo funciona y lleva a la app.',
      en: 'Redesign of the platform that connects teachers with schools: a site that quickly explains how it works and leads to the app.',
    },
    tags: [
      { es: 'Educación', en: 'Education' },
      { es: 'WordPress', en: 'WordPress' },
    ],
    href: 'https://yoprofe.cl/',
  },
  {
    slug: 'bcd-travel',
    image: '/work/bcd-travel.webp',
    client: 'BCD Travel',
    country: 'España',
    kind: 'redesign',
    title: {
      es: 'Viajes corporativos, más fáciles de entender',
      en: 'Corporate travel, easier to understand',
    },
    description: {
      es: 'Rediseño del sitio de gestión de viajes corporativos en España: propuesta de valor, productos y acceso de clientes en una navegación clara.',
      en: 'Redesign of the corporate travel management site in Spain: value proposition, products and client access in a clear navigation.',
    },
    tags: [
      { es: 'Viajes corporativos', en: 'Corporate travel' },
      { es: 'WordPress', en: 'WordPress' },
    ],
    href: 'https://bcdtravel.es/',
  },
  {
    slug: 'tw-logistica',
    image: '/work/tw-logistica.webp',
    client: 'TW Logística',
    country: 'Chile',
    kind: 'redesign',
    title: {
      es: 'Logística con mucho que mostrar',
      en: 'Logistics with a lot to show',
    },
    description: {
      es: 'Rediseño del sitio de un operador logístico con muchos servicios y rubros, para que cada cliente encuentre su solución rápido.',
      en: 'Redesign of a logistics operator site with many services and industries, so each client finds their solution fast.',
    },
    tags: [
      { es: 'Logística', en: 'Logistics' },
      { es: 'WordPress', en: 'WordPress' },
    ],
    href: 'https://www.tw.cl/',
  },
  {
    slug: 'aldea-nativa',
    image: '/work/aldea-nativa.webp',
    client: 'Aldea Nativa',
    country: 'Chile',
    kind: 'maintenance',
    title: {
      es: 'Una tienda de productos naturales, fácil de recorrer',
      en: 'A natural foods store, easy to browse',
    },
    description: {
      es: 'Carga y actualización de productos, ajustes de diseño y mejoras de SEO en la tienda, con reportes periódicos.',
      en: 'Product updates, design tweaks and SEO improvements across the store, with regular reporting.',
    },
    tags: [
      { es: 'E-commerce', en: 'E-commerce' },
      { es: 'Shopify', en: 'Shopify' },
    ],
    href: 'https://aldeanativa.cl/',
  },
  {
    slug: 'auto360',
    image: '/work/auto360.webp',
    client: 'Auto360',
    country: 'Chile',
    kind: 'maintenance',
    title: {
      es: 'Autos usados, publicados y fáciles de encontrar',
      en: 'Used cars, listed and easy to find',
    },
    description: {
      es: 'Actualización de contenidos, ajustes de diseño y nuevas secciones en WordPress, a medida que el negocio lo necesita.',
      en: 'Content updates, design tweaks and new WordPress sections, as the business needs them.',
    },
    tags: [
      { es: 'Automotriz', en: 'Automotive' },
      { es: 'WordPress', en: 'WordPress' },
    ],
    href: 'https://www.auto360.cl/',
  },
];
