import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { I18nService } from '@core/i18n';
import { PortfolioDataService } from '@core/services/portfolio-data.service';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { SkillBarComponent } from '@shared/components/skill-bar/skill-bar.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SectionHeaderComponent, SkillBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Header -->
    <section class="pt-32 pb-16 relative">
      <div class="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="flex items-center gap-3 mb-6">
          <div class="h-px w-12 bg-linear-to-r from-accent-500 to-transparent"></div>
          <span class="font-mono text-xs text-accent-400 tracking-[0.3em] uppercase">{{this.i18n.t().aboutPage.subtitle}}</span>
        </div>
        <h1 class="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight tracking-tighter">
          {{this.i18n.t().aboutPage.title}} <span class="text-accent-400 glow-text">{{this.i18n.t().aboutPage.titleHighlight}}</span>
        </h1>
        <p class="text-white/40 text-lg max-w-2xl">{{ data.bio() }}</p>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <app-section-header title="{{this.i18n.t().aboutPage.expTitle}}" subtitle="{{this.i18n.t().aboutPage.expSubtitle}}" />
        <div class="space-y-8 relative">
          <div class="absolute left-4.75 top-4 bottom-4 w-px bg-linear-to-b from-accent-500/30 via-accent-500/10 to-transparent hidden md:block"></div>
          @for (exp of data.experience(); track exp.period) {
            <div class="relative md:pl-14">
              <div class="hidden md:block absolute left-3.5 top-2 w-2.75 h-2.75 rounded-full border-2 border-accent-500 bg-surface-950"></div>
              <div class="p-8 rounded-2xl bg-surface-800/40 border border-white/5">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 class="font-display font-bold text-lg text-white">{{ exp.role }}</h3>
                  <span class="font-mono text-[10px] text-accent-400/60 tracking-[0.15em]">{{ exp.period }}</span>
                </div>
                <p class="text-accent-400/80 text-sm font-medium mb-3">{{ exp.company }}</p>
                <p class="text-white/40 text-sm leading-relaxed mb-4">{{ exp.description }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (tag of exp.tags; track tag) {
                    <span class="font-mono text-[9px] px-2.5 py-1 rounded-full bg-accent-500/10 text-accent-400/70 border border-accent-500/10">
                      {{ tag }}
                    </span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <app-section-header title="{{this.i18n.t().aboutPage.skillsTitle}}" subtitle="{{this.i18n.t().aboutPage.skillsSubtitle}}" />
        <div class="space-y-6">
          @for (skill of data.skills(); track skill.label) {
            <app-skill-bar [label]="skill.label" [percentage]="skill.percentage" />
          }
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <app-section-header title="{{this.i18n.t().aboutPage.valuesTitle}}" subtitle="{{this.i18n.t().aboutPage.valuesSubtitle}}" />
        <div class="grid md:grid-cols-3 gap-6">
          @for (val of values; track val.title) {
            <div class="p-8 rounded-2xl bg-surface-800/30 border border-white/4 text-center">
              <div class="text-3xl mb-4">{{ val.emoji }}</div>
              <h4 class="font-display font-bold text-white mb-3">{{ val.title }}</h4>
              <p class="text-white/30 text-sm">{{ val.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutPage {
  readonly i18n = inject(I18nService);
  readonly data = inject(PortfolioDataService);

  values = this.i18n.t().values;
}
