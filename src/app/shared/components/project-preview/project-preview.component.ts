import {
  Component,
  input,
  output,
  signal,
  effect,
  inject,
  ChangeDetectionStrategy,
  HostListener,
  OnDestroy,
  computed,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '@core/models/portfolio.models';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Overlay backdrop -->
    <div
      class="preview-overlay"
      [class.preview-overlay--active]="isVisible()"
      (click)="close()"
    >
      <!-- Browser frame container (stop propagation so clicking inside doesn't close) -->
      <div
        class="preview-browser-frame"
        [class.preview-browser-frame--active]="isVisible()"
        (click)="$event.stopPropagation()"
      >
        <!-- Browser chrome bar -->
        <div class="preview-browser-bar">
          <div class="preview-browser-dots">
            <span class="preview-dot preview-dot--red"></span>
            <span class="preview-dot preview-dot--yellow"></span>
            <span class="preview-dot preview-dot--green"></span>
          </div>
          <div class="preview-browser-url">
            <svg class="preview-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>{{ displayUrl() }}</span>
          </div>
          <button class="preview-close-btn" (click)="close()" aria-label="Close preview">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Content area -->
        <div class="preview-content">
          @if (safeUrl()) {
            <!-- Live iframe -->
            <iframe
              [src]="safeUrl()"
              class="preview-iframe"
              frameborder="0"
              allowfullscreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          } @else if (project().previewImage) {
            <!-- Fallback image -->
            <img
              [src]="project().previewImage"
              [alt]="project().title + ' preview'"
              class="preview-fallback-image"
            />
          }
        </div>
      </div>
    </div>
  `,
})
export class ProjectPreviewComponent implements OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);

  project = input.required<Project>();
  closed = output<void>();

  isVisible = signal(false);

  /** Sanitized URL for the iframe src binding */
  safeUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.project().demoUrl;
    if (!url) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  /** Display-friendly URL for the browser bar */
  displayUrl = computed(() => {
    const url = this.project().demoUrl;
    if (!url) return this.project().title;
    try {
      const parsed = new URL(url);
      return parsed.hostname + parsed.pathname;
    } catch {
      return url;
    }
  });

  constructor() {
    // Trigger opening animation after a tiny delay for CSS transition to work
    effect(() => {
      this.project();
      setTimeout(() => {
        this.isVisible.set(true);
        document.body.style.overflow = 'hidden';
      }, 10);
    });
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }

  close() {
    this.isVisible.set(false);
    document.body.style.overflow = '';
    setTimeout(() => this.closed.emit(), 350);
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }
}
