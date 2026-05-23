import { ChangeDetectionStrategy, Component, signal, computed, inject, afterNextRender } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { I18nService } from '../services/i18n.service';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  colorHex: string;
  colorRgb: string;
  links: ProjectLink[];
  icon: string;
}

@Component({
  selector: 'app-proyect',
  imports: [],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProyectComponent {
  readonly showPreview = signal<Project | null>(null);
  readonly previewUrl = computed<SafeResourceUrl | null>(() => {
    const project = this.showPreview();
    if (!project) return null;
    const demoLink = project.links.find(l => l.label === 'Demo');
    if (!demoLink) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(demoLink.url);
  });

  readonly i18n = inject(I18nService);
  private readonly screenshotCache = signal<Record<string, string>>({});

  constructor(private sanitizer: DomSanitizer) {
    afterNextRender(() => this.loadScreenshots());
  }

  private async loadScreenshots(): Promise<void> {
    const cache: Record<string, string> = {};
    for (const project of this.projects()) {
      const demoLink = project.links.find(l => l.label === 'Demo');
      if (!demoLink) continue;
      try {
        const resp = await fetch(
          `https://api.microlink.io?url=${encodeURIComponent(demoLink.url)}&screenshot=true&meta=false`
        );
        const data = await resp.json() as { data?: { screenshot?: { url: string } } };
        if (data?.data?.screenshot?.url) {
          cache[project.id] = data.data.screenshot.url;
        }
      } catch {}
    }
    this.screenshotCache.set(cache);
  }

  thumbScreenshot(project: Project): string | null {
    return this.screenshotCache()[project.id] ?? null;
  }

  thumbGradient(project: Project): string {
    return `linear-gradient(135deg, ${project.colorHex}22 0%, rgba(3,25,16,0.8) 100%)`;
  }

  hasDemo(project: Project): boolean {
    return project.links.some(l => l.label === 'Demo');
  }

  techIcon(project: Project): string {
    if (project.icon) return '';
    const tag = project.tags[0]?.toLowerCase() || '';
    return this.techIconMap[tag] || 'fa-solid fa-cube';
  }

  useSvgIcon(project: Project): boolean {
    return !!project.icon;
  }

  private readonly techIconMap: Record<string, string> = {
    angular: 'fa-brands fa-angular',
    ionic: 'fa-brands fa-angular',
    flutter: 'fa-brands fa-flutter',
    nodejs: 'fa-brands fa-node-js',
    nestjs: 'fa-brands fa-nestjs',
    docker: 'fa-brands fa-docker',
    css: 'fa-brands fa-css3-alt',
    tailwind: 'fa-brands fa-tailwind',
    express: 'fa-brands fa-node-js',
    mongo: 'fa-brands fa-envira',
    postgresql: 'fa-solid fa-database',
    stripe: 'fa-brands fa-stripe-s',
    firebase: 'fa-brands fa-google',
    'chart.js': 'fa-solid fa-chart-line',
    'google map': 'fa-solid fa-map',
    sql: 'fa-solid fa-database',
    n8n: 'fa-solid fa-robot',
    wordpress: 'fa-brands fa-wordpress',
    linux: 'fa-brands fa-linux',
    proxmox: 'fa-solid fa-server',
    vmware: 'fa-solid fa-cloud',
    html: 'fa-brands fa-html5',
    typescript: 'fa-solid fa-code',
    react: 'fa-brands fa-react',
    python: 'fa-brands fa-python',
    java: 'fa-brands fa-java',
  };

  readonly projects = signal<Project[]>([
    {
      id: 'groman-2',
      title: 'Groman2',
      description: 'Modern Angular 21 Dashboard Template. Un panel de administración premium de cristal oscuro con más de 10 componentes reutilizables, 12 temas de color y una presentación completa de componentes.',
      tags: ['Angular', 'TypeScript', 'CSS'],
      color: 'red',
      colorHex: '#ef4444',
      colorRgb: '239, 68, 68',
      links: [
        { label: 'GitHub', url: 'https://github.com/gromanssp/Groman2' },
        { label: 'Demo', url: 'https://groman2.vercel.app/' }
      ],
      icon: ''
    },
    {
      id: 'agent-ia',
      title: 'Agent IA DevOps',
      description: 'Chat interactivo en lenguaje natural diseñado para la administración de servidores VPS, permitiendo a los usuarios administrar, configurar y monitorear sus entornos a través de conversaciones intuitivas y eficientes en español.',
      tags: ['Angular', 'N8N', 'Docker', 'Firebase', 'Chart.js'],
      color: 'purple',
      colorHex: '#a855f7',
      colorRgb: '168, 85, 247',
      links: [
        { label: 'GitHub', url: 'https://github.com/gromanssp/Agent-IA-DevOp' },
        { label: 'Demo', url: 'https://angent-ia.duckdns.org/auth/login' }
      ],
      icon: ''
    },
    {
      id: 'medicos-pro',
      title: 'Médicos Pro',
      description: 'Sistema de administración para la gestión en hospitales de médicos, con control de usuarios, sistema de búsqueda, autenticación y registro, así como roles de usuarios y permisos.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      color: 'cyan',
      colorHex: '#06b6d4',
      colorRgb: '6, 182, 212',
      links: [
        { label: 'GitHub', url: 'https://github.com/gromanssp/gromanssp' },
        { label: 'Demo', url: 'https://medicos-pro.groman.workers.dev/' }
      ],
      icon: ''
    },
    {
      id: 'katapulk',
      title: 'Delivery Ktp',
      description: 'Entrega de paquetes distribuidas por el mapa, pudiendo revisar órdenes, escanear, imprimir y calcular la ruta más cercana.',
      tags: ['Flutter', 'Google Map', 'SQL'],
      color: 'orange',
      colorHex: '#f97316',
      colorRgb: '249, 115, 22',
      links: [
        { label: 'PlayStore', url: 'https://play.google.com/store/apps/details?id=com.katapulk.ktp&hl=en&pli=1' }
      ],
      icon: 'M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z'
    },
    {
      id: 'credit-card',
      title: 'Credit Card',
      description: 'Sitio web para configurar una tarjeta electrónica con datos personalizados.',
      tags: ['Angular', 'TypeScript'],
      color: 'purple',
      colorHex: '#a855f7',
      colorRgb: '168, 85, 247',
      links: [
        { label: 'GitHub', url: 'https://github.com/gromanssp/creditCard' },
        { label: 'Demo', url: 'https://credit-card-roan-nine.vercel.app' }
      ],
      icon: ''
    },
    {
      id: 'vitrina-store',
      title: 'La Vitrina',
      description: 'Plataforma de comercio electrónico completa con panel de administración, pagos integrados y analíticas en tiempo real, sistema de gestión de artículos para usuarios y clientes.',
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe', 'Docker'],
      color: 'teal',
      colorHex: '#14b8a6',
      colorRgb: '20, 184, 166',
      links: [],
      icon: ''
    },
    {
      id: 'password-generator',
      title: 'Password Generator',
      description: 'Plataforma para generar passwords seguros automáticos con un solo click.',
      tags: ['Angular'],
      color: 'green',
      colorHex: '#22c55e',
      colorRgb: '34, 197, 94',
      links: [
        { label: 'GitHub', url: 'https://github.com/gromanssp/password-generator' },
        { label: 'Demo', url: 'https://password-generator-mocha-three.vercel.app/' }
      ],
      icon: ''
    },
    {
      id: 'ionic-ui',
      title: 'Ionic UI',
      description: 'Aplicación móvil sencilla para reutilizar componentes de Ionic.',
      tags: ['Ionic', 'Angular', 'TypeScript'],
      color: 'blue',
      colorHex: '#3b82f6',
      colorRgb: '59, 130, 246',
      links: [
        { label: 'Demo', url: 'https://ionic-ui.vercel.app/components' }
      ],
      icon: ''
    }
  ]);

  openPreview(project: Project): void {
    this.showPreview.set(project);
    document.body.style.overflow = 'hidden';
  }

  closePreview(): void {
    this.showPreview.set(null);
    document.body.style.overflow = '';
  }
}
