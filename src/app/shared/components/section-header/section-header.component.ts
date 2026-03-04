import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center mb-16">
      <span class="font-mono text-xs text-accent-400 tracking-[0.3em] uppercase">{{ subtitle() }}</span>
      <h2 class="font-display font-extrabold text-3xl md:text-5xl text-white mt-4 mb-4">{{ title() }}</h2>
      @if (divider()) {
        <div class="h-px w-24 bg-linear-to-r from-transparent via-accent-500 to-transparent mx-auto"></div>
      }
    </div>
  `,
})
export class SectionHeaderComponent {
  title = input.required<string>();
  subtitle = input.required<string>();
  divider = input(false);
}
