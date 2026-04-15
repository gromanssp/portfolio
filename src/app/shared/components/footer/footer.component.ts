import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '@core/i18n';
import { PortfolioDataService } from '@core/services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="py-16 border-t border-muted-500/10 relative z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <a routerLink="/" class="flex items-center gap-2 mb-4">
              <img class="rounded-lg" width="45" src="./assets/jg.jpg" alt="logo">
              <span class="font-display font-bold text-base text-white/80">Portfolio</span>
            </a>
            <p class="text-muted-500 text-xs leading-relaxed max-w-xs">{{ data.bio() }}</p>
          </div>
          <div>
            <h5 class="font-display font-semibold text-muted-400 text-sm mb-4">{{this.i18n.t().footer.navigation}}</h5>
            <div class="space-y-2">
              <a routerLink="/" class="block text-muted-500 text-xs hover:text-muted-300 transition">{{this.i18n.t().nav.home}}</a>
              <a routerLink="/proyectos" class="block text-muted-500 text-xs hover:text-muted-300 transition">{{this.i18n.t().nav.projects}}</a>
              <a routerLink="/sobre-mi" class="block text-muted-500 text-xs hover:text-muted-300 transition">{{this.i18n.t().nav.about}}</a>
              <a routerLink="/contacto" class="block text-muted-500 text-xs hover:text-muted-300 transition">{{this.i18n.t().nav.contact}}</a>
            </div>
          </div>
          <div>
            <h5 class="font-display font-semibold text-muted-400 text-sm mb-4">{{this.i18n.t().footer.social}}</h5>
            <div class="flex gap-3">
              @for (social of data.socials; track social.label) {
                <a [href]="social.url" target="_blank" rel="noopener noreferrer"
                   [attr.aria-label]="social.label"
                   class="w-9 h-9 rounded-lg bg-white/3 border border-white/5
                          flex items-center justify-center hover:border-muted-400/20
                          hover:bg-white/5 transition">
                  <svg class="w-4 h-4 text-muted-500" viewBox="0 0 24 24" fill="currentColor"
                       [innerHTML]="social.svgPath"></svg>
                </a>
              }
            </div>
          </div>
        </div>
        <div class="pt-8 border-t border-muted-500/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-mono text-[10px] text-muted-500/60">© {{ year }} {{ data.name }}. {{this.i18n.t().footer.rights}}</p>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-accent-400 animate-pulse-glow"></div>
            <span class="font-mono text-[10px] text-muted-500/60">{{this.i18n.t().terminal.status}}</span>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly i18n = inject(I18nService);
  readonly data = inject(PortfolioDataService);
  year = new Date().getFullYear();
}
