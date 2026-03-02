import { Injectable } from '@angular/core';
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
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con panel de administración, pagos integrados y analíticas en tiempo real.',
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe', 'Docker'],
      color: 'teal',
      colorClasses: { bg: 'bg-accent-500/10', text: 'text-accent-400/70', border: 'border-accent-500/10' },
      links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }],
      featured: true,
    },
    {
      id: 'ai-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Dashboard interactivo con visualización de datos en tiempo real, modelos predictivos y reportes automatizados.',
      tags: ['React', 'Python', 'TensorFlow', 'D3.js', 'AWS'],
      color: 'purple',
      colorClasses: { bg: 'bg-purple-500/10', text: 'text-purple-400/70', border: 'border-purple-500/10' },
      links: [{ label: 'GitHub', url: '#' }],
      featured: true,
    },
    {
      id: 'saas-app',
      title: 'SaaS Project Manager',
      description: 'Aplicación SaaS para gestión de proyectos con tableros Kanban, sprints, time tracking y colaboración en equipo.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'],
      color: 'cyan',
      colorClasses: { bg: 'bg-cyan-500/10', text: 'text-cyan-400/70', border: 'border-cyan-500/10' },
      links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }],
      featured: true,
    },
    {
      id: 'mobile-fitness',
      title: 'Fitness Tracker App',
      description: 'App móvil para tracking de ejercicios, rutinas personalizadas, nutrición y métricas de salud con wearables.',
      tags: ['Flutter', 'Firebase', 'GraphQL', 'HealthKit'],
      color: 'pink',
      colorClasses: { bg: 'bg-pink-500/10', text: 'text-pink-400/70', border: 'border-pink-500/10' },
      links: [{ label: 'GitHub', url: '#' }],
    },
    {
      id: 'devops-toolkit',
      title: 'DevOps Automation Toolkit',
      description: 'CLI y dashboard para automatización de infraestructura: deployments, monitoring, alertas y escalado automático.',
      tags: ['Go', 'Kubernetes', 'Terraform', 'Grafana', 'Prometheus'],
      color: 'orange',
      colorClasses: { bg: 'bg-orange-500/10', text: 'text-orange-400/70', border: 'border-orange-500/10' },
      links: [{ label: 'GitHub', url: '#' }],
    },
    {
      id: 'real-time-chat',
      title: 'Real-Time Chat Platform',
      description: 'Plataforma de mensajería en tiempo real con channels, DMs, file sharing, videollamadas y bots integrados.',
      tags: ['Next.js', 'WebRTC', 'Redis', 'PostgreSQL', 'Docker'],
      color: 'green',
      colorClasses: { bg: 'bg-green-500/10', text: 'text-green-400/70', border: 'border-green-500/10' },
      links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }],
    },
  ];

  get featuredProjects(): Project[] {
    return this.projects.filter((p) => p.featured);
  }

  // ─── TECH STACK ──────────────────────────────
  readonly techStack = [
    { emoji: '🅰️', name: 'Angular', hoverBorder: 'hover:border-accent-500/30' },
    { emoji: '⚛️', name: 'React', hoverBorder: 'hover:border-cyan-500/30' },
    { emoji: '🔷', name: 'TypeScript', hoverBorder: 'hover:border-blue-500/30' },
    { emoji: '🟢', name: 'Node.js', hoverBorder: 'hover:border-green-500/30' },
    { emoji: '🐍', name: 'Python', hoverBorder: 'hover:border-yellow-500/30' },
    { emoji: '☁️', name: 'AWS', hoverBorder: 'hover:border-orange-500/30' },
    { emoji: '🐳', name: 'Docker', hoverBorder: 'hover:border-blue-400/30' },
    { emoji: '⚙️', name: 'Kubernetes', hoverBorder: 'hover:border-indigo-500/30' },
    { emoji: '🗄️', name: 'PostgreSQL', hoverBorder: 'hover:border-sky-500/30' },
    { emoji: '🧠', name: 'AI/ML', hoverBorder: 'hover:border-purple-500/30' },
    { emoji: '🎨', name: 'Tailwind', hoverBorder: 'hover:border-teal-500/30' },
    { emoji: '🔥', name: 'Firebase', hoverBorder: 'hover:border-amber-500/30' },
  ];

  // ─── SKILLS ──────────────────────────────────
  readonly skills: Skill[] = [
    { label: 'Frontend (Angular, React, Vue)', percentage: 95 },
    { label: 'Backend (Node.js, NestJS, Python)', percentage: 90 },
    { label: 'Bases de Datos (SQL, NoSQL)', percentage: 88 },
    { label: 'Cloud & DevOps (AWS, Docker, K8s)', percentage: 85 },
    { label: 'UI/UX & Design Systems', percentage: 80 },
  ];

  // ─── EXPERIENCE ──────────────────────────────
  readonly experience: ExperienceItem[] = [
    {
      period: '2022 — Presente',
      role: 'Senior Full Stack Developer',
      company: 'Tu Empresa Actual',
      description: 'Liderazgo técnico en proyectos de transformación digital. Arquitectura de microservicios, CI/CD y mentoring del equipo.',
      tags: ['Angular', 'NestJS', 'AWS', 'Docker'],
    },
    {
      period: '2020 — 2022',
      role: 'Full Stack Developer',
      company: 'Empresa Anterior',
      description: 'Desarrollo de aplicaciones web y APIs REST. Migración de monolitos a microservicios y adopción de cloud.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'GCP'],
    },
    {
      period: '2019 — 2020',
      role: 'Frontend Developer',
      company: 'Startup',
      description: 'Desarrollo de SPAs interactivas con Angular y React. Implementación de design systems y testing automatizado.',
      tags: ['Angular', 'React', 'SCSS', 'Jest'],
    },
  ];

  // ─── SOCIAL ──────────────────────────────────
  readonly socials: SocialLink[] = [
    {
      label: 'GitHub',
      url: 'https://github.com/tu-usuario',
      svgPath: '<path d="M9 19c-5 1.5-5-2.5-7-3h0m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" fill="none" stroke-width="1.5"/>',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/tu-usuario',
      svgPath: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/tu-usuario',
      svgPath: '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>',
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
