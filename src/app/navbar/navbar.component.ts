import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { TranslationService, type Locale } from '../services/translation';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  readonly i18n = inject(TranslationService);
  readonly isMenuOpen = signal<boolean>(false);
  readonly isLanguageDropdownOpen = signal<boolean>(false);
  readonly isHovering = signal<boolean>(false);
  readonly mouseX = signal<number>(0);
  readonly mouseY = signal<number>(0);

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
    if (this.isMenuOpen()) {
      this.isLanguageDropdownOpen.set(false);
    }
  }

  toggleLanguageDropdown(event: Event): void {
    event.stopPropagation();
    this.isLanguageDropdownOpen.update(open => !open);
  }

  selectLanguage(locale: Locale): void {
    this.i18n.setLocale(locale);
    this.isLanguageDropdownOpen.set(false);
  }

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.mouseX.set(event.clientX - rect.left);
    this.mouseY.set(event.clientY - rect.top);
  }
}
