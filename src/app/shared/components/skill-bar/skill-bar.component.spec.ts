import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SkillBarComponent } from './skill-bar.component';

@Component({
  standalone: true,
  imports: [SkillBarComponent],
  template: `<app-skill-bar [label]="label" [percentage]="percentage" />`,
})
class TestHostComponent {
  label = 'Angular';
  percentage = 85;
}

describe('SkillBarComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-skill-bar')).toBeTruthy();
  });

  it('should render the label', () => {
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Angular');
  });

  it('should render the percentage text', () => {
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('85%');
  });

  it('should start with width 0 (before animation)', () => {
    fixture.detectChanges();
    const fill = fixture.nativeElement.querySelector('.skill-bar-fill');
    expect(fill.style.width).toBe('0%');
  });

  it('should animate to target percentage after delay', fakeAsync(() => {
    fixture.detectChanges();
    tick(400); // Wait past the 300ms setTimeout
    fixture.detectChanges();

    const fill = fixture.nativeElement.querySelector('.skill-bar-fill');
    expect(fill.style.width).toBe('85%');
  }));

  it('should work with different percentage values', fakeAsync(() => {
    host.percentage = 42;
    fixture.detectChanges();
    tick(400);
    fixture.detectChanges();

    const fill = fixture.nativeElement.querySelector('.skill-bar-fill');
    expect(fill.style.width).toBe('42%');
  }));
});
