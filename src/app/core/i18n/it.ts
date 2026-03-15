import { Translations } from './i18n.models';

export const it: Translations = {
  nav: {
    home: 'Home',
    projects: 'Progetti',
    about: 'Chi Sono',
    contact: 'Contatti',
    cta: 'Contattami →',
  },

  hero: {
    greeting: 'Ciao, sono',
    viewProjects: 'Vedi Progetti',
    contactMe: 'Contattami',
  },

  personal: {
    role: 'Full Stack Developer',
    bio: 'Aiuto a creare prodotti digitali moderni combinando sviluppo web e mobile. Realizzo applicazioni veloci, scalabili e con esperienze utente curate utilizzando tecnologie moderne dell’ecosistema JavaScript.',
    location: 'Madrid, Spagna',
  },

  stats: {
    projects: 'Progetti',
    yearsExp: 'Anni Esp.',
    technologies: 'Tecnologie',
    passion: '% Passione',
  },

  home: {
    featuredTitle: 'Progetti in Evidenza',
    featuredSubtitle: 'Il Mio Lavoro',
    viewAll: 'Vedi tutti i progetti',
    techTitle: 'Il Mio Stack Tecnologico',
    techSubtitle: 'Strumenti',
    ctaTitle: 'Hai un progetto\nin mente?',
    ctaDescription: 'Sono disponibile per freelance, collaborazioni e opportunità interessanti.',
    ctaButton: 'Parliamone →',
  },

  projectsPage: {
    subtitle: 'Portfolio',
    title: 'I Miei',
    titleHighlight: 'Progetti',
    description: 'Una selezione di progetti personali e professionali in cui ho applicato diverse tecnologie e architetture.',
  },

  projectDescriptions: {
    'hospital-app': 'Sistema di amministrazione per la gestione degli ospedali medici, con controllo degli utenti, sistema di ricerca, autenticazione e registrazione, così come ruoli degli utenti e premissie',
    'katapulk': 'Consegna di pacchi distribuiti sulla mappa, potendo rivedere gli ordini, scansionare, stampare e calcolare il percorso più vicino.',
    'credit-card': 'Sito web per configurare una carta elettronica con dati personalizzati.',
    'vitrina-store': 'Piattaforma di e-commerce completa con pannello di amministrazione, pagamenti integrati e analisi in tempo reale, sistema di gestione degli articoli per utenti e clienti.',
    'mobile-tiktock': 'Applicazione mobile per reagire ai video in stile social network.',
    'password-generator': 'Piattaforma per generare password sicure automaticamente con un solo clic.',
  },

  aboutPage: {
    subtitle: 'Chi Sono',
    title: 'Codice con',
    titleHighlight: 'scopo',
    expTitle: 'Esperienza',
    expSubtitle: 'Percorso',
    skillsTitle: 'Competenze Tecniche',
    skillsSubtitle: 'Skills',
    valuesTitle: 'Come Lavoro',
    valuesSubtitle: 'Filosofia',
  },

  experience: [
    {
      period: '2022 — 2026',
      role: 'Full Stack Developer',
      company: 'Automa',
      description: 'Sviluppatore leader in Flutter e full stack sviluppatore con Angular, Java con Spring Boot, tra altre tecnologie meno utilizzate',
    },
    {
      period: '2022 — 2025',
      role: 'Senior Full Stack Developer',
      company: 'DClick Solution',
      description: 'Sviluppatore leader in Flutter e full stack con Angular, NestJS, SQL, tra altre tecnologie meno utilizzate',
    },
    {
      period: '2021 — 2022',
      role: 'Web Developer',
      company: 'EMGEF',
      description: 'Sviluppo web aziendale. Amministrazione di sistemi virtualizzati, monitoraggio e backup',
    },
    {
      period: '2019 — 2020',
      role: 'Amministratore di Rete',
      company: 'ATI',
      description: 'Amministrazione dei sistemi, implementazione di sistemi di ticketing e distribuzione di applicazioni web',
    },
  ],

  skills: [
    'Frontend (Angular, Flutter)',
    'Backend (Node.js, NestJS)',
    'Database (SQL, NoSQL)',
    'DevOps (Linux, Docker)',
    'UI/UX',
  ],

  values: [
    { emoji: '🧹', title: 'Clean Code', description: 'Codice leggibile, manutenibile e ben testato. SOLID, DRY e pattern collaudati.' },
    { emoji: '🚀', title: 'Prestazioni', description: 'Ottimizzazione dal primo commit. Lazy loading, caching e metriche Core Web Vitals.' },
    { emoji: '🤝', title: 'Collaborazione', description: 'Comunicazione chiara, code review costruttive e documentazione che aggiunge valore reale.' },
  ],

  contactPage: {
    subtitle: 'Contatti',
    title: 'Lavoriamo',
    titleHighlight: 'insieme',
    description: 'Se hai un progetto, un\'idea o semplicemente vuoi connetterti, scrivimi.',
    formTitle: 'Inviami un messaggio',
    labelName: 'Nome',
    labelEmail: 'Email',
    labelSubject: 'Oggetto',
    labelMessage: 'Messaggio',
    placeholderName: 'Il tuo nome',
    placeholderEmail: 'tu@email.com',
    placeholderMessage: 'Raccontami del tuo progetto o idea...',
    selectSubject: 'Seleziona un motivo',
    subjectOptions: ['Progetto Freelance', 'Opportunità Lavorativa', 'Collaborazione', 'Solo un saluto 👋'],
    sending: 'Invio in corso...',
    send: 'Invia Messaggio →',
    successTitle: 'Messaggio Inviato!',
    successDescription: 'Ti rispondo entro 24 ore. Grazie!',
    infoTitle: 'Informazioni',
    infoEmail: 'Email',
    infoLocation: 'Posizione',
    availabilityTitle: 'Disponibilità',
    freelance: 'Freelance',
    fulltime: 'Full-time',
    remote: 'Remoto',
    available: 'Disponibile',
    openToOffers: 'Aperto a offerte',
    preferred: 'Preferito',
  },

  terminal: {
    status: 'Disponibile per progetti',
  },

  footer: {
    navigation: 'Navigazione',
    social: 'Social',
    rights: 'Tutti i diritti riservati.',
    statusOnline: 'Disponibile per progetti',
  },
};
