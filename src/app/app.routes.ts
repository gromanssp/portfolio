import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/home/home.page').then((m) => m.HomePage),
    title: 'Portfolio — Inicio',
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('@features/projects/projects.page').then((m) => m.ProjectsPage),
    title: 'Portfolio — Proyectos',
  },
  {
    path: 'sobre-mi',
    loadComponent: () =>
      import('@features/about/about.page').then((m) => m.AboutPage),
    title: 'Portfolio — Sobre Mí',
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('@features/contact/contact.page').then((m) => m.ContactPage),
    title: 'Portfolio — Contacto',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
