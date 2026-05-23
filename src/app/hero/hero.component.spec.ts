import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { I18nService } from '../services/i18n.service';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render alias', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(component.alias);
  });

  it('should render greeting from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().hero.greeting);
  });

  it('should render role from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().hero.role);
  });

  it('should render publicity text from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().hero.publicity);
  });

  it('should render view projects button', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().hero.viewProjects);
  });

  it('should render connect button', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().hero.connect);
  });

  it('should render all hero tags', () => {
    component.heroTags.forEach(tag => {
      const el = fixture.nativeElement as HTMLElement;
      expect(el.textContent).toContain(tag);
    });
  });

  it('should have exactly 5 hero tags', () => {
    expect(component.heroTags.length).toBe(5);
  });

  it('should update text when language changes', () => {
    i18n.setLang('EN');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Hi');
    expect(el.textContent).toContain('View Projects');
  });

  it('should have a section with id inicio', () => {
    const section = fixture.nativeElement.querySelector('#inicio');
    expect(section).toBeTruthy();
  });
});
