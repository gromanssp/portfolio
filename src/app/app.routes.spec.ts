import { routes } from './app.routes';

describe('App Routes', () => {

  it('should have 5 routes defined (4 pages + wildcard)', () => {
    expect(routes.length).toBe(5);
  });

  it('should have a home route at ""', () => {
    const home = routes.find((r) => r.path === '');
    expect(home).toBeTruthy();
    expect(home!.loadComponent).toBeDefined();
    expect(home!.title).toContain('Inicio');
  });

  it('should have a projects route at "proyectos"', () => {
    const projects = routes.find((r) => r.path === 'proyectos');
    expect(projects).toBeTruthy();
    expect(projects!.loadComponent).toBeDefined();
    expect(projects!.title).toContain('Proyectos');
  });

  it('should have an about route at "sobre-mi"', () => {
    const about = routes.find((r) => r.path === 'sobre-mi');
    expect(about).toBeTruthy();
    expect(about!.loadComponent).toBeDefined();
    expect(about!.title).toContain('Sobre Mí');
  });

  it('should have a contact route at "contacto"', () => {
    const contact = routes.find((r) => r.path === 'contacto');
    expect(contact).toBeTruthy();
    expect(contact!.loadComponent).toBeDefined();
    expect(contact!.title).toContain('Contacto');
  });

  it('should have a wildcard redirect to home', () => {
    const wildcard = routes.find((r) => r.path === '**');
    expect(wildcard).toBeTruthy();
    expect(wildcard!.redirectTo).toBe('');
    expect(wildcard!.pathMatch).toBe('full');
  });

  it('should lazy-load all page components (not eagerly imported)', () => {
    const pageRoutes = routes.filter((r) => r.loadComponent);
    expect(pageRoutes.length).toBe(4);

    pageRoutes.forEach((route) => {
      expect(typeof route.loadComponent).toBe('function');
    });
  });
});
