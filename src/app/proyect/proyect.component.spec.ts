import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectComponent } from './proyect.component';
import { I18nService } from '../services/i18n.service';

describe('ProyectComponent', () => {
  let component: ProyectComponent;
  let fixture: ComponentFixture<ProyectComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projects title from i18n', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(i18n.t().projects.title);
  });

  it('should have 8 projects', () => {
    expect(component.projects().length).toBe(8);
  });

  it('should render all project titles', () => {
    const el = fixture.nativeElement as HTMLElement;
    component.projects().forEach(p => {
      expect(el.textContent).toContain(p.title);
    });
  });

  it('should render all project descriptions', () => {
    const el = fixture.nativeElement as HTMLElement;
    component.projects().forEach(p => {
      expect(el.textContent).toContain(p.description);
    });
  });

  it('should render project tags', () => {
    const el = fixture.nativeElement as HTMLElement;
    component.projects().forEach(p => {
      p.tags.forEach(tag => {
        expect(el.textContent).toContain(tag);
      });
    });
  });

  it('should render links for projects that have them', () => {
    const el = fixture.nativeElement as HTMLElement;
    component.projects().forEach(p => {
      p.links.forEach(link => {
        expect(el.textContent).toContain(link.label);
      });
    });
  });

  it('should render a project card for each project', () => {
    const cards = fixture.nativeElement.querySelectorAll('.project-card');
    expect(cards.length).toBe(component.projects().length);
  });

  it('should open preview and lock body scroll', () => {
    const project = component.projects()[0];
    component.openPreview(project);
    expect(component.showPreview()).toBe(project);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should close preview and restore body scroll', () => {
    const project = component.projects()[0];
    component.openPreview(project);
    component.closePreview();
    expect(component.showPreview()).toBeNull();
    expect(document.body.style.overflow).toBe('');
  });

  it('should compute preview URL when project has a Demo link', () => {
    const project = component.projects().find(p =>
      p.links.some(l => l.label === 'Demo')
    );
    expect(project).toBeTruthy();
    if (project) {
      component.openPreview(project);
      const url = component.previewUrl();
      expect(url).toBeTruthy();
      expect(url?.toString()).toContain('groman2.vercel.app');
    }
  });

  it('should return null preview URL when project has no Demo link', () => {
    const project = component.projects().find(p =>
      !p.links.some(l => l.label === 'Demo')
    );
    expect(project).toBeTruthy();
    if (project) {
      component.openPreview(project);
      expect(component.previewUrl()).toBeNull();
    }
  });

  it('should render projects section with id proyectos', () => {
    const section = fixture.nativeElement.querySelector('#proyectos');
    expect(section).toBeTruthy();
  });

  it('should have unique colors per project', () => {
    const colors = component.projects().map(p => p.colorHex);
    const uniqueColors = [...new Set(colors)];
    expect(uniqueColors.length).toBeGreaterThanOrEqual(6);
  });
});
