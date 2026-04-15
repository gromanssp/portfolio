import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '@core/i18n';
import { LangSwitcherComponent } from '../lang-switcher/lang-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LangSwitcherComponent],
  template: `
    <nav class="fixed top-0 w-full z-40 backdrop-blur-xl bg-surface-950/80 border-b border-cool-500/8">
      <div class="max-w-7xl mx-auto p-8 px-6 py-4 flex items-center justify-between">

        <a routerLink="/" class="flex items-center gap-3 group">
          <img class="rounded-lg" width="45" src="./assets/jg.jpg" alt="logo">
          <span class="font-display font-bold text-lg tracking-tight text-white">
            Portfolio
          </span>
        </a>

        <!-- Desktop -->
        <div class="hidden md:flex items-center gap-8">
          @for (link of navLinks; track link.path) {
            <a [routerLink]="link.path"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{ exact: link.exact }"
               class="nav-link font-body text-sm tracking-wide font-medium text-white/50">
              {{ link.label }}
            </a>
          }
          <app-lang-switcher/>
        </div>

        <!-- Mobile toggle -->
        <button class="md:hidden cursor-pointer text-white z-12" (click)="menuOpen.update(v => !v)">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            @if (menuOpen()) {
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            } @else {
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            }
          </svg>
        </button>
      </div>

      @if (menuOpen()) {
        <div class="md:hidden fixed bg-surface-800/98 backdrop-blur-2xl border-b border-cool-500/10 p-8 top-0 right-0 w-52"
             style="animation: fade-in 0.3s ease forwards">
          <div class="flex flex-col gap-6">
            @for (link of navLinks; track link.path) {
              <a [routerLink]="link.path"
                 (click)="menuOpen.set(false)"
                 class="text-lg font-display font-medium text-white/70 hover:text-cool-400 transition">
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      }
    </nav>
  `,
})
export class NavbarComponent {
  menuOpen = signal(false);
  readonly i18n = inject(I18nService);
  navLinks = [
    { path: '/', label: this.i18n.t().nav.home, exact: true },
    { path: '/proyectos', label: this.i18n.t().nav.projects, exact: false },
    { path: '/sobre-mi', label: this.i18n.t().nav.about, exact: false },
    { path: '/contacto', label: this.i18n.t().nav.contact, exact: false },
  ];
}
