import { Translations } from './i18n.models';

export const es: Translations = {
  // ─── NAV ─────────────────────────
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre Mí',
    contact: 'Contacto',
    cta: 'Contactar →',
  },

  // ─── HERO ────────────────────────
  hero: {
    greeting: 'Hola, soy',
    viewProjects: 'Ver Proyectos',
    contactMe: 'Contactar',
  },

  // ─── PERSONAL / DATA ─────────────
  personal: {
    role: 'Full Stack Developer',
    bio: 'Desarrollador Full Stack apasionado por crear experiencias digitales de alto rendimiento con arquitecturas modernas, clean code y diseño centrado en el usuario.',
    location: 'España',
  },

  // ─── STATS ───────────────────────
  stats: {
    projects: 'Proyectos',
    yearsExp: 'Años Exp.',
    technologies: 'Tecnologías',
    passion: '% Pasión',
  },

  // ─── HOME SECTIONS ───────────────
  home: {
    featuredTitle: 'Proyectos Destacados',
    featuredSubtitle: 'Mi Trabajo',
    viewAll: 'Ver todos los proyectos',
    techTitle: 'Mi Stack Tecnológico',
    techSubtitle: 'Herramientas',
    ctaTitle: '¿Tienes un proyecto\nen mente?',
    ctaDescription: 'Estoy disponible para freelance, colaboraciones y oportunidades interesantes.',
    ctaButton: 'Hablemos →',
  },

  // ─── PROJECTS PAGE ───────────────
  projectsPage: {
    subtitle: 'Portfolio',
    title: 'Mis',
    titleHighlight: 'proyectos destacados',
    description: 'Una selección de proyectos personales y profesionales que ha lo largo de mi carrera he podido realizar con distintos clientes',
  },

  // ─── PROJECT DESCRIPTIONS ────────
  projectDescriptions: {
    'hospital-app': 'Sistema de administración para la gestión en hospitales de médicos, con control de usuarios, sistema de busqueda, autenticación y registro, asi como roles de usuarios y premisos',
    'katapulk': 'Entrega de paquetes distribuidas por el mapa, pudiendo revisar ordenes, escanear, imprimir y calcular la ruta mas cercana.',
    'credit-card': 'Sitio web para configurar una tarjeta electrónica con datos personalizados.',
    'vitrina-store': 'Plataforma de comercio electrónico completa con panel de administración, pagos integrados y analíticas en tiempo real, sistema de gestion de articulos para usuarios y clientes.',
    'mobile-tiktock': 'Aplicación móvil sencilla para reaccionar a videos estilo red social.',
    'password-generator': 'Plataforma para generar passwords seguros automaticos con un solo click.',
  },

  // ─── ABOUT PAGE ──────────────────
  aboutPage: {
    subtitle: 'Sobre Mí',
    title: 'Código con',
    titleHighlight: 'propósito',
    expTitle: 'Experiencia',
    expSubtitle: 'Trayectoria',
    skillsTitle: 'Dominio Técnico',
    skillsSubtitle: 'Skills',
    valuesTitle: 'Cómo Trabajo',
    valuesSubtitle: 'Filosofía',
  },

  // ─── EXPERIENCE ──────────────────
  experience: [
    {
      period: '2022 — 2026',
      role: 'Full Stack Developer',
      company: 'Automa',
      description: 'Desarrollador lider en Flutter y desarrollador full stack en Angular, Java con Spring Boot, entre otras tecnologias menos usuadas',
    },
    {
      period: '2022 — 2025',
      role: 'Senior Full Stack Developer',
      company: 'DClick Solution',
      description: 'Desarrollador lider en Flutter y full stack en Angular, Nestjs, SQL, entre otras tecnologias menos usuadas',
    },
    {
      period: '2021 — 2022',
      role: 'Web Developer',
      company: 'EMGEF',
      description: 'Desarrollo de web empresarial. Administracion de sistemas Virtualizados, monitoreo y backup',
    },
    {
      period: '2019 — 2020',
      role: 'Administrador de Red',
      company: 'ATI',
      description: 'Administrar sistemas, implementacion de sistemas de tickets y despliegue de aplicaciones web',
    },
  ],

  // ─── SKILLS ──────────────────────
  skills: [
    'Frontend (Angular, Flutter)',
    'Backend (Node.js, NestJS)',
    'Bases de Datos (SQL, NoSQL)',
    'DevOps (Linux, Docker)',
    'UI/UX',
  ],

  // ─── VALUES ──────────────────────
  values: [
    { emoji: '🧹', title: 'Clean Code', description: 'Código legible, mantenible y bien testeado. SOLID, DRY y patrones probados.' },
    { emoji: '🚀', title: 'Rendimiento', description: 'Optimización desde el primer commit. Lazy loading, caching y métricas Core Web Vitals.' },
    { emoji: '🤝', title: 'Colaboración', description: 'Comunicación clara, code reviews constructivos y documentación que aporta valor real.' },
  ],

  // ─── CONTACT PAGE ────────────────
  contactPage: {
    subtitle: 'Contacto',
    title: '¿Trabajamos',
    titleHighlight: 'juntos',
    description: 'Si tienes un proyecto, una idea o simplemente quieres conectar, escríbeme.',
    formTitle: 'Envíame un mensaje',
    labelName: 'Nombre',
    labelEmail: 'Email',
    labelSubject: 'Asunto',
    labelMessage: 'Mensaje',
    placeholderName: 'Tu nombre',
    placeholderEmail: 'tu@email.com',
    placeholderMessage: 'Cuéntame sobre tu proyecto o idea...',
    selectSubject: 'Selecciona un motivo',
    subjectOptions: ['Proyecto Freelance', 'Oportunidad Laboral', 'Colaboración', 'Solo quiero saludar 👋'],
    sending: 'Enviando...',
    send: 'Enviar Mensaje →',
    successTitle: '¡Mensaje Enviado!',
    successDescription: 'Te respondo en menos de 24 horas. ¡Gracias!',
    infoTitle: 'Información',
    infoEmail: 'Email',
    infoLocation: 'Ubicación',
    availabilityTitle: 'Disponibilidad',
    freelance: 'Freelance',
    fulltime: 'Full-time',
    remote: 'Remoto',
    available: 'Disponible',
    openToOffers: 'Abierto a ofertas',
    preferred: 'Preferido',
  },

  // ─── TERMINAL ────────────────────
  terminal: {
    status: 'Disponible para proyectos',
  },

  // ─── FOOTER ──────────────────────
  footer: {
    navigation: 'Navegación',
    social: 'Social',
    rights: 'Todos los derechos reservados.',
    statusOnline: 'Disponible para proyectos',
  },
};
