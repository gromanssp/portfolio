import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { I18nService } from '@core/i18n';
import { PortfolioDataService } from '@core/services/portfolio-data.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pt-32 pb-16 relative">
      <div class="absolute top-20 left-1/2 w-96 h-96 bg-cool-500/5 rounded-full blur-[120px] -translate-x-1/2"></div>
      <div class="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <span class="font-mono text-xs text-cool-400 tracking-[0.3em] uppercase">{{ i18n.t().contactPage.subtitle }}</span>
        <h1 class="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6 leading-tight tracking-tighter">
          {{ i18n.t().contactPage.title }} <span class="text-accent-400 glow-text">{{ i18n.t().contactPage.titleHighlight }}</span>
        </h1>
        <p class="text-white/40 text-lg max-w-md mx-auto mb-16">
          {{ i18n.t().contactPage.description }}
        </p>

        <p class="font-mono text-xs text-cool-400/60 tracking-[0.2em] uppercase mb-6">{{ i18n.t().contactPage.connectWith }}</p>
        <div class="flex justify-center gap-4 flex-wrap">
          @for (social of data.socials; track social.label) {
            <a [href]="social.url" target="_blank" rel="noopener noreferrer"
               class="btn-cyber-secondary flex items-center gap-3 border border-white/10 text-white/70 px-8 py-4 rounded-xl font-medium text-sm hover:border-cool-500/30 hover:text-cool-400 transition">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" [innerHTML]="social.svgPath"></svg>
              {{ social.label }}
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactPage {
  readonly i18n = inject(I18nService);
  readonly data = inject(PortfolioDataService);
}
