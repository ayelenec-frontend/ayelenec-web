// Traducciones ES/EN. Cada componente detecta el idioma con getLang(Astro.url)
// y toma los textos de t[lang]. Las rutas en ingles viven bajo /en.

export type Lang = 'es' | 'en';

export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es';
}

// Dada una ruta, devuelve su equivalente en el otro idioma (para el toggle).
export function altPath(pathname: string): string {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const rest = pathname.replace(/^\/en/, '');
    return rest === '' ? '/' : rest;
  }
  return pathname === '/' ? '/en' : `/en${pathname}`;
}

export const t = {
  es: {
    htmlLang: 'es',
    seo: {
      title: 'Ayelen Caceres · Diseñadora UX/UI y web',
      description:
        'Diseño interfaces claras para productos digitales y sitios web. Investigación, diseño, desarrollo y diseño gráfico en un mismo proceso. Resistencia, Chaco · remoto.',
    },
    nav: [
      { label: 'Inicio', href: '#top' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Proyectos', href: '#proyectos' },
    ],
    cta: 'Escribime',
    hero: {
      eyebrow: 'UX/UI · Web · Producto',
      status: 'Disponible',
      titleLead: 'Interfaces claras, diseñadas con ',
      titleAccent: 'intención',
      lead: 'Diseño interfaces claras para productos digitales y sitios web. Acompaño a marcas y equipos desde la investigación hasta la entrega en Figma, WordPress, Shopify o Webflow.',
      projectsBtn: 'Ver proyectos',
      cvBtn: 'Descargar CV',
      cv: '/cv/cv-ayelen-caceres-es.pdf',
    },
    services: {
      head: 'Qué hago',
      intro1:
        'Investigación, arquitectura de información y prototipos en Figma; sitios institucionales y e-commerce en WordPress, Webflow o Shopify.',
      intro2:
        'Identidad visual y piezas gráficas para redes y campañas; y MVPs con no-code e IA para validar ideas antes de invertir en desarrollo.',
      titles: ['Diseño UX/UI', 'Diseño y desarrollo web', 'Diseño gráfico', 'Producto no-code'],
    },
    process: {
      eyebrow: 'Proceso',
      head: 'Primero la estructura, después el detalle.',
      steps: [
        { title: 'Entender', desc: 'Escucho al negocio y a las personas; defino el problema antes que la solución.' },
        { title: 'Ordenar', desc: 'Arquitectura, flujos y wireframes; la estructura se valida antes del color.' },
        { title: 'Diseñar', desc: 'Interfaz, sistema visual y prototipo; cada decisión tiene una razón.' },
        { title: 'Construir y medir', desc: 'Desarrollo o acompaño la implementación, y mido el resultado.' },
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
      head: 'Trabajo seleccionado.',
      cta: 'Ver proyecto',
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
      intro: 'Notas sobre UX, diseño web y datos — en lenguaje claro.',
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
      empty: 'Muy pronto, los primeros artículos.',
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
    },
    modal: {
      eyebrow: 'Escribime',
      title: 'Conversemos.',
      intro: 'Contame sobre tu proyecto y te respondo en menos de 48 horas.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      ok: '¡Gracias! Te voy a responder a la brevedad.',
      error: 'No se pudo enviar. Probá de nuevo o escribime por mail.',
      alt: 'O escribime directo a ',
      close: 'Cerrar',
    },
    footer: 'Diseño UX/UI · Web · © ',
  },

  en: {
    htmlLang: 'en',
    seo: {
      title: 'Ayelen Caceres · UX/UI & Web Designer',
      description:
        'I design clear interfaces for digital products and websites. Research, design, development and graphic design in a single process. Resistencia, Chaco · remote.',
    },
    nav: [
      { label: 'Home', href: '#top' },
      { label: 'About', href: '#sobre-mi' },
      { label: 'Services', href: '#servicios' },
      { label: 'Process', href: '#proceso' },
      { label: 'Projects', href: '#proyectos' },
    ],
    cta: 'Get in touch',
    hero: {
      eyebrow: 'UX/UI · Web · Product',
      status: 'Available',
      titleLead: 'Clear interfaces, designed with ',
      titleAccent: 'intention',
      lead: 'I design clear interfaces for digital products and websites. I support brands and teams from research to delivery in Figma, WordPress, Shopify or Webflow.',
      projectsBtn: 'View projects',
      cvBtn: 'Download CV',
      cv: '/cv/cv-ayelen-caceres-en.pdf',
    },
    services: {
      head: 'What I do',
      intro1:
        'Research, information architecture and prototypes in Figma; corporate sites and e-commerce in WordPress, Webflow or Shopify.',
      intro2:
        'Visual identity and graphic pieces for social media and campaigns; and MVPs with no-code and AI to validate ideas before investing in development.',
      titles: ['UX/UI Design', 'Web design & development', 'Graphic design', 'No-code product'],
    },
    process: {
      eyebrow: 'Process',
      head: 'Structure first, detail second.',
      steps: [
        { title: 'Understand', desc: 'I listen to the business and the people; I define the problem before the solution.' },
        { title: 'Organize', desc: 'Architecture, flows and wireframes; structure is validated before color.' },
        { title: 'Design', desc: 'Interface, visual system and prototype; every decision has a reason.' },
        { title: 'Build & measure', desc: 'I build or support the implementation, and I measure the result.' },
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
      head: 'Selected work.',
      cta: 'View project',
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
      intro: 'Notes on UX, web design and data — in plain language.',
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
      empty: 'First articles coming soon.',
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
    },
    modal: {
      eyebrow: 'Get in touch',
      title: "Let's talk.",
      intro: 'Tell me about your project and I’ll reply within 48 hours.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      ok: "Thanks! I'll get back to you shortly.",
      error: "Couldn't send. Try again or email me.",
      alt: 'Or email me directly at ',
      close: 'Close',
    },
    footer: 'UX/UI Design · Web · © ',
  },
} as const;
