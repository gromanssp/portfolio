import { Injectable, signal, computed } from '@angular/core';
import { Lang, LangOption, Translations } from './i18n.models';
import { es } from './es';
import { en } from './en';
import { it } from './it';

const STORAGE_KEY = 'portfolio-lang';

const translationsMap: Record<Lang, Translations> = { es, en, it };

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly languages: LangOption[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  /** Current language signal */
  readonly currentLang = signal<Lang>(this.detectLang());

  /** Current translations (computed, updates reactively) */
  readonly t = computed<Translations>(() => translationsMap[this.currentLang()]);

  /** Switch language */
  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* SSR safe */ }
    document.documentElement.lang = lang;
  }

  /** Detect initial language: localStorage → browser → fallback */
  private detectLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && this.isValidLang(stored)) return stored;
    } catch { /* SSR safe */ }

    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang && this.isValidLang(browserLang)) return browserLang;

    return 'es';
  }

  private isValidLang(lang: string): lang is Lang {
    return ['es', 'en', 'it'].includes(lang);
  }
}
