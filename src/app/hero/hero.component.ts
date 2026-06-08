import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  readonly i18n = inject(TranslationService);
  readonly heroTags = ['Angular', 'TypeScript', 'Node.js', 'Docker', 'Flutter'];
  readonly alias = 'Jorge González';
}
