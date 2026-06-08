import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ContactComponent } from './contact.component';
import { EN } from '../services/translation';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contact title from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.contact.title);
  });

  it('should render contact intro from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.contact.intro);
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
    const t = EN.contact;
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
    links.forEach((link: Element, i: number) => {
      expect((link as HTMLAnchorElement).getAttribute('href')).toBe(component.channels[i].url);
    });
  });

  it('should render visit profile text from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    const links = el.querySelectorAll('a');
    let visitCount = 0;
    links.forEach((link: Element) => {
      if ((link as HTMLAnchorElement).textContent?.includes(EN.contact.visit)) {
        visitCount++;
      }
    });
    expect(visitCount).toBeGreaterThanOrEqual(5);
  });

  it('should render GitHub channel description in English by default', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(EN.contact.github);
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
