import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './navbar.component';
import { TranslationService, EN } from '../services/translation';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nav links with i18n text', () => {
    const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(6);
    expect(navLinks[0].textContent).toContain(EN.nav.home);
    expect(navLinks[1].textContent).toContain(EN.nav.about);
    expect(navLinks[2].textContent).toContain(EN.nav.experience);
    expect(navLinks[3].textContent).toContain(EN.nav.skills);
    expect(navLinks[4].textContent).toContain(EN.nav.projects);
    expect(navLinks[5].textContent).toContain(EN.nav.contact);
  });

  it('should render logo text from i18n', () => {
    const logoText = fixture.nativeElement.querySelector('.logo-text');
    expect(logoText).toBeTruthy();
    expect(logoText.textContent).toContain(EN.nav.portfolio);
  });

  it('should render the language selector button', () => {
    const langBtn = fixture.nativeElement.querySelector('.lang-btn');
    expect(langBtn).toBeTruthy();
    expect(langBtn.textContent).toContain('EN');
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
    component.selectLanguage('en');
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

  it('should render nav links in English by default', () => {
    const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(navLinks[4].textContent).toContain('Projects');
  });
});
