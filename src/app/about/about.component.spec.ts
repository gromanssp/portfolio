import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { I18nService } from '../services/i18n.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render about title from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().about.title);
  });

  it('should render experience title from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().about.expTitle);
  });

  it('should render skills title from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().about.skillsTitle);
  });

  it('should render bio text from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().about.bio);
  });

  it('should have 4 experience items', () => {
    expect(component.experience().length).toBe(4);
    const cards = fixture.nativeElement.querySelectorAll('.timeline-card');
    expect(cards.length).toBe(4);
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
    expect(dots.length).toBe(4);
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

  it('should have glass-card class on bio container', () => {
    const bio = fixture.nativeElement.querySelector('.bio-container');
    expect(bio.classList.contains('glass-card')).toBe(true);
  });

  it('should update descriptions when language changes', () => {
    const oldDesc = component.experience()[0].description;
    i18n.setLang('EN');
    fixture.detectChanges();
    const newDesc = component.experience()[0].description;
    expect(newDesc).not.toBe(oldDesc);
    expect(newDesc).toContain('Lead');
  });
});
