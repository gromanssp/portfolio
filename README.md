# Jorge González Román — Portfolio

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Portfolio personal de **Jorge González Román**, desarrollador full-stack especializado en Angular, TypeScript y arquitectura frontend moderna.

Construido con **Angular 21 standalone**, diseño **glassmorphism neon-green**, soporte multilingüe (ES/EN/IT), SSR y despliegue automatizado.

---

## Características

- **Diseño glassmorphism** con paleta oscura y acentos neon-green (`#00e676`)
- **Internacionalización** integrada (ES/EN/IT) mediante servicio propio con Signals
- **Timeline interactiva** de experiencia profesional con alternancia left/right y línea central animada
- **Proyectos** con previsualización modal (iframe), thumbnails via Microlink API e iconos de tecnologías
- **Sección de contacto** con iconos SVG oficiales de Fiverr, Upwork y Freelancer
- **Navbar tipo pill** con efecto de vidrio y scroll spy
- **Hero** con animación de partículas, tipografía Outfit y efecto glow
- **SSR** (Server-Side Rendering) con Angular 21 y Express
- **Fully responsive** — adaptado a móvil, tablet y escritorio

---

## Stack Tecnológico

| Tecnología      | Versión |
| --------------- | ------- |
| Angular         | 21      |
| TypeScript      | 5.9     |
| RxJS            | 7.8     |
| Express         | 4.18    |
| Vitest          | 4       |
| jsdom           | 29      |
| Jasmine         | 5.6     |
| Font Awesome    | 7 (Free)|
| Vite            | 6       |

---

## Primeros Pasos

### Prerrequisitos

- Node.js 20+
- npm (pnpm no funciona en macOS por atributos extendidos `com.apple.macl`)

### Instalación

```bash
git clone https://github.com/gromanssp/portfolio.git
cd portfolio
npm install --legacy-peer-deps
```

### Desarrollo

```bash
npm start
# o
ng serve
# Abre http://localhost:4200
```

### Build

```bash
npm run build
# Artefactos en dist/portafolio/
```

### Tests

```bash
npm test        # vitest run — ejecuta una vez
npm run test:watch  # vitest — modo watch
```

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── about/         # Sección "Sobre mí" — timeline + bio
│   ├── contact/       # Formulario y canales de contacto
│   ├── footer/        # Pie de página con redes sociales
│   ├── hero/          # Hero con partículas y presentación
│   ├── navbar/        # Barra de navegación pill
│   ├── proyect/       # Galería de proyectos con modales
│   ├── services/      # Servicio i18n con Signals
│   ├── skills/        # Sección de habilidades técnicas
│   ├── app.component.*
│   └── app.routes.ts
├── assets/            # Recursos estáticos (imágenes)
└── styles.scss        # Variables globales y estilos base
```

---

## Despliegue

El proyecto se despliega en **GitHub Pages** mediante **GitHub Actions**.

### Manual (alternativa)

```bash
npm run build:prod
```

---

## Enlaces

- **Sitio en vivo:** [gromanssp.github.io/portfolio](https://gromanssp.github.io/portfolio)
- **Repositorio:** [github.com/gromanssp/portfolio](https://github.com/gromanssp/portfolio)
- **LinkedIn:** [linkedin.com/in/jorge-gonzález-román](https://www.linkedin.com/in/jorge-gonz%C3%A1lez-rom%C3%A1n-650227123)

---

## Licencia

MIT
