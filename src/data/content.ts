// Contenido centralizado del portfolio de-construcción.
// Todo lo visible en el sitio sale de aquí: editar este archivo para actualizar textos,
// enlaces, proyectos, trayectoria y herramientas sin tocar los componentes.

export const brand = {
  name: "de-construcción",
  person: "María José Riquelme",
  location: "Asunción, Paraguay",
}

// Enlaces reales tomados del CV y de GitHub. Dejar "" para ocultar un enlace.
export const externalLinks = {
  email: "ma.riquelme@hotmail.com",
  linkedin: "https://www.linkedin.com/in/maria-jose-riquelme-dev",
  github: "https://github.com/mariquelme42",
}

export const hero = {
  eyebrow: "María José Riquelme / de-construcción",
  title: "Conecto producto, procesos y tecnología para construir soluciones digitales.",
  intro:
    "Trabajo entre la definición de problemas, la gestión de proyectos y el desarrollo tecnológico. Combino pensamiento analítico, visión de producto y capacidad de ejecución para transformar necesidades en soluciones comprensibles, funcionales y útiles.",
  areas: [
    ["01", "Producto y gestión de proyectos"],
    ["02", "Análisis funcional y procesos"],
    ["03", "Desarrollo tecnológico"],
  ],
}

export type Project = {
  number: string
  kind: string
  title: string
  summary: string
  context: string
  role: string
  mode: string
  contributions: string[]
  tools: string
  result: string
  learning: string
  visual: "ruido" | "system" | "deconstruction"
  links?: { label: string; href: string }[]
  facts?: [string, string][]
  gallery?: { src: string; alt: string; caption: string; wide?: boolean }[]
}

export const projects: Project[] = [
  {
    number: "01",
    kind: "Cultura · Web",
    title: "Ruido Visual",
    summary:
      "Red editorial colectiva, independiente y autogestionada del Colectivo Asunción Flores. Abre caminos para escritoras y escritores contemporáneos de Paraguay que no encuentran espacio en las estructuras editoriales tradicionales.",
    context:
      "Ruido Visual es un archivo de voces y un laboratorio donde convergen experimentación literaria, amistad creativa y compromiso artístico. Necesitaba un espacio digital propio para reunir su biblioteca, su archivo visual y sus convocatorias, sin depender de terceros.",
    role: "Editora y creadora del sitio web: arquitectura, diseño de interfaz, desarrollo y despliegue",
    mode: "Colectivo Asunción Flores · Asunción, PY",
    contributions: [
      "Arquitectura de información: Acerca, Biblioteca, Galería y Convocatorias",
      "Biblioteca digital de 23 publicaciones con fichas y lectura en PDF",
      "Archivo visual de lecturas, proyecciones e intervenciones urbanas",
      "Formularios de postulación con carga de archivos validada",
      "Verificación de edad para contenido sensible",
      "SEO por página y despliegue en Netlify",
    ],
    tools: "React · TypeScript · Vite · Tailwind CSS · Netlify Forms · Figma Make · GitHub",
    result:
      "Sitio publicado desde abril de 2026 y mantenido con 27 versiones. Gestionó en línea dos convocatorias: Residencia Poética Ruidosa 2026 y Talleres Ruidosos Caaguazú.",
    learning:
      "Traducir una identidad colectiva a una estructura digital sin perder su voz, y sostenerla en el tiempo con cambios pequeños y frecuentes.",
    visual: "ruido",
    facts: [
      ["23", "publicaciones en la biblioteca digital"],
      ["2", "convocatorias gestionadas en línea"],
      ["20", "poetas de 7 departamentos en la Residencia Poética Ruidosa 2026"],
      ["27", "versiones del sitio desde abril de 2026"],
    ],
    gallery: [
      { src: "images/ruido-visual/lectura-libro.webp", alt: "Manos sosteniendo una publicación de tapa naranja de Ruido Visual", caption: "Publicaciones impresas", wide: true },
      { src: "images/ruido-visual/tapa-bulbo.webp", alt: "Tapa de «El bulbo raquídeo está indefinido en intelección»", caption: "El bulbo raquídeo…" },
      { src: "images/ruido-visual/tapa-croissant.webp", alt: "Tapa de «Croissant/Teté con Pan» con ilustración de un gato", caption: "Croissant/Teté con Pan" },
      { src: "images/ruido-visual/proyeccion-poemas.webp", alt: "Poema proyectado en una pared durante una lectura, con la sombra de un megáfono", caption: "Lecturas y proyecciones" },
      { src: "images/ruido-visual/afiche-residencia.webp", alt: "Afiche de la convocatoria Residencia Poética Ruidosa 2026", caption: "Residencia Poética Ruidosa 2026" },
      { src: "images/ruido-visual/afiche-talleres.webp", alt: "Afiche de la convocatoria Talleres Ruidosos Caaguazú", caption: "Talleres Ruidosos Caaguazú" },
      { src: "images/ruido-visual/intervencion-urbana.webp", alt: "Intervención urbana con la frase «La hija del asfalto» pintada en una fachada", caption: "Intervenciones urbanas" },
      { src: "images/ruido-visual/tapa-bitacora.webp", alt: "Tapa de «Bitácora Suburbana A5» con ilustración en tinta azul", caption: "Bitácora Suburbana A5" },
      { src: "images/ruido-visual/tapa-atajame.webp", alt: "Tapa roja de «Atajame un ratito esta desaparición»", caption: "Atajame un ratito…" },
    ],
    links: [
      { label: "Ver sitio", href: "https://colectivoasuncionflores.org/ruido-visual" },
      { label: "Código", href: "https://github.com/mariquelme42/ruido-visual-web" },
    ],
  },
  {
    number: "02",
    kind: "Producto · Banca digital",
    title: "Producto y transformación digital",
    summary:
      "Cinco años trabajando en productos financieros digitales, procesos y proyectos en banca paraguaya, entre negocio, tecnología y proveedores externos.",
    context:
      "En banca, los productos digitales conviven con regulación, sistemas heredados y muchas áreas involucradas. Hace falta alguien que traduzca necesidades en requerimientos claros y mantenga el trabajo alineado.",
    role: "Product Owner · Analista Funcional · Gestión de proyectos",
    mode: "Trabajo en equipo · responsabilidades compartidas",
    contributions: [
      "Definición y evolución de productos financieros digitales",
      "Relevamiento de procesos, requerimientos y reglas de negocio",
      "Gestión y priorización del backlog con metodologías ágiles",
      "Coordinación con negocio, tecnología y proveedores",
      "Testing y validación de soluciones",
    ],
    tools: "Jira · Scrum · Kanban · Lean Six Sigma · Bizagi · Visio · Power BI · SQL",
    result:
      "Como Product Owner, definí y prioricé la evolución de productos financieros digitales. En paralelo, como Analista Funcional desde una consultora tecnológica, relevé procesos, requerimientos y reglas de negocio para integraciones bancarias. Antes participé en la implementación de Google Pay y Apple Pay y en el desarrollo de un CRM propio.",
    learning:
      "La claridad compartida es una infraestructura esencial de cualquier producto.",
    visual: "system",
  },
  {
    number: "03",
    kind: "Identidad · Plataforma",
    title: "de-construcción",
    summary:
      "Mi práctica independiente y la plataforma donde exploro cómo se comprenden y construyen sistemas digitales.",
    context:
      "Reunir mi trayectoria entre producto, sistemas y cultura bajo una identidad capaz de crecer con nuevos proyectos.",
    role: "Concepto, dirección, diseño y desarrollo",
    mode: "Proyecto propio · trabajo individual",
    contributions: [
      "Concepto e identidad",
      "Arquitectura narrativa",
      "Sistema visual editorial",
      "Desarrollo responsive y accesible",
    ],
    tools: "Figma Make · React · TypeScript · Vite · Tailwind CSS",
    result:
      "Un sistema editorial modular: cada proyecto nuevo se agrega como un dato, sin rediseñar el sitio.",
    learning:
      "Una identidad profesional puede funcionar como método, no solo como apariencia.",
    visual: "deconstruction",
  },
]

export const process = [
  ["01", "Comprender", "Las necesidades, el contexto y quiénes están involucrados."],
  ["02", "Definir", "El problema, los requisitos y el alcance."],
  ["03", "Priorizar", "Necesidades, dependencias y lo que aporta más valor primero."],
  ["04", "Construir", "Soluciones mediante coordinación e implementación."],
  ["05", "Evaluar", "Resultados, validación de decisiones y aprendizajes."],
]

export const experience = [
  {
    period: "May – Sep 2026",
    org: "Banco Atlas / SODEP",
    focus:
      "Definición y evolución de productos financieros digitales. Relevamiento de procesos y reglas de negocio, gestión del backlog, coordinación con proveedores e integraciones.",
  },
  {
    period: "Oct – Dic 2025",
    org: "Banco Continental",
    focus:
      "Desarrollo de producto y gestión de proyectos. Requerimientos, coordinación técnica y funcional, testing. Proyecto destacado: CRM propio del banco.",
  },
  {
    period: "Jul 2021 – Feb 2025",
    org: "Banco Itaú Paraguay",
    focus:
      "Gestión de proyectos y análisis de procesos. Creación y monitoreo de KPI, capacitación sobre procesos. Proyecto destacado: Google Pay y Apple Pay.",
  },
  {
    period: "2016 – 2021",
    org: "Grupo Acuarela · CGR",
    focus: "Funciones previas en gestión y procesos.",
  },
]

export const culture = [
  {
    period: "2026 – hoy",
    org: "Ruido Visual",
    focus: "Editora y creadora del sitio web de la red editorial.",
  },
  {
    period: "2021 – hoy",
    org: "Jasy Kultural",
    focus: "Gestora cultural y tallerista.",
  },
]

export const education = [
  ["Análisis de Sistemas", "Universidad Autónoma de Asunción · en curso (4.º año)"],
  ["Licenciatura en Letras", "Facultad de Filosofía, UNA · en curso (1.er año)"],
  ["Lean Six Sigma Green Belt", "Banco Itaú Paraguay · 2024"],
  ["Diplomado en Gestión Ágil de Proyectos", "USIL Paraguay · 2023"],
  ["Desarrollo web frontend", "ADA ITW · 2021 – actualidad"],
  ["Economía (1.º a 3.º año)", "Universidad Nacional de Asunción · 2017 – 2020"],
]

export const languages = "Español · Guaraní · Inglés · Portugués"

export const capabilities = [
  {
    id: "A/",
    title: "Producto y proyectos",
    text: "Definición de problemas, requisitos, historias de usuario, priorización del backlog, planificación, coordinación y KPI.",
    tools: ["Scrum", "Kanban", "Lean Six Sigma", "Design Thinking", "Jira", "Planner", "Miro"],
  },
  {
    id: "B/",
    title: "Análisis funcional y sistemas",
    text: "Relevamiento de necesidades, modelado de procesos, reglas de negocio, documentación, integraciones y testing funcional.",
    tools: ["Bizagi", "Visio", "SQL", "Excel", "Power BI", "Power Apps", "Power Automate", "Azure", "Google Analytics"],
  },
  {
    id: "C/",
    title: "Desarrollo y producto digital",
    text: "Arquitectura de información, diseño de interfaces, desarrollo frontend, formularios y despliegue de sitios.",
    tools: ["React", "Angular", "TypeScript", "JavaScript", "CSS3", "Tailwind CSS", "Vite", "Figma", "Git / GitHub", "Netlify", "Python", "C#", "Kotlin"],
  },
]

export type WorkInProgress = {
  title: string
  kind: string
  status: string
  summary: string
  contributions: string[]
  tools: string
  href: string
  hrefLabel: string
  repo?: string
  image?: { src: string; alt: string; width: number; height: number }
  mobileImage?: { src: string; alt: string; width: number; height: number }
  excerpt?: string
}

export const inProgress: WorkInProgress[] = [
  {
    title: "Jasy Kultural",
    kind: "Cultura · Directorio web",
    status: "Prototipo en desarrollo",
    summary:
      "Directorio digital de artistas, agenda cultural y canal de difusión para la escena artística del Paraguay. Esta primera versión es una landing que valida la estructura del catálogo con fichas y eventos de ejemplo.",
    contributions: [
      "Concepto y arquitectura de contenidos",
      "Diseño editorial inspirado en museos contemporáneos",
      "Maquetación responsive mobile first con Grid y Flexbox",
      "Publicación en GitHub Pages",
    ],
    tools: "HTML5 · CSS3 · GitHub Pages",
    href: "https://mariquelme42.github.io/jasy-kultural/",
    hrefLabel: "Ver prototipo",
    repo: "https://github.com/mariquelme42/jasy-kultural",
    image: {
      src: "images/en-desarrollo/jasy-kultural-desktop.webp",
      alt: "Portada del prototipo de Jasy Kultural: «Un mapa vivo para encontrar, compartir y difundir arte»",
      width: 1000,
      height: 625,
    },
    mobileImage: {
      src: "images/en-desarrollo/jasy-kultural-mobile.webp",
      alt: "Vista móvil del prototipo de Jasy Kultural",
      width: 390,
      height: 844,
    },
  },
  {
    title: "lenguaje-en-proceso",
    kind: "Escritura · Sitio personal",
    status: "En desarrollo",
    summary:
      "Espacio personal de escritura que reúne poemas, fragmentos, notas y procesos. Diseñado para una lectura lenta, como resistencia al ritmo acelerado del consumo digital.",
    contributions: [
      "Escritura y curaduría de los textos",
      "Diseño minimalista centrado en la lectura",
      "Secciones de textos y proyectos",
      "Desarrollo y despliegue en Netlify",
    ],
    tools: "React · Netlify",
    href: "https://lenguaje-en-proceso.netlify.app/",
    hrefLabel: "Ver sitio",
    excerpt:
      "Es un trabajo paciente el desenterrar lo que yace bajo la superficie del pensamiento y de la experiencia.",
  },
]

export const about = {
  eyebrow: "Interdisciplinaria por práctica",
  title: "Traduzco complejidad en estructuras",
  titleAccent: "comprensibles y accionables.",
  lead: "Soy María José Riquelme. Trabajo entre producto, gestión de proyectos y desarrollo tecnológico, conectando necesidades de negocio con procesos y soluciones digitales.",
  paragraphs: [
    "Desde 2021 trabajo en banca digital en Paraguay, definiendo productos, relevando procesos, priorizando backlogs y coordinando equipos de negocio, tecnología y proveedores. En paralelo estudio Análisis de Sistemas y Letras.",
    "Mi diferencial está justamente en esa mezcla: la carrera de Letras me enseña a leer entre líneas, entender contextos, encontrar las palabras precisas y ordenar ideas complejas sin perder sus matices. El Análisis de Sistemas me da las herramientas para llevar esas ideas a tierra, entender cómo funcionan las cosas y conversar de igual a igual con quienes las construyen. Y desde la gestión cultural, con Jasy Kultural y Ruido Visual, aprendí que los proyectos no se sostienen solo con buenas ideas: también hacen falta iniciativa, organización, capacidad de adaptación y muchas ganas de hacer que las cosas sucedan, incluso cuando los recursos son pocos y las personas involucradas son muchas.",
  ],
}

export const approach = {
  title: "Un proceso adaptable, no una fórmula cerrada.",
  intro:
    "Mi enfoque conecta pensamiento analítico, gestión y experimentación. Es un marco que ajusto a cada contexto para reducir incertidumbre y mantener el trabajo conectado con su propósito.",
}

export const contact = {
  kicker: "Conversaciones / proyectos / colaboraciones",
  title: "¿Hay algo que necesitemos comprender, transformar o construir?",
  availability:
    "Estoy disponible para oportunidades como Product Owner, Project Manager, Analista Funcional y proyectos de transformación digital o desarrollo web.",
}
