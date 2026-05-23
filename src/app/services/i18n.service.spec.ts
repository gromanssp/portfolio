import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to ES', () => {
    expect(service.currentLang()).toBe('ES');
  });

  it('should switch language to EN', () => {
    service.setLang('EN');
    expect(service.currentLang()).toBe('EN');
    expect(service.t().nav.home).toBe('Home');
  });

  it('should switch language to IT', () => {
    service.setLang('IT');
    expect(service.currentLang()).toBe('IT');
    expect(service.t().nav.home).toBe('Home');
    expect(service.t().nav.projects).toBe('Progetti');
  });

  it('should switch back to ES', () => {
    service.setLang('EN');
    service.setLang('ES');
    expect(service.currentLang()).toBe('ES');
    expect(service.t().nav.home).toBe('Inicio');
  });

  it('should provide all 3 languages in the dropdown', () => {
    const languages = service.languages();
    expect(languages.length).toBe(3);
    expect(languages.map(l => l.code)).toEqual(['ES', 'EN', 'IT']);
  });

  it('should have ES translations for all sections', () => {
    const t = service.t();
    expect(t.nav.home).toBe('Inicio');
    expect(t.hero.greeting).toBe('Hola, soy');
    expect(t.about.title).toBe('Sobre Mí');
    expect(t.projects.title).toBe('Proyectos');
    expect(t.contact.title).toBe('Conecta Conmigo');
    expect(t.footer.rights).toContain('derechos');
  });

  it('should have EN translations for all sections', () => {
    service.setLang('EN');
    const t = service.t();
    expect(t.nav.about).toBe('About Me');
    expect(t.hero.connect).toBe('Connect With Me');
    expect(t.projects.comingSoon).toBe('Coming Soon');
    expect(t.contact.visit).toBe('Visit Profile');
    expect(t.footer.rights).toContain('rights');
  });

  it('should have IT translations for all sections', () => {
    service.setLang('IT');
    const t = service.t();
    expect(t.nav.about).toBe('Chi Sono');
    expect(t.hero.connect).toBe('Contattami');
    expect(t.projects.preview).toBe('Anteprima');
    expect(t.contact.intro).toContain('progetto');
    expect(t.footer.rights).toContain('diritti');
  });
});
