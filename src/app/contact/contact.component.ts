import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation';

interface SocialChannel {
  name: string;
  icon: string;
  svgPath?: string;
  url: string;
  descKey: 'github' | 'linkedin' | 'fiverr' | 'upwork' | 'freelancer';
  color: string;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly i18n = inject(TranslationService);

  readonly channels: SocialChannel[] = [
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      url: 'https://github.com/gromanssp',
      descKey: 'github',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      url: 'https://www.linkedin.com/in/jorge-gonz%C3%A1lez-rom%C3%A1n-650227123',
      descKey: 'linkedin',
      color: '#0077b5'
    },
    {
      name: 'Fiverr',
      icon: '',
      svgPath: 'M15 3h-2a6 6 0 0 0 -6 6h-3v4h3v8h4v-7h4v7h4v-11h-8v-1.033a1.967 1.967 0 0 1 2 -1.967h2v-4',
      url: 'https://pro.fiverr.com/pe/6Yrk11X',
      descKey: 'fiverr',
      color: '#1dbf73'
    },
    {
      name: 'Upwork',
      icon: '',
      svgPath: 'M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z',
      url: 'https://www.upwork.com/freelancers/~012273dc7e61766829',
      descKey: 'upwork',
      color: '#ffffff'
    },
    {
      name: 'Freelancer',
      icon: '',
      svgPath: 'M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z',
      url: 'https://www.freelancer.com/u/jorgeg359?frm=jorgeg359&sb=t',
      descKey: 'freelancer',
      color: '#29e8f0'
    }
  ];
}
