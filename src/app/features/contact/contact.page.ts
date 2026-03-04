import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '@core/services/portfolio-data.service';
import { TerminalBlockComponent } from '@shared/components/terminal-block/terminal-block.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, TerminalBlockComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Header -->
    <section class="pt-32 pb-16 relative">
      <div class="absolute top-20 left-1/2 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px] -translate-x-1/2"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span class="font-mono text-xs text-accent-400 tracking-[0.3em] uppercase">Contacto</span>
        <h1 class="font-display font-black text-4xl md:text-6xl text-white mt-4 mb-6">
          ¿Trabajamos <span class="text-accent-400 glow-text">juntos</span>?
        </h1>
        <p class="text-white/40 text-lg max-w-xl mx-auto">
          Si tienes un proyecto, una idea o simplemente quieres conectar, escríbeme.
        </p>
      </div>
    </section>

    <!-- Form + Info -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-5 gap-12">

          <!-- Form -->
          <div class="lg:col-span-3">
            <div class="p-10 rounded-3xl bg-surface-800/40 border border-white/5">
              @if (!submitted()) {
                <h3 class="font-display font-bold text-xl text-white mb-8">Envíame un mensaje</h3>
                <div class="space-y-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label class="font-mono text-[10px] text-accent-400/60 tracking-[0.2em] uppercase block mb-2">Nombre</label>
                      <input type="text" placeholder="Tu nombre" class="input-cyber w-full px-4 py-3 rounded-xl text-sm text-white font-body placeholder:text-white/20">
                    </div>
                    <div>
                      <label class="font-mono text-[10px] text-accent-400/60 tracking-[0.2em] uppercase block mb-2">Email</label>
                      <input type="email" placeholder="tu&#64;email.com" class="input-cyber w-full px-4 py-3 rounded-xl text-sm text-white font-body placeholder:text-white/20">
                    </div>
                  </div>
                  <div>
                    <label class="font-mono text-[10px] text-accent-400/60 tracking-[0.2em] uppercase block mb-2">Asunto</label>
                    <select class="input-cyber w-full px-4 py-3 rounded-xl text-sm text-white/50 font-body appearance-none cursor-pointer">
                      <option>Selecciona un motivo</option>
                      <option>Proyecto Freelance</option>
                      <option>Oportunidad Laboral</option>
                      <option>Colaboración</option>
                      <option>Solo quiero saludar 👋</option>
                    </select>
                  </div>
                  <div>
                    <label class="font-mono text-[10px] text-accent-400/60 tracking-[0.2em] uppercase block mb-2">Mensaje</label>
                    <textarea rows="5" placeholder="Cuéntame sobre tu proyecto o idea..."
                              class="input-cyber w-full px-4 py-3 rounded-xl text-sm text-white font-body placeholder:text-white/20 resize-none">
                    </textarea>
                  </div>
                  <!-- <button (click)="send()" [disabled]="sending()" -->
                  <button (click)="send()" [disabled]="true"
                          class="btn-cyber w-full bg-linear-to-r from-accent-500 to-cyan-500 text-surface-950 py-4 rounded-xl font-semibold text-sm tracking-wide disabled:opacity-60">
                    {{ sending() ? 'Enviando...' : 'Enviar Mensaje →' }}
                  </button>
                </div>
              } @else {
                <div class="text-center py-12" style="animation: fade-in 0.5s ease forwards">
                  <div class="w-20 h-20 mx-auto rounded-full bg-accent-500/20 flex items-center justify-center mb-6">
                    <svg class="w-10 h-10 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 class="font-display font-bold text-2xl text-white mb-3">¡Mensaje Enviado!</h3>
                  <p class="text-white/40 text-sm">Te respondo en menos de 24 horas. ¡Gracias!</p>
                </div>
              }
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-2 space-y-6">
            <div class="p-8 rounded-2xl bg-surface-800/40 border border-white/5">
              <h4 class="font-display font-semibold text-white mb-6">Información</h4>
              <div class="space-y-5">
                @for (info of contactInfo; track info.label) {
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path [attr.d]="info.icon"/>
                      </svg>
                    </div>
                    <div>
                      <p class="font-mono text-[10px] text-accent-400/60 tracking-[0.15em] uppercase mb-1">{{ info.label }}</p>
                      <p class="text-white/70 text-sm">{{ info.value }}</p>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div class="p-8 rounded-2xl bg-surface-800/40 border border-white/5">
              <h4 class="font-display font-semibold text-white mb-4">Disponibilidad</h4>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-white/40 text-sm">Freelance</span>
                  <span class="font-mono text-xs text-neon-green">Disponible</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-white/40 text-sm">Full-time</span>
                  <span class="font-mono text-xs text-accent-400">Abierto a ofertas</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-white/40 text-sm">Remoto</span>
                  <span class="font-mono text-xs text-neon-green">Preferido</span>
                </div>
              </div>
            </div>

            <app-terminal-block [lines]="data.terminalLines" />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactPage {
  readonly data = inject(PortfolioDataService);
  submitted = signal(false);
  sending = signal(false);

  contactInfo = [
    { label: 'Email', value: this.data.email, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Ubicación', value: this.data.location, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  send(): void {
    this.sending.set(true);
    setTimeout(() => { this.sending.set(false); this.submitted.set(true); }, 1500);
  }
}
