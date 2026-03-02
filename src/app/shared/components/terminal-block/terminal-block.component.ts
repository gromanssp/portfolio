import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { TerminalLine } from '@core/models/portfolio.models';

@Component({
  selector: 'app-terminal-block',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-6 rounded-2xl bg-surface-900/80 border border-white/5">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
        <span class="font-mono text-[10px] text-white/20 ml-2">{{ title() }}</span>
      </div>
      <div class="font-mono text-xs space-y-2">
        @for (line of lines(); track $index) {
          @switch (line.type) {
            @case ('command') { <p class="text-white/30">$ {{ line.text }}</p> }
            @case ('success') { <p class="text-neon-green">✓ {{ line.text }}</p> }
            @case ('info')    { <p class="text-accent-400">{{ line.text }}</p> }
            @case ('cursor')  { <p class="text-white/30">$ _<span class="animate-blink text-accent-400">▋</span></p> }
          }
        }
      </div>
    </div>
  `,
})
export class TerminalBlockComponent {
  title = input('terminal');
  lines = input.required<TerminalLine[]>();
}
