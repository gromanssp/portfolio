import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioDataService } from '@core/services/portfolio-data.service';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Header -->
    <section class="pt-32 pb-16 relative">
      <div class="absolute top-20 left-20 w-72 h-72 bg-accent-500/5 rounded-full blur-[100px]"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="flex items-center gap-3 mb-6">
          <div class="h-px w-12 bg-gradient-to-r from-accent-500 to-transparent"></div>
          <span class="font-mono text-xs text-accent-400 tracking-[0.3em] uppercase">Portfolio</span>
        </div>
        <h1 class="font-display font-black text-4xl md:text-6xl text-white mb-6">
          Mis <span class="text-accent-400 glow-text">Proyectos</span>
        </h1>
        <p class="text-white/40 text-lg max-w-2xl">
          Una selección de proyectos personales y profesionales donde he aplicado
          diferentes tecnologías y arquitecturas.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          @for (project of data.projects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsPage {
  readonly data = inject(PortfolioDataService);
}
