// Traducciones ES/EN. Cada componente detecta el idioma con getLang(Astro.url)
// y toma los textos de t[lang]. Las rutas en ingles viven bajo /en.

export type Lang = 'es' | 'en';

export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es';
}

// Rutas con version en los dos idiomas (en espanol, con barra final).
// Al sumar una pagina traducida, agregarla aca: el layout genera su hreflang solo.
export const translatedRoutes = ['/', '/blog/'];

function withSlash(p: string): string {
  return p.endsWith('/') ? p : p + '/';
}

// Ruta en espanol (sin prefijo /en) y con barra final.
function esPath(pathname: string): string {
  const p = withSlash(pathname);
  if (p === '/en/') return '/';
  return p.startsWith('/en/') ? p.slice(3) : p;
}

// URL equivalente en el otro idioma, para el selector. Los articulos del blog no
// tienen traduccion uno a uno: llevan al indice del blog del otro idioma.
// Rutas sin par (ej. 404) llevan a la home del otro idioma.
export function altPath(pathname: string): string {
  const es = esPath(pathname);
  const target = es.startsWith('/blog/') ? '/blog/' : translatedRoutes.includes(es) ? es : '/';
  return getLang(new URL(pathname, 'https://x')) === 'en' ? target : target === '/' ? '/en/' : '/en' + target;
}

// Pares hreflang de una ruta, o null si la pagina no tiene traduccion.
export function hreflangPair(pathname: string): { es: string; en: string } | null {
  const es = esPath(pathname);
  if (!translatedRoutes.includes(es)) return null;
  return { es, en: es === '/' ? '/en/' : '/en' + es };
}

export const t = {
  es: {
    htmlLang: 'es',
    seo: {
      title: 'Ayelen Caceres · Diseñadora UX/UI y web freelance en Argentina',
      description:
        'Diseñadora UX/UI y web. Investigación, diseño y desarrollo de productos digitales y sitios en WordPress, Shopify y Webflow. Resistencia, Chaco · remoto.',
    },
    nav: [
      { label: 'Inicio', href: '#top' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Sobre mí', href: '#sobre-mi' },
    ],
    cta: 'Escribime',
    menu: { title: 'Menú', open: 'Abrir menú', close: 'Cerrar menú' },
    marquee: ['Diseño UX/UI', 'Figma', 'WordPress', 'Shopify', 'Webflow', 'Diseño gráfico', 'No-code'],
    footerUi: { nav: 'Navegación', contact: 'Contacto', social: 'Redes' },
    hero: {
      eyebrow: 'Diseñadora UX/UI y web',
      status: 'Disponible para proyectos freelance',
      titleLead: 'Interfaces claras, diseñadas con ',
      titleAccent: 'intención',
      lead: 'Diseño productos digitales y sitios web que se entienden a la primera. Acompaño a marcas y equipos desde la investigación hasta la entrega en Figma, WordPress, Shopify o Webflow.',
      projectsBtn: 'Ver proyectos',
      cvBtn: 'Descargar CV',
      cv: '/cv/cv-ayelen-caceres-es.pdf',
      stats: [
        { v: '3', l: 'países' },
        { v: '48 h', l: 'de respuesta' },
      ],
    },
    services: {
      head: 'Qué hago',
      intro1:
        'Investigación, arquitectura de información y prototipos en Figma; sitios institucionales y e-commerce en WordPress, Webflow o Shopify.',
      intro2:
        'Identidad visual y piezas gráficas para redes y campañas; y MVPs con no-code e IA para validar ideas antes de invertir en desarrollo.',
      titles: ['Diseño UX/UI', 'Diseño y desarrollo web', 'Diseño gráfico', 'Producto no-code'],
      lead: 'Cuatro áreas que se combinan en un mismo proceso, de la investigación a la entrega.',
      descs: [
        'Investigación, arquitectura de información y prototipos en Figma.',
        'Sitios institucionales y e-commerce en WordPress, Webflow o Shopify.',
        'Identidad visual y piezas para redes y campañas.',
        'Prototipos funcionales con herramientas no-code e IA, para validar una idea antes de invertir en desarrollo.',
      ],
    },
    process: {
      eyebrow: 'Proceso',
      head: 'Primero la estructura, después el detalle.',
      wfLabels: ['Estructura', 'Detalle'],
      steps: [
        { title: 'Entender', desc: 'Escucho al negocio y a las personas; defino el problema antes que la solución.' },
        { title: 'Ordenar', desc: 'Arquitectura, flujos y wireframes; la estructura se valida antes del color.' },
        { title: 'Diseñar', desc: 'Interfaz, sistema visual y prototipo; cada decisión tiene una razón.' },
        { title: 'Construir y medir', desc: 'Desarrollo el sitio o acompaño la implementación, y después mido el resultado.' },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      hiLead: 'Hola, soy ',
      hiName: 'Ayelen',
      bio: [
        'Soy Ayelen Caceres, diseñadora UX/UI y web desde Resistencia, Chaco. Trabajo con clientes de Argentina, Chile y España, y desde 2026 soy Especialista en Diseño en Performanze, un equipo remoto con base en España.',
        'Me interesa el punto donde la estructura se encuentra con el detalle: que un sitio sea fácil de usar, rápido y que además se sienta cuidado. Por eso combino diseño de interfaces, desarrollo y diseño gráfico en un mismo proceso.',
      ],
      phrase: 'La intención antecede a la forma.',
      portraitNote: 'Tu retrato',
    },
    projects: {
      eyebrow: 'Proyectos',
      head: 'Trabajo seleccionado',
      cta: 'Ver sitio',
    },
    project: {
      back: 'Volver a proyectos',
      tools: 'Herramientas',
      result: 'Resultado',
      soon: 'Caso de estudio en preparación.',
    },
    blog: {
      nav: 'Blog',
      title: 'Blog',
      intro: 'Notas sobre UX, diseño web y datos, en lenguaje claro.',
      readMore: 'Leer más',
      all: 'Todos',
      filterLabel: 'Filtrar por tema',
      sortBy: 'Ordenar por',
      newest: 'Más recientes',
      oldest: 'Más antiguos',
      minRead: 'min de lectura',
      back: 'Volver al blog',
      cta: '¿Querés saber cómo está tu sitio? Escribime y lo revisamos juntos.',
      ctaBtn: 'Escribime',
      empty: 'Próximamente: estoy preparando los primeros artículos.',
      published: 'Publicado el',
    },
    contact: {
      eyebrow: 'Contacto',
      titleLead: '¿Tenés un proyecto en mente? ',
      titleAccent: 'Conversemos.',
      text: 'Respondo en menos de 48 horas. Trabajo en español y en inglés.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      ok: '¡Gracias! Te respondo en menos de 48 horas.',
      error: 'No se pudo enviar. Escribime a ',
      privacy: 'Uso tus datos solo para responder tu consulta. No los comparto con nadie.',
    },
    modal: {
      eyebrow: 'Escribime',
      title: 'Conversemos.',
      intro: 'Contame sobre tu proyecto y te respondo en menos de 48 horas.',
      name: 'Nombre',
      email: 'Email',
      service: 'Servicio de interés',
      servicePlaceholder: 'Elegí una opción (opcional)',
      serviceExtra: ['Trabajo en conjunto', 'Otro'],
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      ok: '¡Gracias! Te voy a responder a la brevedad.',
      error: 'No se pudo enviar. Probá de nuevo o escribime por mail.',
      privacy: 'Uso tus datos solo para responder tu consulta. No los comparto con nadie.',
      alt: 'O escribime directo a ',
      close: 'Cerrar',
    },
    footer: 'Diseño UX/UI · Web · © ',
  },

  en: {
    htmlLang: 'en',
    seo: {
      title: 'Ayelen Caceres · Freelance UX/UI & Web Designer in Argentina',
      description:
        'UX/UI and web designer. Research, design and development of digital products and websites on WordPress, Shopify and Webflow. Based in Argentina · remote.',
    },
    nav: [
      { label: 'Home', href: '#top' },
      { label: 'Services', href: '#servicios' },
      { label: 'Process', href: '#proceso' },
      { label: 'Projects', href: '#proyectos' },
      { label: 'About', href: '#sobre-mi' },
    ],
    cta: 'Get in touch',
    menu: { title: 'Menu', open: 'Open menu', close: 'Close menu' },
    marquee: ['UX/UI design', 'Figma', 'WordPress', 'Shopify', 'Webflow', 'Graphic design', 'No-code'],
    footerUi: { nav: 'Navigation', contact: 'Contact', social: 'Social' },
    hero: {
      eyebrow: 'UX/UI & Web Designer',
      status: 'Available for freelance projects',
      titleLead: 'Clear interfaces, designed with ',
      titleAccent: 'intention',
      lead: 'I design digital products and websites that make sense at first glance. I support brands and teams from research to delivery in Figma, WordPress, Shopify or Webflow.',
      projectsBtn: 'View projects',
      cvBtn: 'Download CV',
      cv: '/cv/cv-ayelen-caceres-en.pdf',
      stats: [
        { v: '3', l: 'countries' },
        { v: '48 h', l: 'reply time' },
      ],
    },
    services: {
      head: 'What I do',
      intro1:
        'Research, information architecture and prototypes in Figma; corporate sites and e-commerce in WordPress, Webflow or Shopify.',
      intro2:
        'Visual identity and graphic pieces for social media and campaigns; and MVPs with no-code and AI to validate ideas before investing in development.',
      titles: ['UX/UI Design', 'Web design & development', 'Graphic design', 'No-code product'],
      lead: 'Four areas that combine in a single process, from research to delivery.',
      descs: [
        'Research, information architecture and prototypes in Figma.',
        'Corporate sites and e-commerce in WordPress, Webflow or Shopify.',
        'Visual identity and pieces for social media and campaigns.',
        'Working prototypes built with no-code tools and AI, to validate an idea before investing in development.',
      ],
    },
    process: {
      eyebrow: 'Process',
      head: 'Structure first, detail second.',
      wfLabels: ['Structure', 'Detail'],
      steps: [
        { title: 'Understand', desc: 'I listen to the business and the people; I define the problem before the solution.' },
        { title: 'Organize', desc: 'Architecture, flows and wireframes; structure is validated before color.' },
        { title: 'Design', desc: 'Interface, visual system and prototype; every decision has a reason.' },
        { title: 'Build & measure', desc: 'I build the site or support the implementation, and then I measure the result.' },
      ],
    },
    about: {
      eyebrow: 'About',
      hiLead: "Hi, I'm ",
      hiName: 'Ayelen',
      bio: [
        "I'm Ayelen Caceres, a UX/UI and web designer based in Resistencia, Chaco. I work with clients in Argentina, Chile and Spain, and since 2026 I'm a Design Specialist at Performanze, a remote team based in Spain.",
        "I care about the point where structure meets detail: a site that's easy to use, fast, and that also feels cared for. That's why I combine interface design, development and graphic design in a single process.",
      ],
      phrase: 'Intention before form.',
      portraitNote: 'Your portrait',
    },
    projects: {
      eyebrow: 'Projects',
      head: 'Selected work',
      cta: 'Visit site',
    },
    project: {
      back: 'Back to projects',
      tools: 'Tools',
      result: 'Result',
      soon: 'Case study in progress.',
    },
    blog: {
      nav: 'Blog',
      title: 'Blog',
      intro: 'Notes on UX, web design and data, in plain language.',
      readMore: 'Read more',
      all: 'All',
      filterLabel: 'Filter by topic',
      sortBy: 'Sort by',
      newest: 'Newest',
      oldest: 'Oldest',
      minRead: 'min read',
      back: 'Back to the blog',
      cta: "Want to know how your site is doing? Get in touch and we'll review it together.",
      ctaBtn: 'Get in touch',
      empty: 'Coming soon: the first articles are on the way.',
      published: 'Published on',
    },
    contact: {
      eyebrow: 'Contact',
      titleLead: 'Have a project in mind? ',
      titleAccent: "Let's talk.",
      text: 'I reply within 48 hours. I work in Spanish and English.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      ok: "Thanks! I'll reply within 48 hours.",
      error: "Couldn't send. Email me at ",
      privacy: 'I only use your details to reply to your message. I never share them.',
    },
    modal: {
      eyebrow: 'Get in touch',
      title: "Let's talk.",
      intro: 'Tell me about your project and I’ll reply within 48 hours.',
      name: 'Name',
      email: 'Email',
      service: 'Service you need',
      servicePlaceholder: 'Pick an option (optional)',
      serviceExtra: ['Collaboration / partnership', 'Other'],
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      ok: "Thanks! I'll get back to you shortly.",
      error: "Couldn't send. Try again or email me.",
      privacy: 'I only use your details to reply to your message. I never share them.',
      alt: 'Or email me directly at ',
      close: 'Close',
    },
    footer: 'UX/UI Design · Web · © ',
  },
} as const;
