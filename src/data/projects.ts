// Datos de proyectos. Agregar un proyecto = sumar un objeto aqui, sin tocar componentes.
// Cuando haya mockups, cargarlos en /public/work/ y completar `image`.
// Si un proyecto tiene `href`, el titulo de la tarjeta pasa a ser link.

export type Discipline = 'UX/UI' | 'Web' | 'SEO' | 'UI' | 'E-commerce' | 'Producto';

export interface Project {
  slug: string;
  client: string;
  country: string;
  discipline: Discipline;
  title: string;
  description: string;
  tools: string[];
  result?: string;
  /** Ruta a mockup en /public/work/, ej: "/work/vinales.jpg". Vacio = placeholder. */
  image?: string;
  /** Link externo o a futuro caso de estudio /proyectos/[slug]. */
  href?: string;
}

export const projects: Project[] = [
  {
    slug: 'vinales',
    client: 'Viñales',
    country: 'Chile',
    discipline: 'SEO',
    title: 'Auditoría SEO y migración de e-commerce',
    description:
      'Auditoría completa de una tienda de vinos, ajustes de búsqueda interna y acompañamiento de la migración de hosting.',
    tools: ['WooCommerce', 'Cloudflare'],
    result: 'Puntaje SEO de 44 a 68/100',
  },
  {
    slug: 'termas-de-chillan',
    client: 'Hotel Termas de Chillán',
    country: 'Chile',
    discipline: 'Web',
    title: 'Widget de clima para un hotel de montaña',
    description:
      'Componente flotante con el clima en vivo para que los huéspedes planifiquen su estadía, más reportes mensuales de búsqueda.',
    tools: ['API Open-Meteo', 'Search Console'],
  },
  {
    slug: 'la-maisonnette',
    client: 'La Maisonnette',
    country: 'Chile',
    discipline: 'UI',
    title: 'Resultados académicos animados',
    description:
      'Widget que presenta los resultados SIMCE y PAES del colegio con animación y los colores de la institución.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'isn',
    client: 'ISN',
    country: 'Chile',
    discipline: 'Web',
    title: 'Componentes web para una inmobiliaria',
    description:
      'Slider de imágenes solo con CSS, liviano y accesible, dentro de un trabajo continuo de SEO.',
    tools: ['CSS', 'SEO'],
  },
  {
    slug: 'aldea-nativa',
    client: 'Aldea Nativa',
    country: 'Argentina',
    discipline: 'SEO',
    title: 'SEO para una tienda de alimentos naturales',
    description:
      'Optimización continua y reportes mensuales con plantillas claras para que el cliente siga la evolución.',
    tools: ['Shopify', 'Search Console'],
  },
  {
    slug: 'regalos-pardo',
    client: 'Regalos Pardo',
    country: 'Argentina',
    discipline: 'E-commerce',
    title: 'Migración de catálogo a WooCommerce',
    description:
      'Importación del catálogo completo desde PrestaShop a WooCommerce, cuidando categorías, variaciones e imágenes.',
    tools: ['PrestaShop', 'WooCommerce'],
  },
];
