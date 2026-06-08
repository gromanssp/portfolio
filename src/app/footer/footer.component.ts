import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly i18n = inject(TranslationService);
  readonly currentYear = new Date().getFullYear();
}
