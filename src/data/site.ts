// Datos de perfil y contenido del sitio. Los links vacios no se muestran.
// Preparado para una futura version en ingles en /en/ (duplicar textos segun haga falta).

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  tools: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  // --- Identidad ---
  name: 'Ayelen Cáceres',
  role: 'Diseñadora UX/UI y web',
  roleEn: 'UX/UI & Web Designer',
  tagline: 'La intención antecede a la forma.',
  taglineEn: 'Intention before form.',
  location: 'Resistencia, Chaco · Argentina',

  // --- SEO ---
  url: 'https://ayelenec.com',
  title: 'Ayelen Cáceres — Diseñadora UX/UI y web',
  description:
    'Diseño interfaces claras para productos digitales y sitios web. Investigación, diseño, desarrollo y SEO en un mismo proceso. Resistencia, Chaco · remoto.',
  ogImage: '/og.png',
  locale: 'es_AR',

  // --- Contacto ---
  email: 'ayelenec.uxui@gmail.com',
  cv: '', // cuando exista: '/cv-ayelen-caceres.pdf'

  // Links de perfil: vacios no se muestran.
  social: [
    { label: 'LinkedIn', href: '' },
    { label: 'Behance', href: '' },
    { label: 'Dribbble', href: '' },
  ] as SocialLink[],
} as const;

export const nav: NavItem[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Sobre mí', href: '#sobre-mi' },
];

export const hero = {
  eyebrow: 'UX/UI · Web · Producto',
  statusLabel: 'Disponible',
  // El titulo se arma en el componente para resaltar "intención" en cursiva plume.
  titleLead: 'Interfaces claras, diseñadas con ',
  titleAccent: 'intención',
  lead: 'Diseño interfaces claras para productos digitales y sitios web. Acompaño a marcas y equipos desde la investigación hasta la entrega en Figma, WordPress, Shopify o Webflow.',
  scope: 'AR · CL · ES · Remoto',
} as const;

export const services: Service[] = [
  {
    number: '01',
    title: 'Diseño UX/UI',
    description:
      'Investigación, arquitectura de información, wireframes y prototipos en Figma.',
    tools: ['Figma', 'Prototipado', 'Design systems'],
  },
  {
    number: '02',
    title: 'Diseño y desarrollo web',
    description: 'Sitios institucionales y e-commerce.',
    tools: ['WordPress', 'Elementor', 'Webflow', 'Shopify', 'WooCommerce'],
  },
  {
    number: '03',
    title: 'SEO y optimización',
    description:
      'Auditorías, mejoras técnicas y reportes de Search Console que el cliente entiende.',
    tools: ['Auditorías', 'Search Console', 'Rendimiento'],
  },
  {
    number: '04',
    title: 'Producto no-code',
    description: 'MVPs y herramientas internas con no-code e IA.',
    tools: ['Bubble', 'Lovable', 'Supabase', 'Softr'],
  },
];

export const process: ProcessStep[] = [
  {
    number: '01',
    title: 'Entender',
    description:
      'Escucho al negocio y a las personas; defino el problema antes que la solución.',
  },
  {
    number: '02',
    title: 'Ordenar',
    description:
      'Arquitectura, flujos y wireframes; la estructura se valida antes del color.',
  },
  {
    number: '03',
    title: 'Diseñar',
    description:
      'Interfaz, sistema visual y prototipo; cada decisión tiene una razón.',
  },
  {
    number: '04',
    title: 'Construir y medir',
    description:
      'Desarrollo o acompaño la implementación, y mido el resultado.',
  },
];

export const about = {
  bio: [
    'Soy Ayelen Cáceres, diseñadora UX/UI y web desde Resistencia, Chaco. Trabajo con clientes de Argentina, Chile y España, y desde 2026 soy Especialista en Diseño en Performanze, un equipo remoto con base en España.',
    'Me interesa el punto donde la estructura se encuentra con el detalle: que un sitio sea fácil de usar, rápido y encontrable, y que además se sienta cuidado. Por eso combino diseño de interfaces, desarrollo y SEO en un mismo proceso.',
    'Fuera de los proyectos, diseño piezas gráficas y de redes como voluntaria para organizaciones por los derechos de los animales.',
  ],
  tools: [
    'Figma',
    'Adobe Suite',
    'WordPress',
    'Elementor',
    'WooCommerce',
    'Shopify',
    'Webflow',
    'Bubble',
    'Lovable',
    'Supabase',
    'Softr',
    'SEO técnico',
    'Search Console',
    'IA aplicada al diseño',
  ],
  // Retrato pendiente: cuando exista, cargarlo en /public/ y completar portrait.
  portrait: '',
} as const;

export const contact = {
  titleLead: '¿Tenés un proyecto en mente? ',
  titleAccent: 'Conversemos.',
  text: 'Respondo en menos de 48 horas. Trabajo en español y en inglés.',
} as const;
