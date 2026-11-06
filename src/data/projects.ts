// Datos de proyectos (bilingue). Agregar un proyecto = sumar un objeto aqui.
// title/description/result llevan { es, en }. Cuando haya mockups, cargarlos en
// /public/work/ y completar `image`. `href` opcional para un caso de estudio.

export type Discipline = 'UX/UI' | 'Web' | 'SEO' | 'UI' | 'E-commerce' | 'Producto';

interface Loc {
  es: string;
  en: string;
}

export interface Project {
  slug: string;
  client: string;
  country: string;
  discipline: Discipline;
  title: Loc;
  description: Loc;
  tools: string[];
  result?: Loc;
  image?: string;
  href?: string;
}

export const projects: Project[] = [
  {
    slug: 'vinales',
    client: 'Viñales',
    country: 'Chile',
    discipline: 'SEO',
    title: {
      es: 'Auditoría SEO y migración de e-commerce',
      en: 'SEO audit and e-commerce migration',
    },
    description: {
      es: 'Auditoría completa de una tienda de vinos, ajustes de búsqueda interna y acompañamiento de la migración de hosting.',
      en: 'Full audit of a wine store, internal search tweaks and support through the hosting migration.',
    },
    tools: ['WooCommerce', 'Cloudflare'],
    result: { es: 'Puntaje SEO de 44 a 68/100', en: 'SEO score from 44 to 68/100' },
  },
  {
    slug: 'termas-de-chillan',
    client: 'Hotel Termas de Chillán',
    country: 'Chile',
    discipline: 'Web',
    title: {
      es: 'Widget de clima para un hotel de montaña',
      en: 'Weather widget for a mountain hotel',
    },
    description: {
      es: 'Componente flotante con el clima en vivo para que los huéspedes planifiquen su estadía, más reportes mensuales de búsqueda.',
      en: 'A floating live-weather component so guests can plan their stay, plus monthly search reports.',
    },
    tools: ['API Open-Meteo', 'Search Console'],
  },
  {
    slug: 'la-maisonnette',
    client: 'La Maisonnette',
    country: 'Chile',
    discipline: 'UI',
    title: {
      es: 'Resultados académicos animados',
      en: 'Animated academic results',
    },
    description: {
      es: 'Widget que presenta los resultados SIMCE y PAES del colegio con animación y los colores de la institución.',
      en: "A widget that presents the school's SIMCE and PAES results with animation and the institution's colors.",
    },
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'isn',
    client: 'ISN',
    country: 'Chile',
    discipline: 'Web',
    title: {
      es: 'Componentes web para una inmobiliaria',
      en: 'Web components for a real-estate agency',
    },
    description: {
      es: 'Slider de imágenes solo con CSS, liviano y accesible, dentro de un trabajo continuo de SEO.',
      en: 'A CSS-only image slider, lightweight and accessible, within ongoing SEO work.',
    },
    tools: ['CSS', 'SEO'],
  },
  {
    slug: 'aldea-nativa',
    client: 'Aldea Nativa',
    country: 'Argentina',
    discipline: 'SEO',
    title: {
      es: 'SEO para una tienda de alimentos naturales',
      en: 'SEO for a natural-food store',
    },
    description: {
      es: 'Optimización continua y reportes mensuales con plantillas claras para que el cliente siga la evolución.',
      en: 'Ongoing optimization and monthly reports with clear templates so the client can track progress.',
    },
    tools: ['Shopify', 'Search Console'],
  },
  {
    slug: 'regalos-pardo',
    client: 'Regalos Pardo',
    country: 'Argentina',
    discipline: 'E-commerce',
    title: {
      es: 'Migración de catálogo a WooCommerce',
      en: 'Catalog migration to WooCommerce',
    },
    description: {
      es: 'Importación del catálogo completo desde PrestaShop a WooCommerce, cuidando categorías, variaciones e imágenes.',
      en: 'Full catalog import from PrestaShop to WooCommerce, preserving categories, variations and images.',
    },
    tools: ['PrestaShop', 'WooCommerce'],
  },
];
