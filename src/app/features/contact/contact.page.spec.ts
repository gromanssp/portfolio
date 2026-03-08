import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactPage } from './contact.page';
import { I18nService } from '@core/i18n';

describe('ContactPage', () => {
  let component: ContactPage;
  let fixture: ComponentFixture<ContactPage>;
  let i18n: I18nService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [ContactPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    i18n.setLang('es');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ─── INITIAL STATE ──────────────────────────

  it('should start with form visible (not submitted)', () => {
    expect(component.submitted()).toBe(false);
    expect(component.sending()).toBe(false);
  });

  it('should render the form initially', () => {
    const form = fixture.nativeElement.querySelector('input[type="text"]');
    expect(form).toBeTruthy();
  });

  it('should render all form fields', () => {
    const inputs = fixture.nativeElement.querySelectorAll('input');
    const selects = fixture.nativeElement.querySelectorAll('select');
    const textareas = fixture.nativeElement.querySelectorAll('textarea');

    expect(inputs.length).toBe(2); // name + email
    expect(selects.length).toBe(1); // subject
    expect(textareas.length).toBe(1); // message
  });

  it('should render the submit button', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Enviar Mensaje');
  });

  // ─── FORM SUBMISSION ────────────────────────

  it('should set sending=true when send() is called', () => {
    component.send();
    expect(component.sending()).toBe(true);
  });

  it('should show success state after submission', fakeAsync(() => {
    component.send();
    expect(component.sending()).toBe(true);
    expect(component.submitted()).toBe(false);

    tick(1600); // Wait past the 1500ms setTimeout
    fixture.detectChanges();

    expect(component.sending()).toBe(false);
    expect(component.submitted()).toBe(true);
  }));

  it('should hide the form after submission', fakeAsync(() => {
    component.send();
    tick(1600);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input[type="text"]');
    expect(input).toBeFalsy();

    const successTitle = fixture.nativeElement.textContent;
    expect(successTitle).toContain('¡Mensaje Enviado!');
  }));

  // ─── I18N ───────────────────────────────────

  it('should translate page title when language changes', () => {
    expect(fixture.nativeElement.textContent).toContain('¿Trabajamos');

    i18n.setLang('en');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Shall we work');

    i18n.setLang('it');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Lavoriamo');
  });

  it('should translate form labels when language changes', () => {
    i18n.setLang('en');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Name');
    expect(fixture.nativeElement.textContent).toContain('Message');

    i18n.setLang('it');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Nome');
    expect(fixture.nativeElement.textContent).toContain('Messaggio');
  });

  it('should translate submit button', () => {
    i18n.setLang('en');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Send Message');
  });

  it('should translate success message after submission', fakeAsync(() => {
    i18n.setLang('en');
    component.send();
    tick(1600);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Message Sent!');
  }));

  // ─── SIDEBAR CONTENT ────────────────────────

  it('should render contact info (email)', () => {
    expect(fixture.nativeElement.textContent).toContain('hola@tudominio.dev');
  });

  it('should render availability section', () => {
    expect(fixture.nativeElement.textContent).toContain('Freelance');
    expect(fixture.nativeElement.textContent).toContain('Disponible');
  });

  it('should render the terminal block', () => {
    const terminal = fixture.nativeElement.querySelector('app-terminal-block');
    expect(terminal).toBeTruthy();
  });
});
