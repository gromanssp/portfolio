import { Component, input, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div class="flex justify-between mb-2">
        <span class="font-body text-sm text-white/70">{{ label() }}</span>
        <span class="font-mono text-xs text-accent-400">{{ percentage() }}%</span>
      </div>
      <div class="h-2 rounded-full bg-surface-700/50 overflow-hidden">
        <div class="skill-bar-fill" [style.width.%]="width()"></div>
      </div>
    </div>
  `,
})
export class SkillBarComponent implements OnInit {
  label = input.required<string>();
  percentage = input.required<number>();
  width = signal(0);

  ngOnInit(): void {
    setTimeout(() => this.width.set(this.percentage()), 300);
  }
}
