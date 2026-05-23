import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { I18nService } from '../services/i18n.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rights text from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().footer.rights);
  });

  it('should render the current year', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(String(component.currentYear));
    expect(component.currentYear).toBe(new Date().getFullYear());
  });

  it('should render all nav links from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    const t = i18n.t().nav;
    expect(el.textContent).toContain(t.home);
    expect(el.textContent).toContain(t.projects);
    expect(el.textContent).toContain(t.about);
    expect(el.textContent).toContain(t.contact);
  });

  it('should have anchor links to sections', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    const hrefs = Array.from(links).map((l: HTMLAnchorElement) => l.getAttribute('href'));
    expect(hrefs).toContain('#inicio');
    expect(hrefs).toContain('#proyectos');
    expect(hrefs).toContain('#sobre');
    expect(hrefs).toContain('#contacto');
  });

  it('should render social link icons', () => {
    const socialLinks = fixture.nativeElement.querySelectorAll('.footer-socials a');
    expect(socialLinks.length).toBe(5);
  });

  it('should update text when language changes', () => {
    i18n.setLang('EN');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('All rights reserved');
  });
});
