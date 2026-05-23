import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { I18nService } from '../services/i18n.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nav links with i18n text', () => {
    const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(4);
    expect(navLinks[0].textContent).toContain(i18n.t().nav.home);
    expect(navLinks[1].textContent).toContain(i18n.t().nav.projects);
    expect(navLinks[2].textContent).toContain(i18n.t().nav.about);
    expect(navLinks[3].textContent).toContain(i18n.t().nav.contact);
  });

  it('should render logo text from i18n', () => {
    const logoText = fixture.nativeElement.querySelector('.logo-text');
    expect(logoText).toBeTruthy();
    expect(logoText.textContent).toContain(i18n.t().nav.portfolio);
  });

  it('should render the language selector button', () => {
    const langBtn = fixture.nativeElement.querySelector('.lang-btn');
    expect(langBtn).toBeTruthy();
    expect(langBtn.textContent).toContain(i18n.currentLang());
  });

  it('should toggle mobile menu on toggleMenu', () => {
    expect(component.isMenuOpen()).toBe(false);
    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(true);
    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should close language dropdown when opening menu', () => {
    component.isLanguageDropdownOpen.set(true);
    component.toggleMenu();
    expect(component.isLanguageDropdownOpen()).toBe(false);
  });

  it('should toggle language dropdown on toggleLanguageDropdown', () => {
    expect(component.isLanguageDropdownOpen()).toBe(false);
    const event = new MouseEvent('click');
    component.toggleLanguageDropdown(event);
    expect(component.isLanguageDropdownOpen()).toBe(true);
  });

  it('should select language and close dropdown', () => {
    component.isLanguageDropdownOpen.set(true);
    component.selectLanguage('EN');
    expect(i18n.currentLang()).toBe('EN');
    expect(component.isLanguageDropdownOpen()).toBe(false);
  });

  it('should update mouse coordinates on mouse move', () => {
    const wrapper = fixture.nativeElement.querySelector('.navbar-wrapper');
    const rect = wrapper.getBoundingClientRect();
    const event = new MouseEvent('mousemove', {
      clientX: rect.left + 100,
      clientY: rect.top + 50,
    });
    Object.defineProperty(event, 'currentTarget', { value: wrapper });
    component.onMouseMove(event);
    expect(component.mouseX()).toBe(100);
    expect(component.mouseY()).toBe(50);
  });

  it('should re-render nav links when language changes', () => {
    i18n.setLang('EN');
    fixture.detectChanges();
    const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(navLinks[1].textContent).toContain('Projects');
  });
});
