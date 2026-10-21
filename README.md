# de-construcción

Portfolio profesional de **María José Riquelme**: producto, gestión de proyectos, análisis funcional y desarrollo web desde Asunción, Paraguay.

> Conecto producto, procesos y tecnología para construir soluciones digitales.

**Sitio:** _agregar aquí la URL de Netlify_ · **LinkedIn:** [maria-jose-riquelme-dev](https://www.linkedin.com/in/maria-jose-riquelme-dev) · **GitHub:** [mariquelme42](https://github.com/mariquelme42)

---

## Contenido del sitio

| Sección | Qué muestra |
|---|---|
| Inicio | Propuesta de valor y las tres áreas de trabajo |
| Proyectos | Casos de estudio (Ruido Visual, producto en banca digital, de-construcción) y sitios en desarrollo (Jasy Kultural, lenguaje-en-proceso) |
| Enfoque | Proceso de trabajo: Comprender → Definir → Priorizar → Construir → Evaluar |
| Sobre mí | Perfil, trayectoria, formación e idiomas |
| Capacidades | Tres bloques de capacidades con sus herramientas |
| Contacto | Correo, LinkedIn y GitHub |

## Tecnologías

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) para desarrollo y build
- [Tailwind CSS v4](https://tailwindcss.com) y CSS propio con tokens de diseño
- Tipografías autoalojadas con [Fontsource](https://fontsource.org): Syne, Manrope y DM Mono
- Despliegue en [Netlify](https://www.netlify.com)

Sin backend, base de datos ni dependencias pesadas: es un sitio estático, rápido y fácil de mantener.

## Estructura

```
├── public/
│   ├── favicon.svg
│   └── images/              # Imágenes optimizadas (WebP)
├── src/
│   ├── components/          # Una sección del sitio por archivo
│   │   ├── Header.tsx
│   │   ├── Hero.tsx         # Portada y manifiesto
│   │   ├── Projects.tsx     # Casos de estudio y sitios en desarrollo
│   │   ├── Approach.tsx
│   │   ├── About.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Contact.tsx      # Contacto y pie de página
│   │   └── ui.tsx           # Piezas reutilizables (Link, Arrow, SectionLabel)
│   ├── data/
│   │   └── content.ts       # TODO el texto, enlaces y proyectos del sitio
│   ├── App.tsx              # Ensambla las secciones
│   ├── index.css            # Estilos globales y tokens de diseño
│   └── main.tsx             # Punto de entrada
├── index.html               # Metadatos SEO y Open Graph
├── netlify.toml             # Configuración de build y cabeceras
└── vite.config.ts
```

## Cómo editar el contenido

Todo el texto vive en **`src/data/content.ts`**. Para actualizar un proyecto, la trayectoria o un enlace, se edita ese archivo y el sitio se actualiza sin tocar los componentes.

- **Nuevo caso de estudio:** agregar un objeto al arreglo `projects`.
- **Nuevo sitio en desarrollo:** agregar un objeto al arreglo `inProgress`.
- **Ocultar un enlace de contacto:** dejarlo vacío (`""`) en `externalLinks`.

## Desarrollo local

Requiere Node.js 20.19 o superior (ver `.nvmrc`).

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:5173
npm run build     # verificar tipos y generar la versión de producción en dist/
npm run preview   # previsualizar la versión de producción
```

## Despliegue

El sitio se publica en Netlify conectado a este repositorio. La configuración está en `netlify.toml`, así que no hace falta cargar nada a mano: cada `git push` a `main` publica una nueva versión.

## Accesibilidad y rendimiento

- HTML semántico, enlace para saltar al contenido y estados de foco visibles
- Navegación por teclado (el menú móvil se cierra con `Esc`)
- Respeta la preferencia de movimiento reducido
- Imágenes en WebP con carga diferida
- Tipografías autoalojadas, sin depender de servicios externos

---

© María José Riquelme. Los textos, imágenes y la identidad de de-construcción no tienen licencia de reutilización. Las imágenes de Ruido Visual pertenecen al Colectivo Asunción Flores.
