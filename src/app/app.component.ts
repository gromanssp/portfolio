import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { ParticlesBgComponent } from '@shared/components/particles-bg/particles-bg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ParticlesBgComponent],
  template: `
    <app-particles-bg />
    <div class="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.02]">
      <div class="w-full h-0.5 bg-accent-400" style="animation: scan-line 8s linear infinite"></div>
    </div>
    <app-navbar />
    <main><router-outlet /></main>
    <app-footer />
  `,
})
export class AppComponent {}
