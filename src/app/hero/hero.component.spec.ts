import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HeroComponent } from './hero.component';
import { EN } from '../services/translation';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
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
    expect(el.textContent).toContain(EN.hero.greeting);
  });

  it('should render role from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.hero.role);
  });

  it('should render publicity text from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.hero.publicity);
  });

  it('should render view projects button', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.hero.viewProjects);
  });

  it('should render connect button', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.hero.connect);
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

  it('should render English text by default', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Full Stack Developer');
    expect(el.textContent).toContain('View Projects');
  });

  it('should have a section with id inicio', () => {
    const section = fixture.nativeElement.querySelector('#inicio');
    expect(section).toBeTruthy();
  });
});
