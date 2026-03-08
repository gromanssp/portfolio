import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LangSwitcherComponent } from './lang-switcher.component';
import { I18nService } from '@core/i18n';

describe('LangSwitcherComponent', () => {
  let component: LangSwitcherComponent;
  let fixture: ComponentFixture<LangSwitcherComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [LangSwitcherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LangSwitcherComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with dropdown closed', () => {
    expect(component.open()).toBe(false);
  });

  it('should toggle dropdown open/closed', () => {
    component.open.set(true);
    expect(component.open()).toBe(true);

    component.open.set(false);
    expect(component.open()).toBe(false);
  });

  it('should switch language and close dropdown on selectLang', () => {
    component.open.set(true);
    component.selectLang('en');

    expect(i18n.currentLang()).toBe('en');
    expect(component.open()).toBe(false);
  });

  it('should close dropdown on outside click', () => {
    component.open.set(true);

    // Simulate a click outside the component
    const outsideEvent = new MouseEvent('click');
    Object.defineProperty(outsideEvent, 'target', {
      value: document.body,
    });
    component.onDocClick(outsideEvent);

    expect(component.open()).toBe(false);
  });

  it('should return correct flag for current language', () => {
    i18n.setLang('es');
    expect(component.currentFlag()).toBe('🇪🇸');

    i18n.setLang('en');
    expect(component.currentFlag()).toBe('🇬🇧');

    i18n.setLang('it');
    expect(component.currentFlag()).toBe('🇮🇹');
  });

  it('should render the toggle button', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should show 3 language options when open', () => {
    component.open.set(true);
    fixture.detectChanges();

    const options = fixture.nativeElement.querySelectorAll('button');
    // 1 toggle + 3 language buttons = 4
    expect(options.length).toBe(4);
  });

  it('should not show language options when closed', () => {
    component.open.set(false);
    fixture.detectChanges();

    const options = fixture.nativeElement.querySelectorAll('button');
    // Only the toggle button
    expect(options.length).toBe(1);
  });
});
