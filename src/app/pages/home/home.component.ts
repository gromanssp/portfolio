import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { HeroComponent } from '../../hero/hero.component';
import { AboutComponent } from '../../about/about.component';
import { ProyectComponent } from '../../proyect/proyect.component';
import { ContactComponent } from '../../contact/contact.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, AboutComponent, ProyectComponent, ContactComponent, FooterComponent],
  template: `
    <div class="circuit-backdrop">
      <svg viewBox="0 0 1440 1000" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 200 H 400 L 500 300 V 700 L 600 800 H 1600" stroke="rgba(0, 230, 118, 0.05)" stroke-width="2" fill="none" />
        <path d="M1500 150 H 1000 L 900 250 V 600 L 800 700 H -200" stroke="rgba(0, 230, 118, 0.05)" stroke-width="2" fill="none" />
        <path d="M200 -100 V 300 L 100 400 H -200" stroke="rgba(0, 230, 118, 0.03)" stroke-width="1.5" fill="none" />
        <path d="M1200 1100 V 700 L 1300 600 H 1600" stroke="rgba(0, 230, 118, 0.03)" stroke-width="1.5" fill="none" />
        <circle cx="500" cy="300" r="4" fill="#00e676" opacity="0.5" />
        <circle cx="600" cy="800" r="4" fill="#00e676" opacity="0.5" />
        <circle cx="900" cy="250" r="4" fill="#00e676" opacity="0.5" />
        <circle cx="800" cy="700" r="4" fill="#00e676" opacity="0.5" />
      </svg>
    </div>

    <app-navbar />
    <app-hero />
    <app-about />
    <app-proyect />
    <app-contact />
    <app-footer />
  `,
  styles: [':host { display: contents; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }
