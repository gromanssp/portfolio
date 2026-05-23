import { ChangeDetectionStrategy, Component, inject, computed, signal } from '@angular/core';
import { I18nService } from '../services/i18n.service';

interface ExperienceItem {
  company: string;
  role: string;
  tags: string[];
  period: string;
  descriptionKey: 'automa' | 'dclick' | 'emgef' | 'ati';
}

interface SkillBubble {
  name: string;
  icon: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  top: string;
  left: string;
  anim: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly i18n = inject(I18nService);

  readonly experienceBase = signal<ExperienceItem[]>([
    {
      company: 'Automa',
      role: 'Full Stack Developer',
      tags: ['Angular', 'Java', 'Flutter', 'Docker'],
      period: '2022 — 2026',
      descriptionKey: 'automa'
    },
    {
      company: 'DClick Solution',
      role: 'Senior Full Stack Developer',
      tags: ['Angular', 'Java', 'Flutter', 'Docker', 'Nestjs', 'Nodejs'],
      period: '2022 — 2025',
      descriptionKey: 'dclick'
    },
    {
      company: 'EMGEF',
      role: 'Web Developer',
      tags: ['HTML', 'CSS', 'Wordpress', 'VMWare'],
      period: '2021 — 2022',
      descriptionKey: 'emgef'
    },
    {
      company: 'ATI',
      role: 'Administrador de Red',
      tags: ['Proxmox', 'Linux', 'Windows', 'OTRS'],
      period: '2019 — 2020',
      descriptionKey: 'ati'
    }
  ]);

  readonly experience = computed(() =>
    this.experienceBase().map(e => ({
      ...e,
      description: this.i18n.t().experience[e.descriptionKey]
    }))
  );

  readonly skills = signal<SkillBubble[]>([
    { name: 'Flutter', icon: 'fa-brands fa-flutter', color: '#0275D8', size: 'large', top: '10%', left: '10%', anim: 'float-1' },
    { name: 'Angular', icon: 'fa-brands fa-angular', color: '#DD0031', size: 'large', top: '20%', left: '35%', anim: 'float-2' },
    { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178C6', size: 'large', top: '50%', left: '15%', anim: 'float-3' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933', size: 'large', top: '15%', left: '60%', anim: 'float-4' },
    { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ED', size: 'medium', top: '50%', left: '70%', anim: 'float-1' },
    { name: 'PostgreSQL', icon: 'fa-solid fa-database', color: '#4B8BBE', size: 'medium', top: '65%', left: '40%', anim: 'float-2' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#47A248', size: 'medium', top: '10%', left: '80%', anim: 'float-3' },
    { name: 'Tailwind', icon: 'fa-solid fa-wind', color: '#06B6D4', size: 'small', top: '70%', left: '10%', anim: 'float-4' },
    { name: 'Firebase', icon: 'fa-solid fa-fire', color: '#FFCA28', size: 'small', top: '35%', left: '80%', anim: 'float-3' },
    { name: 'n8n', icon: 'fa-solid fa-network-wired', color: '#EA4B71', size: 'small', top: '65%', left: '85%', anim: 'float-1' }
  ]);
}
