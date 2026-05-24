import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'ES' | 'EN' | 'IT';

interface Translations {
  nav: {
    home: string;
    projects: string;
    about: string;
    experience: string;
    skills: string;
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
    techTitle: string;
    bio: string;
  };
  experience: {
    automa: string;
    dclick: string;
    emgef: string;
    ati: string;
    salud: string;
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
    experience: 'Trayectoria',
    skills: 'Habilidades',
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
    techTitle: 'Evolución Tecnológica',
    bio: 'Ingeniero informático con más de 12 años de experiencia en TI, desde administración de sistemas y redes hasta desarrollo full stack. Empecé en soporte técnico y virtualización, evolucioné hacia el desarrollo web con Angular y Flutter, y hoy combino ambas facetas creando aplicaciones modernas, APIs robustas y soluciones con automatización inteligente. Apasionado por la mejora continua y la tecnología bien hecha.'
  },
  experience: {
    automa: 'Desarrollador líder en Flutter y desarrollador full stack en Angular, Java con Spring Boot, entre otras tecnologías.',
    dclick: 'Desarrollador líder en Flutter y full stack en Angular, Nestjs, SQL, entre otras tecnologías.',
    emgef: 'Desarrollo de web empresarial. Administración de sistemas virtualizados, monitoreo y backup.',
    ati: 'Administración de sistemas, implementación de tickets y despliegue de aplicaciones web.',
    salud: 'Supervisión de TI, administración de redes Windows y Linux, virtualización con Proxmox, diseño web con WordPress y soporte técnico integral.'
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
    experience: 'Experience',
    skills: 'Skills',
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
    techTitle: 'Tech Evolution',
    bio: 'Computer engineer with over 12 years of IT experience, from systems administration and networking to full stack development. I started in technical support and virtualization, evolved into web development with Angular and Flutter, and today I combine both sides creating modern applications, robust APIs, and intelligent automation solutions. Passionate about continuous improvement and well-crafted technology.'
  },
  experience: {
    automa: 'Lead Flutter developer and full stack developer in Angular, Java with Spring Boot, among other technologies.',
    dclick: 'Lead Flutter developer and full stack in Angular, Nestjs, SQL, among other technologies.',
    emgef: 'Corporate web development. Virtualized systems administration, monitoring and backup.',
    ati: 'Systems administration, ticket system implementation and web application deployment.',
    salud: 'IT supervision, Windows and Linux network administration, virtualization with Proxmox, web design with WordPress, and comprehensive technical support.'
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
    experience: 'Esperienza',
    skills: 'Competenze',
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
    techTitle: 'Evoluzione Tecnologica',
    bio: 'Ingegnere informatico con oltre 12 anni di esperienza IT, dall\'amministrazione di sistemi e reti allo sviluppo full stack. Ho iniziato nel supporto tecnico e nella virtualizzazione, mi sono evoluto nello sviluppo web con Angular e Flutter, e oggi combino entrambi creando applicazioni moderne, API robuste e soluzioni con automazione intelligente. Appassionato di miglioramento continuo e tecnologia ben fatta.'
  },
  experience: {
    automa: 'Sviluppatore leader Flutter e full stack in Angular, Java con Spring Boot, tra le altre tecnologie.',
    dclick: 'Sviluppatore leader Flutter e full stack in Angular, Nestjs, SQL, tra le altre tecnologie.',
    emgef: 'Sviluppo web aziendale. Amministrazione di sistemi virtualizzati, monitoraggio e backup.',
    ati: 'Amministrazione sistemi, implementazione ticket e distribuzione applicazioni web.',
    salud: 'Supervisione IT, amministrazione reti Windows e Linux, virtualizzazione con Proxmox, web design con WordPress e supporto tecnico completo.'
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
