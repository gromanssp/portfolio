import { Injectable, signal, computed, inject, PLATFORM_ID, TransferState, makeStateKey, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import type { Locale, Translations } from './translations';
import { EN } from './translations';

const LOCALE_KEY = makeStateKey<Translations>('translations');
const STORAGE_KEY = 'app-locale';

function detectBrowserLocale(): Locale {
  try {
    const navLang = navigator.language.slice(0, 2);
    if (navLang === 'es') return 'es';
    if (navLang === 'it') return 'it';
  } catch {}
  return 'en';
}

function resolve(obj: unknown, path: string): string {
  return path.split('.').reduce<unknown>((o, k) => (o as Record<string, unknown>)?.[k], obj) as string ?? path;
}

function isLocale(raw: string): raw is Locale {
  return raw === 'en' || raw === 'es' || raw === 'it';
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly t = computed(() => this.translations());
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly transferState = inject(TransferState);
  private readonly browser = isPlatformBrowser(this.platformId);

  readonly locale = signal<Locale>(this.loadInitialLocale());
  readonly translations = signal<Translations>(EN);
  readonly languages = signal<{ code: Locale; label: string; flag: string }[]>([
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ]);

  constructor() {
    const stored = this.transferState.get(LOCALE_KEY, null);
    if (stored) {
      this.translations.set(stored);
    }
    const initial = this.locale();
    if (initial !== 'en') {
      this.loadLocale(initial);
    }
    effect(() => {
      const locale = this.locale();
      if (this.browser) {
        try { localStorage.setItem(STORAGE_KEY, locale); } catch {}
      }
    });
  }

  translate(key: string): string {
    return resolve(this.translations(), key);
  }

  setLocale(locale: Locale): void {
    if (locale === this.locale()) return;
    this.locale.set(locale);
    if (locale === 'en') {
      this.translations.set(EN);
    } else {
      this.loadLocale(locale);
    }
  }

  private loadInitialLocale(): Locale {
    if (this.browser) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && isLocale(stored)) return stored;
      } catch {}
      return detectBrowserLocale();
    }
    return 'en';
  }

  private loadLocale(locale: Locale): void {
    this.http.get<Translations>(`/i18n/${locale}.json`).subscribe({
      next: data => {
        this.translations.set(data);
        this.transferState.set(LOCALE_KEY, data);
      },
      error: () => this.translations.set(EN),
    });
  }
}
