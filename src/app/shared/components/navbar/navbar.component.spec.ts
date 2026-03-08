import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { I18nService } from '@core/i18n';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 nav links', () => {
    expect(component.navLinks.length).toBe(4);
  });

  it('should start with mobile menu closed', () => {
    expect(component.menuOpen()).toBe(false);
  });

  it('should render the logo text', () => {
    const logo = fixture.nativeElement.textContent;
    expect(logo).toContain('Portfolio');
  });

  it('should update nav labels when language changes', () => {
    i18n.setLang('es');
    fixture.detectChanges();
    const esLabels = component.navLinks.map((l) => l.label);
    expect(esLabels[0]).toBe('Inicio');

    i18n.setLang('en');
    fixture.detectChanges();
    const enLabels = component.navLinks.map((l) => l.label);
    expect(enLabels[0]).toBe('Home');

    i18n.setLang('it');
    fixture.detectChanges();
    const itLabels = component.navLinks.map((l) => l.label);
    expect(itLabels[0]).toBe('Home');
    expect(itLabels[1]).toBe('Progetti');
  });

  it('should render the CTA button with translated text', () => {
    i18n.setLang('es');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Contactar →');

    i18n.setLang('en');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Get in touch →');
  });

  it('should include the lang-switcher component', () => {
    const switcher = fixture.nativeElement.querySelector('app-lang-switcher');
    expect(switcher).toBeTruthy();
  });

  it('should have correct route paths', () => {
    const paths = component.navLinks.map((l) => l.path);
    expect(paths).toEqual(['/', '/proyectos', '/sobre-mi', '/contacto']);
  });
});
