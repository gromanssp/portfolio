import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly i18n = inject(I18nService);
  readonly currentYear = new Date().getFullYear();
}
