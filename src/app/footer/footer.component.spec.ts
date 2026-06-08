import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { FooterComponent } from './footer.component';
import { EN } from '../services/translation';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rights text from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.footer.rights);
  });

  it('should render the current year', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(String(component.currentYear));
    expect(component.currentYear).toBe(new Date().getFullYear());
  });

  it('should render all nav links from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.nav.home);
    expect(el.textContent).toContain(EN.nav.about);
    expect(el.textContent).toContain(EN.nav.experience);
    expect(el.textContent).toContain(EN.nav.skills);
    expect(el.textContent).toContain(EN.nav.projects);
    expect(el.textContent).toContain(EN.nav.contact);
  });

  it('should have anchor links to sections', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('a'));
    const hrefs = links.map(l => l.getAttribute('href'));
    expect(hrefs).toContain('#inicio');
    expect(hrefs).toContain('#proyectos');
    expect(hrefs).toContain('#sobre');
    expect(hrefs).toContain('#contacto');
  });

  it('should render social link icons', () => {
    const socialLinks = fixture.nativeElement.querySelectorAll('.footer-socials a');
    expect(socialLinks.length).toBe(5);
  });

  it('should render All rights reserved text', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('All rights reserved');
  });
});
