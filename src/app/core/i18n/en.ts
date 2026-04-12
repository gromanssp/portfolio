import { Translations } from './i18n.models';

export const en: Translations = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },

  hero: {
    greeting: "Hi, I'm",
    publicity: 'Is your website slow, outdated, or not converting as it should? Every second counts: performance, design, and user experience directly impact your results. I help you optimize your site to make it faster, more attractive, and more effective. If your website isn\'t keeping up with your business, let\'s talk.',
    viewProjects: 'View Projects',
  },

  personal: {
    role: 'Full Stack Developer',
    bio: 'Engineer with 8+ years building web and mobile applications. From Angular interfaces to Flutter apps — clean architecture, intuitive UX, and production-ready code.',
    location: 'Spain',
  },

  stats: {
    projects: 'Projects',
    yearsExp: 'Years Exp.',
    technologies: 'Technologies',
    passion: '% Passion',
  },

  home: {
    featuredTitle: 'Featured Projects',
    featuredSubtitle: 'My Work',
    viewAll: 'View all projects',
    techTitle: 'My Tech Stack',
    techSubtitle: 'Tools',
  },

  projectsPage: {
    subtitle: 'Portfolio',
    title: 'My',
    titleHighlight: 'Featured Projects',
    description: 'A curated selection of personal and professional projects where I applied different technologies and architectures.',
  },

  projectDescriptions: {
    'hospital-app': 'Administration system for the management of doctors in hospitals, with user control, search system, authentication and registration, as well as user roles and permissions',
    'katapulk': 'Delivery of packages distributed on the map, being able to review orders, scan, print and calculate the nearest route.',
    'credit-card': 'Website to configure an electronic card with personalized data.',
    'vitrina-store': 'Complete e-commerce platform with administration panel, integrated payments and real-time analytics, article management system for users and clients.',
    'ionic-ui': 'Mobile application to reutilize Ionic components.',
    'password-generator': 'Platform to generate secure passwords automatically with a single click.',
    'groman-2' : 'Modern Angular 21 Dashboard Template A premium dark glassmorphism admin panel with 10+ reusable components, 12 color themes, and a complete component showcase.',
    'agent-ia': 'Interactive natural language chat designed for VPS server management, enabling users to administer, configure, and monitor their environments through intuitive and efficient conversations in Spanish.'
  },

  aboutPage: {
    subtitle: 'About Me',
    title: 'Code with',
    titleHighlight: 'purpose',
    expTitle: 'Experience',
    expSubtitle: 'Career Path',
    skillsTitle: 'Technical Expertise',
    skillsSubtitle: 'Skills',
    valuesTitle: 'How I Work',
    valuesSubtitle: 'Philosophy',
  },

  experience: [
    {
      period: '2022 — 2026',
      role: 'Full Stack Developer',
      company: 'Automa',
      description: 'Lead developer in Flutter and full stack developer using Angular, Java with Spring Boot, among other less frequently used technologies',
    },
    {
      period: '2022 — 2025',
      role: 'Senior Full Stack Developer',
      company: 'DClick Solution',
      description: 'Lead developer in Flutter and full stack using Angular, NestJS, SQL, among other less frequently used technologies',
    },
    {
      period: '2021 — 2022',
      role: 'Web Developer',
      company: 'EMGEF',
      description: 'Enterprise web development. Administration of virtualized systems, monitoring and backup',
    },
    {
      period: '2019 — 2020',
      role: 'Network Administrator',
      company: 'ATI',
      description: 'System administration, implementation of ticketing systems and deployment of web applications',
    },
  ],

  skills: [
    'Frontend (Angular, Flutter, Ionic)',
    'Backend (Node.js, NestJS, N8N)',
    'Database (SQL, NoSQL)',
    'DevOps (Linux, Docker)',
    'UI/UX',
  ],

  values: [
    { emoji: '🧹', title: 'Clean Code', description: 'Readable, maintainable and well-tested code. SOLID, DRY and proven patterns.' },
    { emoji: '🚀', title: 'Performance', description: 'Optimization from the first commit. Lazy loading, caching and Core Web Vitals metrics.' },
    { emoji: '🤝', title: 'Collaboration', description: 'Clear communication, constructive code reviews and documentation that adds real value.' },
  ],

  contactPage: {
    subtitle: 'Contact',
    title: 'Connect',
    titleHighlight: 'with me',
    description: 'You can find me on GitHub and LinkedIn.',
    connectWith: 'My profiles',
  },

  terminal: {
    status: 'Available for projects',
  },

  footer: {
    navigation: 'Navigation',
    social: 'Social',
    rights: 'All rights reserved.',
    statusOnline: 'Available for projects',
  },
};
