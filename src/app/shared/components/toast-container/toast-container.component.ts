import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../../../services/toast/toast.service';

@Component({
  selector: 'app-toast-container',
  imports: [],
  template: `
    <div class="toast-container">
      @for (toast of service.toasts(); track toast.id) {
        <div
          class="toast toast-{{ toast.type }}"
          [class.toast-dismissing]="service.dismissing().has(toast.id)"
          (click)="service.dismiss(toast.id)"
        >
          <div class="toast-icon">
            @switch (toast.type) {
              @case ('success') { <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> }
              @case ('error') { <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> }
              @case ('warning') { <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> }
              @default { <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> }
            }
          </div>
          <span class="toast-message">{{ toast.message }}</span>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      pointer-events: none;
    }
    .toast {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1.25rem;
      border-radius: 12px;
      background: rgba(6, 25, 16, 0.9);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(0, 230, 118, 0.15);
      color: #fff;
      font-size: 0.875rem;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      pointer-events: auto;
      animation: toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      transition: opacity 0.25s, transform 0.25s;
      min-width: 280px;
      max-width: 420px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }
    .toast-dismissing {
      opacity: 0;
      transform: translateX(100%);
    }
    .toast-icon svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
    .toast-success { border-color: rgba(0, 230, 118, 0.4); }
    .toast-success .toast-icon { color: #00e676; }
    .toast-error { border-color: rgba(239, 68, 68, 0.4); }
    .toast-error .toast-icon { color: #ef4444; }
    .toast-warning { border-color: rgba(251, 191, 36, 0.4); }
    .toast-warning .toast-icon { color: #fbbf24; }
    .toast-info { border-color: rgba(59, 130, 246, 0.4); }
    .toast-info .toast-icon { color: #3b82f6; }
    .toast-message {
      flex: 1;
      line-height: 1.4;
    }
    @keyframes toast-in {
      from { opacity: 0; transform: translateX(100%) scale(0.95); }
      to { opacity: 1; transform: translateX(0) scale(1); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastContainerComponent {
  readonly service = inject(ToastService);
}
