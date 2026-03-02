# Portfolio — Full Stack Developer

Portfolio personal construido con **Angular 21**, **Tailwind CSS v4** y servido con **Docker + Nginx**.

---

## 🚀 Quick Start

### Opción 1: Local (sin Docker)

```bash
npm install
ng serve
# → http://localhost:4200
```

### Opción 2: Docker Development (hot-reload)

```bash
docker compose --profile dev up
# → http://localhost:4200
```

### Opción 3: Docker Production (Nginx optimizado)

```bash
docker compose --profile prod up --build
# → http://localhost
```

---

## 📁 Estructura del Proyecto

```
portfolio/
├── .docker/
│   └── nginx/
│       └── nginx.conf              # Nginx config (SPA fallback, gzip, cache)
├── src/
│   ├── app/
│   │   ├── core/                   # Singleton: services, models
│   │   │   ├── models/
│   │   │   │   └── portfolio.models.ts
│   │   │   └── services/
│   │   │       └── portfolio-data.service.ts  ← EDITA TUS DATOS AQUÍ
│   │   │
│   │   ├── shared/                 # Componentes reutilizables
│   │   │   └── components/
│   │   │       ├── navbar/         # Navegación + menú móvil
│   │   │       ├── footer/         # Footer con social links
│   │   │       ├── particles-bg/   # Partículas flotantes
│   │   │       ├── section-header/ # Título + subtítulo de sección
│   │   │       ├── project-card/   # Tarjeta de proyecto
│   │   │       ├── skill-bar/      # Barra de progreso animada
│   │   │       └── terminal-block/ # Bloque decorativo tipo terminal
│   │   │
│   │   ├── features/              # Páginas (lazy-loaded)
│   │   │   ├── home/             # /
│   │   │   ├── projects/         # /proyectos
│   │   │   ├── about/            # /sobre-mi
│   │   │   └── contact/          # /contacto
│   │   │
│   │   ├── app.component.ts      # Layout root
│   │   ├── app.config.ts         # Providers (router, animations)
│   │   └── app.routes.ts         # Rutas lazy-loaded
│   │
│   ├── styles/
│   │   └── styles.css            # Tailwind v4 @import + @theme + custom CSS
│   ├── environments/
│   ├── index.html
│   └── main.ts
│
├── Dockerfile                    # Multi-stage: Node build → Nginx serve
├── docker-compose.yml            # Dev (hot-reload) + Prod (Nginx)
├── .dockerignore
├── angular.json
├── package.json
├── tsconfig.json                 # Path aliases: @core/*, @shared/*, @features/*
├── tsconfig.app.json
├── postcss.config.js             # @tailwindcss/postcss para v4
└── README.md
```

---

## ✏️ Personalización

Edita **un solo archivo** para cambiar todo el contenido del portfolio:

```
src/app/core/services/portfolio-data.service.ts
```

Ahí encontrarás:
- `name`, `role`, `email`, `bio` — tu info personal
- `projects` — array de proyectos con tags, links y colores
- `experience` — timeline de experiencia laboral
- `skills` — barras de habilidades con porcentajes
- `techStack` — grid de tecnologías
- `socials` — links a GitHub, LinkedIn, Twitter

---

## 🏗️ Arquitectura Angular 21

| Característica | Implementación |
|---|---|
| Standalone Components | Sin NgModules, todo standalone |
| Signals | `signal()`, `input()`, `output()` |
| New Control Flow | `@for`, `@if`, `@switch` |
| Lazy Loading | `loadComponent()` en todas las rutas |
| OnPush | En todos los componentes |
| Path Aliases | `@core/*`, `@shared/*`, `@features/*` |
| View Transitions | API nativa integrada en router |

---

## 🎨 Tailwind CSS v4

El CSS usa la nueva sintaxis de Tailwind v4:

```css
@import "tailwindcss";          /* En lugar de @tailwind base/components/utilities */

@theme {
  --color-accent-500: #14b8a6;  /* Tokens custom via CSS variables */
  --font-display: "Syne";
}
```

Se procesa via `@tailwindcss/postcss` (configurado en `postcss.config.js`).

---

## 🐳 Docker

| Comando | Descripción |
|---|---|
| `docker compose --profile dev up` | Dev server con hot-reload en :4200 |
| `docker compose --profile prod up --build` | Build prod + Nginx en :80 |
| `docker compose --profile prod down` | Detener producción |

La imagen de producción pesa **~25MB** (Alpine + Nginx + Angular build).

---

## 📋 Requisitos

- **Node.js** ≥ 20
- **Angular CLI** ≥ 21 (`npm i -g @angular/cli`)
- **Docker** ≥ 24 (opcional, para contenedores)

---

## Siguientes Pasos

- [ ] Editar `portfolio-data.service.ts` con tus datos reales
- [ ] Añadir imágenes de proyectos en `src/assets/images/`
- [ ] Conectar formulario de contacto a un backend (EmailJS, Formspree, etc.)
- [ ] Configurar dominio y deploy (Vercel, Netlify, o tu propio VPS con Docker)
- [ ] Añadir `@angular/ssr` si necesitas SEO con Server-Side Rendering
