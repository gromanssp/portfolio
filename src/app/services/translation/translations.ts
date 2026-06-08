export type Locale = 'en' | 'es' | 'it';

export interface Translations {
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

export const EN: Translations = {
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
