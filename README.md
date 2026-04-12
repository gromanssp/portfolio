# 🚀 Portfolio — Full Stack Developer

<div align="center">
  <img alt="Angular" src="https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

<br/>

Un portfolio personal moderno, rápido y totalmente responsivo construido con **Angular 21**, **Tailwind CSS v4** y preparado para despliegue con **Docker + Nginx** o **GitHub Pages**. Diseñado con soporte de internacionalización (i18n), lazy loading y componentes standalone.

---

## 📖 Tabla de Contenidos

- [✨ Características](#-características)
- [🚀 Quick Start](#-quick-start)
- [🐳 Docker / Contenedores](#-docker--contenedores)
- [✏️ Personalización](#-personalización)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🏗️ Arquitectura](#-arquitectura)
- [🌐 Despliegue](#-despliegue)

---

## ✨ Características

- ⚡ **Framework Moderno**: Angular 21 usando *Standalone Components*, signals y el nuevo _Control Flow_ (`@for`, `@if`).
- 🎨 **Diseño Atractivo**: Tailwind CSS v4 para estilos optimizados, modo oscuro (Glassmorphism) y animaciones fluidas.
- 🌍 **Multilenguaje (i18n)**: Soporte completo para múltiples idiomas (`es`, `en`, `it`).
- 🧩 **Lazy Loading**: Carga perezosa de rutas y componentes para asegurar tiempos de carga súper rápidos.
- 📱 **100% Responsivo**: Interfaz fluida adaptada a dispositivos móviles, tablets y escritorio.

---

## 🚀 Quick Start

### Requisitos Previos
- **Node.js**: `v20+`
- **Angular CLI**: `v21+` (`npm install -g @angular/cli`)

### Instalación y Ejecución Local

1. **Clonar el repositorio y acceder a la carpeta:**
   ```bash
   git clone https://github.com/gromanssp/portfolio.git
   cd portfolio
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   ng serve
   ```
   > 🌐 Tu aplicación estará disponible en: [http://localhost:4200](http://localhost:4200)

---

## 🐳 Docker / Contenedores

Si prefieres usar Docker, el proyecto incluye un flujo multi-stage y perfiles de Docker Compose.

| Entorno | Comando | Descripción |
|---------|---------|-------------|
| **Desarrollo** | `docker compose --profile dev up` | Servidor con recarga en vivo en el puerto `:4200` |
| **Producción** | `docker compose --profile prod up --build` | Build de producción optimizado servido por Nginx en el puerto `:80` |
| **Detener** | `docker compose --profile prod down` | Detiene y elimina los contenedores activos |

> La imagen de producción es extremadamente ligera (**~25MB**), basada en Alpine + Nginx.

---

## ✏️ Personalización

El portfolio fue diseñado para que **sólo debas modificar un archivo** para actualizar la información de todo tu perfil.

Abre el siguiente archivo para personalizar tu información:
```text
src/app/core/services/portfolio-data.service.ts
```

Dentro encontrarás:
- `alias`, `name`, y referencias al sistema de idiomas (`i18n`): Tu información personal básica.
- `stats`: Las estadísticas destacadas en la página inicial.
- `projectsBase`: Array dinámico de proyectos (tags, iconos, repositorios, colores).
- `techStack`: El stack tecnológico con colores de marca configurados.
- `experience`, `skills` y `socials`: Tu historial, habilidades y enlaces.

> **Importante:** Recuerda también editar los textos base en los diccionarios bajo `src/app/core/i18n/` para asegurar que tu historia se cuenta correctamente en cada idioma.

---

## 📁 Estructura del Proyecto

El proyecto sigue una arquitectura limpia orientada a componentes.

```text
portfolio/
├── .docker/                  # Configuración de Nginx para contenedores
├── src/
│   ├── app/
│   │   ├── core/             # Servicios Singleton, modelos, traducciones i18n
│   │   ├── shared/           # Componentes reutilizables UI (Headers, Cards, Navbar)
│   │   ├── features/         # Vistas Lazy-loaded (Home, Projects, About, Contact)
│   │   ├── app.component.ts  # Componente base
│   │   ├── app.config.ts     # Configuración Global (Router, Animations)
│   │   └── app.routes.ts     # Definición de rutas principales
│   │
│   └── styles/
│       └── styles.css        # Configuración global Tailwind @theme
├── Dockerfile                # Multi-stage para desarrollo/producción
├── docker-compose.yml        # Configuración orquestación Docker
└── postcss.config.js         # Configuración del motor CSS (@tailwindcss/postcss)
```

---

## 🏗️ Arquitectura Angular 21

Aprovechando lo último del core de Angular:

- **Standalone Components**: 100% de la arquitectura sin `NgModules`.
- **Rendimiento OnPush**: Mejor optimización por la detección de cambios implementada en todos los componentes.
- **Signals API**: Flujo de información y reactividad moderna empleando `signal()`, `computed()` y `input()`.
- **View Transitions**: API nativa ligada al enrutador de forma moderna para transiciones de vista.
- **Tailwind CSS v4 API**: Usando variables inyectadas (`@theme`) sin archivo `tailwind.config.js` externo.

---

## 🌐 Despliegue en GitHub Pages

Este proyecto soporta alojamiento gratuito automatizado a través de GitHub Pages con Angular CLI.

1. Añade soporte para GitHub Pages a tu proyecto:
   ```bash
   ng add angular-cli-ghpages
   ```

2. Compila el proyecto definiendo la URL base:
   ```bash
   ng build --base-href=/portfolio/
   ```

3. Sube la rama compilada para el despliegue automático:
   ```bash
   npx angular-cli-ghpages --dir=dist/portfolio/browser
   ```

>  💡 **Sugerencia:** Si cambias el nombre de tu repositorio de `portfolio` a otro nombre, asegúrate de actualizar el string `--base-href=/tu-nombre-de-repo/`.

---

<div align="center">
  Hecho con pasión usando Angular y Tailwind CSS ❤️
</div>
