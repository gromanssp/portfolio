import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '@core/services/portfolio-data.service';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ProjectCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- ════════ HERO ════════ -->
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 opacity-30">
        <div class="orbit-ring absolute inset-0"></div>
        <div class="orbit-ring absolute inset-15"></div>
        <div class="orbit-ring absolute inset-30"></div>
      </div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] animate-morph"></div>
      <div class="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] animate-morph" style="animation-delay:-4s"></div>

      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div class="slide-up flex items-center gap-3 mb-6">
            <div class="h-px w-12 bg-linear-to-r from-accent-500 to-transparent"></div>
            <span class="font-mono text-xs text-accent-400 tracking-[0.3em] uppercase">{{ data.role }}</span>
          </div>

          <h1 class="slide-up-d1 font-display font-black text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            <span class="text-white">Hola, soy</span><br>
            <span class="bg-linear-to-r from-accent-400 via-cyan-300 to-accent-400 bg-clip-text text-transparent animate-gradient">
              {{ data.name }}
            </span>
          </h1>

          <p class="slide-up-d2 text-lg text-white/50 max-w-lg mb-10 font-light leading-relaxed">{{ data.bio }}</p>

          <div class="slide-up-d3 flex flex-wrap gap-4">
            <a routerLink="/proyectos"
               class="btn-cyber bg-linear-to-r from-accent-500 to-cyan-500 text-surface-950 px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide">
              Ver Proyectos
            </a>
            <a routerLink="/contacto"
               class="btn-cyber border border-white/10 text-white/80 px-8 py-3.5 rounded-xl font-medium text-sm hover:border-accent-500/30 hover:text-accent-400">
              Contactar
            </a>
          </div>

          <div class="slide-up-d4 flex flex-wrap gap-2 mt-10">
            @for (tag of heroTags; track tag) {
              <span class="tech-tag font-mono text-[10px] px-3 py-1.5 rounded-full border border-white/10 text-white/40 cursor-default">
                {{ tag }}
              </span>
            }
          </div>
        </div>

        <!-- Visual -->
        <div class="slide-up-d3 relative hidden lg:block">
          <div class="relative w-full aspect-square max-w-md mx-auto">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-48 h-48 rounded-full bg-linear-to-br from-accent-500/20 to-cyan-500/10 animate-morph flex items-center justify-center">
                <div class="w-32 h-32 rounded-full bg-linear-to-br from-accent-500/30 to-cyan-500/20 flex items-center justify-center animate-pulse-glow">
                  <div class="w-16 h-16 rounded-full bg-accent-500/50 blur-sm"></div>
                </div>
              </div>
            </div>
            <div class="absolute top-8 right-4 bg-surface-800/80 backdrop-blur border border-white/5 rounded-lg p-3 animate-float" style="animation-delay:-2s">
              <code class="font-mono text-[10px] text-accent-400">ng serve --open<br>✓ Compiled successfully</code>
            </div>
            <div class="absolute bottom-16 left-0 bg-surface-800/80 backdrop-blur border border-white/5 rounded-lg p-3 animate-float" style="animation-delay:-5s">
              <code class="font-mono text-[10px] text-cyan-400">git push origin main<br>→ Deploy ✓</code>
            </div>
            <div class="absolute top-1/2 right-0 bg-surface-800/80 backdrop-blur border border-white/5 rounded-lg p-3 animate-float" style="animation-delay:-3s">
              <code class="font-mono text-[10px] text-neon-green">✓ All tests passed</code>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
        <span class="font-mono text-[10px] text-accent-400 tracking-[0.2em]">SCROLL</span>
        <div class="w-px h-8 bg-linear-to-b from-accent-400 to-transparent"></div>
      </div>
    </section>

    <!-- ════════ STATS ════════ -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          @for (stat of data.stats; track stat.label; let i = $index) {
            <div class="text-center p-8 rounded-2xl bg-surface-800/30 border border-white/4 glow-border">
              <div class="font-display font-extrabold text-4xl md:text-5xl text-white mb-2">
                {{ counters()[i] }}{{ stat.suffix ?? '' }}
              </div>
              <div class="font-mono text-[10px] text-accent-400 tracking-[0.2em] uppercase">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ════════ FEATURED PROJECTS ════════ -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <app-section-header title="Proyectos Destacados" subtitle="Mi Trabajo" [divider]="true" />
        <div class="grid md:grid-cols-3 gap-6">
          @for (project of data.featuredProjects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
        <div class="text-center mt-12">
          <a routerLink="/proyectos"
             class="btn-cyber border border-accent-500/30 text-accent-400 px-8 py-3 rounded-xl font-medium text-sm inline-flex items-center gap-2">
            Ver todos los proyectos
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ════════ TECH STACK ════════ -->
    <section class="py-24 hex-pattern">
      <div class="max-w-7xl mx-auto px-6">
        <app-section-header title="Mi Stack Tecnológico" subtitle="Herramientas" />
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
          @for (tech of data.techStack; track tech.name) {
            <div class="group flex flex-col items-center gap-3 p-6 rounded-xl bg-surface-800/20 border border-white/3 transition-all hover:bg-surface-800/40 cursor-default"
                 [class]="tech.hoverBorder">
              <div class="text-2xl group-hover:scale-110 transition-transform">{{ tech.emoji }}</div>
              <span class="font-mono text-[10px] text-white/40 group-hover:text-white/70 transition">{{ tech.name }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ════════ CTA ════════ -->
    <section class="py-32 relative">
      <div class="absolute inset-0 bg-linear-to-b from-transparent via-accent-500/3 to-transparent"></div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 class="font-display font-extrabold text-3xl md:text-5xl text-white mb-6">
          ¿Tienes un proyecto<br>en mente?
        </h2>
        <p class="text-white/40 text-lg mb-10 max-w-xl mx-auto">
          Estoy disponible para freelance, colaboraciones y oportunidades interesantes.
        </p>
        <a routerLink="/contacto"
           class="btn-cyber bg-linear-to-r from-accent-500 to-cyan-500 text-surface-950 px-10 py-4 rounded-xl font-semibold tracking-wide text-sm">
          Hablemos →
        </a>
      </div>
    </section>
  `,
})
export class HomePage implements OnInit {
  readonly data = inject(PortfolioDataService);
  heroTags = ['Angular', 'TypeScript', 'Node.js', 'Docker', 'Flutter'];
  counters = signal<number[]>([0, 0, 0, 0]);

  ngOnInit(): void {
    const targets = this.data.stats.map((s) => s.value);
    const cur = [0, 0, 0, 0];
    const inc = targets.map((t) => t / 50);
    const timer = setInterval(() => {
      let done = true;
      targets.forEach((t, i) => { cur[i] = Math.min(cur[i] + inc[i], t); if (cur[i] < t) done = false; });
      this.counters.set(cur.map(Math.floor));
      if (done) clearInterval(timer);
    }, 30);
  }
}
