import { SafeHtml } from "@angular/platform-browser";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags: string[];
  color: string;
  colorClasses: TagColors;
  links: { label: string; url: string }[];
  featured?: boolean;
  icon: string;
}

export interface TagColors {
  bg: string;
  text: string;
  border: string;
}

export interface Skill {
  label: string;
  percentage: number;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  svgPath: SafeHtml;
}

export interface TerminalLine {
  text: string;
  type: 'command' | 'success' | 'info' | 'cursor';
}
