import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { I18nService } from '../services/i18n.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contact title from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().contact.title);
  });

  it('should render contact intro from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().contact.intro);
  });

  it('should have 5 social channels', () => {
    expect(component.channels.length).toBe(5);
  });

  it('should render all channel names', () => {
    const el = fixture.nativeElement as HTMLElement;
    component.channels.forEach(ch => {
      expect(el.textContent).toContain(ch.name);
    });
  });

  it('should render all channel descriptions from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    const t = i18n.t().contact;
    const keys = component.channels.map(ch => ch.descKey) as Array<keyof typeof t>;
    keys.forEach(key => {
      const desc = t[key] as string;
      expect(desc).toBeTruthy();
      expect(el.textContent).toContain(desc.slice(0, 20));
    });
  });

  it('should have correct URLs for all channels', () => {
    const links = fixture.nativeElement.querySelectorAll('.contact-card');
    expect(links.length).toBe(5);
    links.forEach((link: HTMLAnchorElement, i: number) => {
      expect(link.getAttribute('href')).toBe(component.channels[i].url);
    });
  });

  it('should render visit profile text from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    const links = el.querySelectorAll('a');
    let visitCount = 0;
    links.forEach((link: HTMLAnchorElement) => {
      if (link.textContent?.includes(i18n.t().contact.visit)) {
        visitCount++;
      }
    });
    expect(visitCount).toBeGreaterThanOrEqual(5);
  });

  it('should update channel descriptions when language changes', () => {
    const oldText = i18n.t().contact.github;
    i18n.setLang('EN');
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().contact.github);
  });

  it('should render section with id contacto', () => {
    const section = fixture.nativeElement.querySelector('#contacto');
    expect(section).toBeTruthy();
  });

  it('should have glass-card class', () => {
    const cards = fixture.nativeElement.querySelectorAll('.glass-card');
    expect(cards.length).toBeGreaterThanOrEqual(1);
  });
});
