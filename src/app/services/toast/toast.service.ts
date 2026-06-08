import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);
  readonly dismissing = signal<Set<string>>(new Set());

  show(message: string, type: ToastType = 'info', duration = 3000): string {
    const id = crypto.randomUUID();
    const toast: Toast = { id, message, type };
    this.toasts.update(t => [...t, toast]);
    setTimeout(() => this.dismiss(id), duration);
    return id;
  }

  dismiss(id: string): void {
    this.dismissing.update(s => new Set(s).add(id));
    setTimeout(() => {
      this.toasts.update(t => t.filter(toast => toast.id !== id));
      this.dismissing.update(s => {
        const next = new Set(s);
        next.delete(id);
        return next;
      });
    }, 250);
  }

  success(message: string, duration?: number): string {
    return this.show(message, 'success', duration);
  }

  error(message: string, duration?: number): string {
    return this.show(message, 'error', duration);
  }

  info(message: string, duration?: number): string {
    return this.show(message, 'info', duration);
  }

  warning(message: string, duration?: number): string {
    return this.show(message, 'warning', duration);
  }
}
