import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card.component';
import { Project } from '@core/models/portfolio.models';

@Component({
  standalone: true,
  imports: [ProjectCardComponent],
  template: `<app-project-card [project]="project" />`,
})
class TestHostComponent {
  project: Project = {
    id: 'test-project',
    title: 'Test Project',
    description: 'A test project description for unit testing.',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    color: 'teal',
    colorClasses: {
      bg: 'bg-accent-500/10',
      text: 'text-accent-400/70',
      border: 'border-accent-500/10',
    },
    links: [
      { label: 'GitHub', url: 'https://github.com/test' },
      { label: 'Demo', url: 'https://demo.test' },
    ],
    icon: ''
  };
}

describe('ProjectCardComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement.querySelector('app-project-card')).toBeTruthy();
  });

  it('should render the project title', () => {
    const title = fixture.nativeElement.querySelector('h3');
    expect(title.textContent).toContain('Test Project');
  });

  it('should render the project description', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('A test project description');
  });

  it('should render all tags', () => {
    const tags = fixture.nativeElement.querySelectorAll('.rounded-full');
    expect(tags.length).toBe(3);
    const tagTexts = Array.from(tags).map((t: any) => t.textContent.trim());
    expect(tagTexts).toContain('Angular');
    expect(tagTexts).toContain('TypeScript');
    expect(tagTexts).toContain('Tailwind');
  });

  it('should render all project links', () => {
    const links = fixture.nativeElement.querySelectorAll('a[href]');
    expect(links.length).toBe(2);
  });

  it('should have correct href for GitHub link', () => {
    const githubLink = fixture.nativeElement.querySelector('a[href="https://github.com/test"]');
    expect(githubLink).toBeTruthy();
    expect(githubLink.getAttribute('target')).toBe('_blank');
    expect(githubLink.getAttribute('rel')).toContain('noopener');
  });

  it('should apply card-hover class for animation', () => {
    const card = fixture.nativeElement.querySelector('.card-hover');
    expect(card).toBeTruthy();
  });
});
