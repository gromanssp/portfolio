import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'ES' | 'EN' | 'IT';

interface Translations {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
    portfolio: string;
  };
  hero: {
    greeting: string;
    role: string;
    publicity: string;
    viewProjects: string;
    connect: string;
  };
  about: {
    title: string;
    expTitle: string;
    skillsTitle: string;
    bio: string;
  };
  experience: {
    automa: string;
    dclick: string;
    emgef: string;
    ati: string;
  };
  projects: {
    title: string;
    preview: string;
    comingSoon: string;
    previewUnavailable: string;
    demoPreview: string;
    closePreview: string;
    open: string;
  };
  contact: {
    title: string;
    intro: string;
    visit: string;
    github: string;
    linkedin: string;
    fiverr: string;
    upwork: string;
    freelancer: string;
  };
  footer: {
    rights: string;
  };
}

const ES: Translations = {
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre Mí',
    contact: 'Contacto',
    portfolio: 'Portfolio'
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Full Stack Developer',
    publicity: '¿Tu web es lenta, se ve desactualizada o no convierte como debería? Cada segundo cuenta: el rendimiento, el diseño y la experiencia de usuario impactan directamente en tus resultados. Te ayudo a optimizar tu sitio para que sea más rápido, atractivo y eficaz.',
    viewProjects: 'Ver Proyectos',
    connect: 'Conecta Conmigo'
  },
  about: {
    title: 'Sobre Mí',
    expTitle: 'Trayectoria / Experiencia',
    skillsTitle: 'Habilidades',
    bio: 'Desarrollador de software con más de 5 años de experiencia, especializado en análisis de problemas y soluciones prácticas. Creo aplicaciones desde cero en Flutter y modernizo proyectos web con Angular, enfocándome en UX front-end, API REST y análisis de datos. Comprometido con la mejora continua y soluciones tecnológicas de alta calidad.'
  },
  experience: {
    automa: 'Desarrollador líder en Flutter y desarrollador full stack en Angular, Java con Spring Boot, entre otras tecnologías.',
    dclick: 'Desarrollador líder en Flutter y full stack en Angular, Nestjs, SQL, entre otras tecnologías.',
    emgef: 'Desarrollo de web empresarial. Administración de sistemas virtualizados, monitoreo y backup.',
    ati: 'Administrar sistemas, implementación de sistemas de tickets y despliegue de aplicaciones web.'
  },
  projects: {
    title: 'Proyectos',
    preview: 'Preview',
    comingSoon: 'Próximamente',
    previewUnavailable: 'Vista previa no disponible',
    open: 'Abrir',
    closePreview: 'Cerrar vista previa',
    demoPreview: 'Demo Preview'
  },
  contact: {
    title: 'Conecta Conmigo',
    intro: '¿Tienes un proyecto en mente, buscas un colaborador técnico o simplemente quieres decir hola? Conéctate conmigo en mis plataformas profesionales.',
    visit: 'Visitar Perfil',
    github: 'Explora mis repositorios de código, demos y colaboraciones open-source.',
    linkedin: 'Conectemos en el ámbito profesional, comparte ideas o hablemos de oportunidades.',
    fiverr: 'Contrátame de manera directa y segura para desarrollos freelance personalizados.',
    upwork: 'Colaboremos en tu próximo gran MVP o ampliemos tu equipo técnico a largo plazo.',
    freelancer: 'Encuéntrame también en Freelancer para proyectos de desarrollo web y móvil.'
  },
  footer: {
    rights: 'Todos los derechos reservados.'
  }
};

const EN: Translations = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About Me',
    contact: 'Contact',
    portfolio: 'Portfolio'
  },
  hero: {
    greeting: 'Hi, I\'m',
    role: 'Full Stack Developer',
    publicity: 'Is your website slow, outdated, or not converting as it should? Every second counts: performance, design, and user experience directly impact your results. I help you optimize your site to make it faster, more attractive, and more effective.',
    viewProjects: 'View Projects',
    connect: 'Connect With Me'
  },
  about: {
    title: 'About Me',
    expTitle: 'Career / Experience',
    skillsTitle: 'Skills',
    bio: 'Software developer with 5+ years of experience, specialized in problem analysis and practical solutions. I build applications from scratch in Flutter and modernize web projects with Angular, focusing on front-end UX, REST APIs, and data analytics. Committed to continuous improvement and high-quality technological solutions.'
  },
  experience: {
    automa: 'Lead Flutter developer and full stack developer in Angular, Java with Spring Boot, among other technologies.',
    dclick: 'Lead Flutter developer and full stack in Angular, Nestjs, SQL, among other technologies.',
    emgef: 'Corporate web development. Virtualized systems administration, monitoring and backup.',
    ati: 'Systems administration, ticket system implementation and web application deployment.'
  },
  projects: {
    title: 'Projects',
    preview: 'Preview',
    comingSoon: 'Coming Soon',
    previewUnavailable: 'Preview not available',
    open: 'Open',
    closePreview: 'Close preview',
    demoPreview: 'Demo Preview'
  },
  contact: {
    title: 'Connect With Me',
    intro: 'Have a project in mind, looking for a technical collaborator, or just want to say hi? Connect with me on my professional platforms.',
    visit: 'Visit Profile',
    github: 'Explore my code repositories, demos, and open-source collaborations.',
    linkedin: 'Let\'s connect professionally, share ideas, or talk about opportunities.',
    fiverr: 'Hire me directly and securely for custom freelance development.',
    upwork: 'Let\'s collaborate on your next big MVP or expand your technical team long-term.',
    freelancer: 'Find me also on Freelancer for web and mobile development projects.'
  },
  footer: {
    rights: 'All rights reserved.'
  }
};

const IT: Translations = {
  nav: {
    home: 'Home',
    projects: 'Progetti',
    about: 'Chi Sono',
    contact: 'Contatti',
    portfolio: 'Portfolio'
  },
  hero: {
    greeting: 'Ciao, sono',
    role: 'Full Stack Developer',
    publicity: 'Il tuo sito è lento, obsoleto o non converte come dovrebbe? Ogni secondo conta: prestazioni, design ed esperienza utente incidono direttamente sui tuoi risultati. Ti aiuto a ottimizzare il tuo sito per renderlo più veloce, attraente ed efficace.',
    viewProjects: 'Vedi Progetti',
    connect: 'Contattami'
  },
  about: {
    title: 'Chi Sono',
    expTitle: 'Carriera / Esperienza',
    skillsTitle: 'Competenze',
    bio: 'Sviluppatore di software con oltre 5 anni di esperienza, specializzato nell\'analisi dei problemi e soluzioni pratiche. Creo applicazioni da zero in Flutter e modernizzo progetti web con Angular, concentrandomi su UX front-end, API REST e analisi dei dati. Impegnato nel miglioramento continuo e in soluzioni tecnologiche di alta qualità.'
  },
  experience: {
    automa: 'Sviluppatore leader Flutter e full stack in Angular, Java con Spring Boot, tra le altre tecnologie.',
    dclick: 'Sviluppatore leader Flutter e full stack in Angular, Nestjs, SQL, tra le altre tecnologie.',
    emgef: 'Sviluppo web aziendale. Amministrazione di sistemi virtualizzati, monitoraggio e backup.',
    ati: 'Amministrazione sistemi, implementazione sistemi di ticket e distribuzione applicazioni web.'
  },
  projects: {
    title: 'Progetti',
    preview: 'Anteprima',
    comingSoon: 'Prossimamente',
    previewUnavailable: 'Anteprima non disponibile',
    open: 'Apri',
    closePreview: 'Chiudi anteprima',
    demoPreview: 'Anteprima Demo'
  },
  contact: {
    title: 'Contattami',
    intro: 'Hai un progetto in mente, cerchi un collaboratore tecnico o vuoi semplicemente salutarmi? Contattami sulle mie piattaforme professionali.',
    visit: 'Visita Profilo',
    github: 'Esplora i miei repository di codice, demo e collaborazioni open-source.',
    linkedin: 'Connettiamoci professionalmente, condividi idee o parliamo di opportunità.',
    fiverr: 'Assumimi direttamente e in sicurezza per sviluppo freelance personalizzato.',
    upwork: 'Collaboriamo al tuo prossimo grande MVP o espandiamo il tuo team tecnico a lungo termine.',
    freelancer: 'Trovami anche su Freelancer per progetti di sviluppo web e mobile.'
  },
  footer: {
    rights: 'Tutti i diritti riservati.'
  }
};

const all: Record<Lang, Translations> = { ES, EN, IT };

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly currentLang = signal<Lang>('ES');
  readonly t = computed(() => all[this.currentLang()]);
  readonly languages = signal<{ code: Lang; label: string; flag: string }[]>([
    { code: 'ES', label: 'Español', flag: '🇪🇸' },
    { code: 'EN', label: 'English', flag: '🇺🇸' },
    { code: 'IT', label: 'Italiano', flag: '🇮🇹' }
  ]);

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
  }
}
