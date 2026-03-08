import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from './section-header.component';

// Host component to provide required inputs
@Component({
  standalone: true,
  imports: [SectionHeaderComponent],
  template: `
    <app-section-header
      [title]="title"
      [subtitle]="subtitle"
      [divider]="divider" />
  `,
})
class TestHostComponent {
  title = 'Test Title';
  subtitle = 'Test Subtitle';
  divider = false;
}

describe('SectionHeaderComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement.querySelector('app-section-header')).toBeTruthy();
  });

  it('should render the title', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Test Title');
  });

  it('should render the subtitle', () => {
    const span = fixture.nativeElement.querySelector('span');
    expect(span.textContent).toContain('Test Subtitle');
  });

  it('should NOT render divider by default', () => {
    const divider = fixture.nativeElement.querySelector('.bg-gradient-to-r');
    expect(divider).toBeFalsy();
  });

  it('should render divider when divider=true', () => {
    host.divider = true;
    fixture.detectChanges();

    // The divider is the h-px div with gradient
    const el = fixture.nativeElement.querySelector('.h-px');
    expect(el).toBeTruthy();
  });

  it('should update when inputs change', () => {
    host.title = 'New Title';
    host.subtitle = 'New Subtitle';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('New Title');
    expect(fixture.nativeElement.querySelector('span').textContent).toContain('New Subtitle');
  });
});
