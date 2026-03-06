import { Translations } from './i18n.models';

export const en: Translations = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    cta: 'Get in touch →',
  },

  hero: {
    greeting: "Hi, I'm",
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
  },

  personal: {
    role: 'Full Stack Developer',
    bio: 'Full Stack Developer passionate about building high-performance digital experiences with modern architectures, clean code and user-centered design.',
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
    ctaTitle: 'Have a project\nin mind?',
    ctaDescription: "I'm available for freelance, collaborations and exciting opportunities.",
    ctaButton: "Let's talk →",
  },

  projectsPage: {
    subtitle: 'Portfolio',
    title: 'My',
    titleHighlight: 'Projects',
    description: 'A curated selection of personal and professional projects where I applied different technologies and architectures.',
  },

  projectDescriptions: {
    'hospital-app': 'Full-stack application for managing doctors and hospitals, with an administration panel.',
    'katapulk': 'Parcel delivery distributed on the map with route calculation and navigation.',
    'credit-card': 'Website to configure an electronic card with personalized data.',
    'vitrina-store': 'Complete e-commerce platform with an administration panel, integrated payments, and real-time analytics.',
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
    title: 'Shall we work',
    titleHighlight: 'together',
    description: "If you have a project, an idea or just want to connect, drop me a line.",
    formTitle: 'Send me a message',
    labelName: 'Name',
    labelEmail: 'Email',
    labelSubject: 'Subject',
    labelMessage: 'Message',
    placeholderName: 'Your name',
    placeholderEmail: 'you@email.com',
    placeholderMessage: 'Tell me about your project or idea...',
    selectSubject: 'Select a reason',
    subjectOptions: ['Freelance Project', 'Job Opportunity', 'Collaboration', 'Just saying hi 👋'],
    sending: 'Sending...',
    send: 'Send Message →',
    successTitle: 'Message Sent!',
    successDescription: "I'll get back to you within 24 hours. Thanks!",
    infoTitle: 'Information',
    infoEmail: 'Email',
    infoLocation: 'Location',
    availabilityTitle: 'Availability',
    freelance: 'Freelance',
    fulltime: 'Full-time',
    remote: 'Remote',
    available: 'Available',
    openToOffers: 'Open to offers',
    preferred: 'Preferred',
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
