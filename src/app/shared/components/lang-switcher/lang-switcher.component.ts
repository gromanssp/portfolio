import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { I18nService } from '@core/i18n';
import { Lang } from '@core/i18n';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative">
      <button (click)="open.update(v => !v)"
              class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10
                     text-white/60 hover:text-white hover:border-accent-500/30 transition text-xs font-mono">
        <span>{{ currentFlag() }}</span>
        <span class="uppercase">{{ i18n.currentLang() }}</span>
        <svg class="w-3 h-3 transition-transform" [class.rotate-180]="open()"
             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      @if (open()) {
        <div class="absolute right-0 top-full mt-2 w-36 rounded-xl bg-surface-800/95 backdrop-blur-xl
                    border border-white/8 shadow-2xl overflow-hidden z-50"
             style="animation: fade-in 0.2s ease forwards">
          @for (lang of i18n.languages; track lang.code) {
            <button (click)="selectLang(lang.code)"
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition"
                    [class]="lang.code === i18n.currentLang()
                      ? 'text-accent-400 bg-accent-500/10'
                      : 'text-white/60 hover:text-white hover:bg-white/3'">
              <span class="text-base">{{ lang.flag }}</span>
              <span class="font-body">{{ lang.label }}</span>
            </button>
          }
        </div>
      }
    </div>
  `,
  host: {
    '(document:click)': 'onDocClick($event)',
  },
})
export class LangSwitcherComponent {
  readonly i18n = inject(I18nService);
  open = signal(false);

  get currentFlag(): () => string {
    return () => this.i18n.languages.find(l => l.code === this.i18n.currentLang())?.flag ?? '🌐';
  }

  selectLang(code: Lang): void {
    this.i18n.setLang(code);
    this.open.set(false);
  }

  onDocClick(event: MouseEvent): void {
    const el = event.target as HTMLElement;
    if (!el.closest('app-lang-switcher')) {
      this.open.set(false);
    }
  }
}
