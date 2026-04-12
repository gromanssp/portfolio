export type Lang = 'es' | 'en' | 'it';

export interface LangOption {
  code: Lang;
  label: string;
  flag: string;
}

export interface Translations {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };

  hero: {
    greeting: string;
    publicity: string;
    viewProjects: string;
  };

  personal: {
    role: string;
    bio: string;
    location: string;
  };

  stats: {
    projects: string;
    yearsExp: string;
    technologies: string;
    passion: string;
  };

  home: {
    featuredTitle: string;
    featuredSubtitle: string;
    viewAll: string;
    techTitle: string;
    techSubtitle: string;
  };

  projectsPage: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
  };

  projectDescriptions: Record<string, string>;

  aboutPage: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    expTitle: string;
    expSubtitle: string;
    skillsTitle: string;
    skillsSubtitle: string;
    valuesTitle: string;
    valuesSubtitle: string;
  };

  experience: {
    period: string;
    role: string;
    company: string;
    description: string;
  }[];

  skills: string[];

  values: {
    emoji: string;
    title: string;
    description: string;
  }[];

  contactPage: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    connectWith: string;
  };

  terminal: {
    status: string;
  };

  footer: {
    navigation: string;
    social: string;
    rights: string;
    statusOnline: string;
  };
}
