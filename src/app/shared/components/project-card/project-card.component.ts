import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '@core/models/portfolio.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card-hover p-8 md:p-10 rounded-3xl bg-surface-800/40 border border-white/5 group">
      <div class="relative z-10">
          @if (project().icon !== '') {
            <div class="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition">
              <svg class="w-7 h-7 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path [attr.d]=project().icon></path>
              </svg>
            </div>
          }
        <h3 class="font-display font-bold text-xl md:text-2xl text-white mb-3">{{ project().title }}</h3>
        <p class="text-white/40 text-sm leading-relaxed mb-6">{{ project().description }}</p>

        <div class="flex flex-wrap gap-2 mb-6">
          @for (tag of project().tags; track tag) {
            <span class="font-mono text-[9px] px-2.5 py-1 rounded-full border"
                  [class]="project().colorClasses.bg + ' ' + project().colorClasses.text + ' ' + project().colorClasses.border">
              {{ tag }}
            </span>
          }
        </div>

        <div class="flex gap-4">
          @for (link of project().links; track link.label) {
            <a [href]="link.url" target="_blank" rel="noopener noreferrer"
               class="font-mono text-xs text-accent-400/70 hover:text-accent-400 transition flex items-center gap-1.5">
              @if (link.label === 'GitHub') {
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3h0m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" fill="none" stroke-width="1.5"/>
                </svg>
              } @else {
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              }
              {{ link.label }}
            </a>
          }
        </div>
      </div>
    </div>
  `,
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
