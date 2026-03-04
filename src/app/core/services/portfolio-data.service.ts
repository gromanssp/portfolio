import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  Project,
  Skill,
  ExperienceItem,
  Stat,
  SocialLink,
  TerminalLine,
} from '@core/models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  sanitizer = inject(DomSanitizer);

  // ─── PERSONAL INFO ───────────────────────────
  readonly name = 'Jorge González Román';
  readonly role = 'Full Stack Developer';
  readonly email = 'groman.ssp@gmail.com';
  readonly phone = '+34 600 000 000';
  readonly location = 'España';
  readonly bio = 'Desarrollador Full Stack apasionado por crear experiencias digitales de alto rendimiento con arquitecturas modernas, clean code y diseño centrado en el usuario.';

  // ─── STATS ───────────────────────────────────
  readonly stats: Stat[] = [
    { value: 11, label: 'Proyectos', suffix: '+' },
    { value: 5, label: 'Años Exp.', suffix: '+' },
    { value: 12, label: 'Tecnologías' },
    { value: 100, label: '% Pasión', suffix: '' },
  ];

  // ─── PROJECTS ────────────────────────────────
  readonly projects: Project[] = [
    {
      id: 'hospital-app',
      title: 'Hospital System',
      description: 'Aplicación Full stack para gestión de médicos, hospitales, con panel de administración',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      color: 'cyan',
      colorClasses: { bg: 'bg-cyan-500/10', text: 'text-cyan-400/70', border: 'border-cyan-500/10' },
      links: [{ label: 'GitHub', url: 'https://github.com/gromanssp/gromanssp' }, { label: 'Demo', url: 'https://gromanssp.vercel.app' }],
      featured: true,
      icon: ''
    },
    {
      id: 'katapulk',
      title: 'Delivery Ktp',
      description: 'Entrega de paqueteria distribuidas por el mapa',
      tags: ['Flutter', 'Google Map', 'SQL'],
      color: 'orange',
      colorClasses: { bg: 'bg-orange-500/10', text: 'text-orange-400/70', border: 'border-orange-500/10' },
      links: [{ label: 'PlayStore', url: 'https://play.google.com/store/apps/details?id=com.katapulk.ktp&hl=en&pli=1' }],
      featured: true,
      icon: 'M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z'
    },
    {
      id: 'credit-card',
      title: 'Credit Card',
      description: 'Sitio web para establecer datos a una tarjeta electronica',
      tags: ['Angular', 'TypeScript'],
      color: 'purple',
      colorClasses: { bg: 'bg-purple-500/10', text: 'text-purple-400/70', border: 'border-purple-500/10' },
      links: [{ label: 'GitHub', url: 'https://github.com/gromanssp/creditCard' }, { label: 'Demo', url: 'https://credit-card-roan-nine.vercel.app' }],
      featured: true,
      icon: 'M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z'
    },
    {
      id: 'mobile-tiktock',
      title: 'Tok tik Clone',
      description: 'App móvil para reaccionar a videos en redes',
      tags: ['Flutter'],
      color: 'pink',
      colorClasses: { bg: 'bg-pink-500/10', text: 'text-pink-400/70', border: 'border-pink-500/10' },
      links: [{ label: 'GitHub', url: '#' }],
      icon: ''
    },
    {
      id: 'password-generator',
      title: 'Password Generator',
      description: 'Plataforma para generar passwords seguros automaticos',
      tags: ['Angular'],
      color: 'green',
      colorClasses: { bg: 'bg-green-500/10', text: 'text-green-400/70', border: 'border-green-500/10' },
      links: [{ label: 'Demo', url: 'https://passgenerator-eosin.vercel.app/' }],
      icon: ''
    },
    {
      id: 'vitrina-store',
      title: 'La Vitrina',
      description: 'Plataforma de comercio electrónico completa con panel de administración, pagos integrados y analíticas en tiempo real.',
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe', 'Docker'],
      color: 'teal',
      colorClasses: { bg: 'bg-accent-500/10', text: 'text-accent-400/70', border: 'border-accent-500/10' },
      links: [],
      featured: true,
      icon: ''
    },
  ];

  get featuredProjects(): Project[] {
    return this.projects.filter((p) => p.featured);
  }

  // ─── TECH STACK ──────────────────────────────
  readonly techStack = [
    { emoji: 'F', name: 'Flutter', hoverBorder: 'hover:border-blue-500/30' },
    { emoji: '🅰️', name: 'Angular', hoverBorder: 'hover:border-accent-500/30' },
    { emoji: '🔷', name: 'TypeScript', hoverBorder: 'hover:border-blue-500/30' },
    { emoji: '🟢', name: 'Node.js', hoverBorder: 'hover:border-green-500/30' },
    { emoji: '🐳', name: 'Docker', hoverBorder: 'hover:border-blue-400/30' },
    { emoji: '🗄️', name: 'PostgreSQL', hoverBorder: 'hover:border-sky-500/30' },
    { emoji: 'MongoDB', name: 'MongoDB', hoverBorder: 'hover:border-sky-500/30' },
    { emoji: '🎨', name: 'Tailwind', hoverBorder: 'hover:border-teal-500/30' },
    { emoji: '🔥', name: 'Firebase', hoverBorder: 'hover:border-amber-500/30' },
  ];

  // ─── SKILLS ──────────────────────────────────
  readonly skills: Skill[] = [
    { label: 'Frontend (Angular, Flutter)', percentage: 95 },
    { label: 'Backend (Node.js, NestJS)', percentage: 90 },
    { label: 'Bases de Datos (SQL, NoSQL)', percentage: 88 },
    { label: 'DevOps (Linux, Docker)', percentage: 85 },
    { label: 'UI/UX & Design Systems', percentage: 80 },
  ];

  // ─── EXPERIENCE ──────────────────────────────
  readonly experience: ExperienceItem[] = [
    {
      period: '2022 — 2026',
      role: 'Full Stack Developer',
      company: 'Automa',
      description: 'Desarrollador lider en Flutter y full stack en Angular, Java con Spring Boot, entre otras tecnologias menos usuadas',
      tags: ['Angular', 'Java', 'Flutter', 'Docker'],
    },
    {
      period: '2022 — 2025',
      role: 'Senior Full Stack Developer',
      company: 'DClick Solution',
      description: 'Desarrollador lider en Flutter y full stack en Angular, Nestjs, SQL, entre otras tecnologias menos usuadas',
      tags: ['Angular', 'Java', 'Flutter', 'Docker'],
    },
    {
      period: '2021 — 2022',
      role: 'Web Developer',
      company: 'EMGEF',
      description: 'Desarrollo de web empresarial. Administracion de sistemas Virtualizados, monitoreo y backup',
      tags: ['HTML', 'CSS', 'Wordpress', 'VMWare'],
    },
    {
      period: '2019 — 2020',
      role: 'Administrador de Red',
      company: 'ATI',
      description: 'Administrar sistemas, implementacion de sistemas de tickets y despliegue de aplicaciones web',
      tags: ['Proxmox', 'Linux', 'Windows', 'OTRS'],
    },
  ];

  // ─── SOCIAL ──────────────────────────────────
  readonly socials: SocialLink[] = [
    {
      label: 'GitHub',
      url: 'https://github.com/gromanssp',
      svgPath: this.sanitizer.bypassSecurityTrustHtml('<path d="M9 19c-5 1.5-5-2.5-7-3h0m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" fill="none" stroke-width="1.5"/>'),
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jorge-gonz%C3%A1lez-rom%C3%A1n-650227123',
      svgPath: this.sanitizer.bypassSecurityTrustHtml('<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>'),
    },
  ];

  // ─── TERMINAL ────────────────────────────────
  readonly terminalLines: TerminalLine[] = [
    { text: 'whoami', type: 'command' },
    { text: 'Full Stack Developer', type: 'info' },
    { text: 'cat status.txt', type: 'command' },
    { text: 'Disponible para proyectos', type: 'success' },
    { text: '', type: 'cursor' },
  ];
}
