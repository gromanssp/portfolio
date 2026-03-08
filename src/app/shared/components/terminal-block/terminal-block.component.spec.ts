import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TerminalBlockComponent } from './terminal-block.component';
import { TerminalLine } from '@core/models/portfolio.models';

@Component({
  standalone: true,
  imports: [TerminalBlockComponent],
  template: `<app-terminal-block [lines]="lines" [title]="title" />`,
})
class TestHostComponent {
  title = 'test-terminal';
  lines: TerminalLine[] = [
    { text: 'whoami', type: 'command' },
    { text: 'developer', type: 'info' },
    { text: 'OK', type: 'success' },
    { text: '', type: 'cursor' },
  ];
}

describe('TerminalBlockComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement.querySelector('app-terminal-block')).toBeTruthy();
  });

  it('should render the terminal title', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('test-terminal');
  });

  it('should render 3 window chrome dots', () => {
    const dots = fixture.nativeElement.querySelectorAll('.rounded-full');
    // 3 dots (red, yellow, green)
    expect(dots.length).toBeGreaterThanOrEqual(3);
  });

  it('should render command lines with $ prefix', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('$ whoami');
  });

  it('should render success lines with ✓ prefix', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('✓ OK');
  });

  it('should render info lines', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('developer');
  });

  it('should render cursor line with blinking cursor', () => {
    const blink = fixture.nativeElement.querySelector('.animate-blink');
    expect(blink).toBeTruthy();
    expect(blink.textContent).toContain('▋');
  });
});
