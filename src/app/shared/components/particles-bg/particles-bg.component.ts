import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-particles-bg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="fixed inset-0 pointer-events-none z-0" id="particles-host"></div>`,
})
export class ParticlesBgComponent implements OnInit {
  private doc = inject(DOCUMENT);

  ngOnInit(): void {
    const el = this.doc.getElementById('particles-host');
    if (!el) return;
    for (let i = 0; i < 25; i++) {
      const p = this.doc.createElement('div');
      p.className = 'particle';
      const s = 2 + Math.random() * 3;
      Object.assign(p.style, {
        left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
        width: `${s}px`, height: `${s}px`,
        opacity: `${0.1 + Math.random() * 0.25}`,
        animationDelay: `${-Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 6}s`,
      });
      el.appendChild(p);
    }
  }
}
