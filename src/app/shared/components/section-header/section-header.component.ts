import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center mb-16">
      <span class="font-mono text-xs text-cool-400 tracking-[0.15em] uppercase">{{ subtitle() }}</span>
      <h2 class="font-display font-bold text-3xl md:text-5xl text-white mt-4 mb-4 leading-tight tracking-tight">{{ title() }}</h2>
      @if (divider()) {
        <div class="h-px w-24 bg-linear-to-r from-transparent via-cool-500 to-transparent mx-auto"></div>
      }
    </div>
  `,
})
export class SectionHeaderComponent {
  title = input.required<string>();
  subtitle = input.required<string>();
  divider = input(false);
}
