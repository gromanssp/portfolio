import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '@core/services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="py-16 border-t border-white/[0.04] relative z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <a routerLink="/" class="flex items-center gap-2 mb-4">
              <div class="w-7 h-7 rounded-md bg-gradient-to-br from-accent-500 to-cyan-500 flex items-center justify-center">
                <span class="font-display font-extrabold text-surface-950 text-[10px]">&lt;/&gt;</span>
              </div>
              <span class="font-display font-bold text-base text-white">Portfolio</span>
            </a>
            <p class="text-white/30 text-xs leading-relaxed max-w-xs">{{ data.bio }}</p>
          </div>
          <div>
            <h5 class="font-display font-semibold text-white text-sm mb-4">Navegación</h5>
            <div class="space-y-2">
              <a routerLink="/" class="block text-white/30 text-xs hover:text-accent-400 transition">Inicio</a>
              <a routerLink="/proyectos" class="block text-white/30 text-xs hover:text-accent-400 transition">Proyectos</a>
              <a routerLink="/sobre-mi" class="block text-white/30 text-xs hover:text-accent-400 transition">Sobre Mí</a>
              <a routerLink="/contacto" class="block text-white/30 text-xs hover:text-accent-400 transition">Contacto</a>
            </div>
          </div>
          <div>
            <h5 class="font-display font-semibold text-white text-sm mb-4">Social</h5>
            <div class="flex gap-3">
              @for (social of data.socials; track social.label) {
                <a [href]="social.url" target="_blank" rel="noopener noreferrer"
                   [attr.aria-label]="social.label"
                   class="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05]
                          flex items-center justify-center hover:border-accent-500/30
                          hover:bg-accent-500/5 transition">
                  <svg class="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor"
                       [innerHTML]="social.svgPath"></svg>
                </a>
              }
            </div>
          </div>
        </div>
        <div class="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-mono text-[10px] text-white/20">© {{ year }} {{ data.name }}. Todos los derechos reservados.</p>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow"></div>
            <span class="font-mono text-[10px] text-white/20">Disponible para proyectos</span>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly data = inject(PortfolioDataService);
  year = new Date().getFullYear();
}
