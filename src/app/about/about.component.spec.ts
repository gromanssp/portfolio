import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { AboutComponent } from './about.component';
import { TranslationService, EN } from '../services/translation';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render experience title from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.about.expTitle);
  });

  it('should render skills title from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.about.skillsTitle);
  });

  it('should render bio text from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.about.bio);
  });

  it('should have 5 experience items', () => {
    expect(component.experience().length).toBe(5);
    const cards = fixture.nativeElement.querySelectorAll('.timeline-card');
    expect(cards.length).toBe(5);
  });

  it('should render company names for all experience items', () => {
    const el = fixture.nativeElement as HTMLElement;
    const companies = component.experienceBase().map(e => e.company);
    companies.forEach(company => {
      expect(el.textContent).toContain(company);
    });
  });

  it('should render i18n descriptions for experience items', () => {
    const descriptions = component.experience().map(e => e.description);
    descriptions.forEach(desc => {
      expect(desc).toBeTruthy();
      expect(typeof desc).toBe('string');
    });
  });

  it('should have alternating card-right and card-left classes', () => {
    const cards = fixture.nativeElement.querySelectorAll('.timeline-card');
    expect(cards[0].classList.contains('card-right')).toBe(true);
    expect(cards[1].classList.contains('card-left')).toBe(true);
    expect(cards[2].classList.contains('card-right')).toBe(true);
    expect(cards[3].classList.contains('card-left')).toBe(true);
  });

  it('should render timeline-dot elements', () => {
    const dots = fixture.nativeElement.querySelectorAll('.timeline-dot');
    expect(dots.length).toBe(5);
  });

  it('should render skill bubbles', () => {
    expect(component.skills().length).toBe(10);
    const bubbles = fixture.nativeElement.querySelectorAll('.skill-bubble');
    expect(bubbles.length).toBe(10);
  });

  it('should render skill names', () => {
    const el = fixture.nativeElement as HTMLElement;
    component.skills().forEach(skill => {
      expect(el.textContent).toContain(skill.name);
    });
  });

  it('should have glass-card class on bubbles container', () => {
    const bio = fixture.nativeElement.querySelector('.bubbles-container');
    expect(bio.classList.contains('glass-card')).toBe(true);
  });

  it('should render descriptions from i18n for each experience item', () => {
    const descriptions = component.experience().map(e => e.description);
    descriptions.forEach(desc => {
      expect(desc).toBeTruthy();
      expect(typeof desc).toBe('string');
    });
  });
});
