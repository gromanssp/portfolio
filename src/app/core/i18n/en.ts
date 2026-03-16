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
    viewProjects: 'View Projects',
  },

  personal: {
    role: 'Full Stack Developer',
    bio: 'I help create modern digital products by combining web and mobile development. I build fast, scalable applications with carefully crafted user experiences using modern technologies from the JavaScript ecosystem.',
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
    'mobile-tiktock': 'Mobile application to react to videos in a social media style.',
    'password-generator': 'Platform to generate secure passwords automatically with a single click.',
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
    'Frontend (Angular, Flutter)',
    'Backend (Node.js, NestJS)',
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
