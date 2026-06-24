export const siteConfig = {
  brand: {
    name: 'AM DEV',
    logoText: './aems268',
  },
  seo: {
    title: 'Arturo Molleda | Técnico en Sistemas y Desarrollo',
    description:
      'Portafolio profesional de Arturo Molleda. Desarrollo web full-stack, automatización, aplicaciones con IA local y sistemas de gestión WISP.',
    author: 'Arturo Molleda',
    keywords:
      'desarrollador full-stack, técnico en sistemas, portafolio, astro, web developer, automatización, ia local, wisp, autodidacta',
    siteName: 'AM DEV',
    themeColor: '#0D1117',
    twitterCard: 'summary',
  },
  jsonLd: {
    type: 'Person',
    areaServed: 'América Latina',
    serviceType: [
      'Desarrollo Web Full-Stack',
      'Automatización y DevOps',
      'Aplicaciones con IA Local',
      'Sistemas de Gestión',
    ],
  },
  navLinks: [
    { label: 'Especializaciones', href: '#especializaciones' },
    { label: 'Skills', href: '#skills' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Logros', href: '#logros' },
    { label: 'Contacto', href: '#contacto' },
  ],
  contact: {
    email: 'aems268@outlook.com',
    formHelp: 'Envíame un mensaje y te responderé a la brevedad.',
    emailLabel: 'TU_EMAIL',
    emailPlaceholder: 'usuario@dominio.com',
    messageLabel: 'MENSAJE',
    messagePlaceholder: 'Escribe tu mensaje aquí...',
    submitLabel: 'Enviar Mensaje',
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/aemsyncgd' },
    { label: 'Instagram', href: 'https://instagram.com/am.webmasterservices' },
  ],
  hero: {
    command: 'cargando perfil...',
    terminalSequence: ['cargando perfil...', 'stack listo...', 'modo creación activado...'],
    title: 'Técnico en Sistemas',
    highlightedTitle: 'y Desarrollo',
    description:
      'Autodidacta apasionado por la tecnología. Creo soluciones web completas, automatizo procesos, despliego infraestructura y exploro el potencial de la IA local. Cada proyecto es una oportunidad para aprender y construir.',
    primaryCta: { label: 'Iniciar Contacto', href: '#contacto' },
    secondaryCta: { label: 'Ver Proyectos', href: '#proyectos' },
    proof: {
      stats: [
        { value: 9, suffix: '+', label: 'proyectos' },
        { value: 6, suffix: '+', label: 'tecnologías' },
        { value: 1, suffix: '', label: 'learning-mode: always' },
      ],
    },
  },
  sections: {
    services: {
      heading: 'sudo list-especializaciones',
    },
    methodology: {
      heading: 'cat /etc/proceso',
    },
    certifications: {
      heading: 'cat /etc/skills',
    },
    toolstack: {
      heading: 'ls -la /opt/stack',
      terminalTitle: '/opt/stack - inventario técnico',
      promptUser: 'dev@node',
      promptPath: '/opt/stack',
      command: 'ls -la',
      summary: {
        directories: 4,
        tools: 18,
      },
    },
    projects: {
      heading: 'cat /var/log/proyectos',
    },
    testimonials: {
      heading: '# LOGROS-E-HITOS',
      eyebrow: 'hitos profesionales // rastro público',
      note: 'Cada hito representa un proyecto completado o un aprendizaje significativo.',
    },
    contact: {
      heading: './establecer-enlace',
    },
  },
  services: [
    {
      title: 'Desarrollo Web Full-Stack',
      desc: 'Construcción de aplicaciones web completas: desde el frontend con HTML, CSS y JavaScript hasta el backend con Python, PHP y bases de datos. Enfoque en soluciones funcionales y bien estructuradas.',
      icon: 'code',
    },
    {
      title: 'Automatización y DevOps',
      desc: 'Automatización de tareas con scripts, contenedores Docker, despliegue en Railway/Vercel, y orquestación con Podman. Optimización de flujos de trabajo con Google Apps Script y bots.',
      icon: 'settings',
    },
    {
      title: 'Aplicaciones con IA Local',
      desc: 'Entornos de pruebas para asistentes de IA con modelos locales. Integración de contenedores para ejecutar inferencia sin depender de servicios cloud.',
      icon: 'memory',
    },
    {
      title: 'Sistemas de Gestión',
      desc: 'Plataformas administrativas para WISP (facturación, clientes, redes), sectorización de clientes, y aplicaciones de inventario con control de costos y recetas.',
      icon: 'dns',
    },
  ],
  methodology: [
    {
      title: 'Análisis de Requisitos',
      desc: 'Entender el problema, definir los objetivos y planificar la solución. Investigación de tecnologías adecuadas y diseño de la arquitectura.',
      icon: 'search',
    },
    {
      title: 'Desarrollo Iterativo',
      desc: 'Construcción incremental con ciclos cortos de retroalimentación. Código limpio, pruebas funcionales y documentación del proceso.',
      icon: 'code_blocks',
    },
    {
      title: 'Despliegue y Soporte',
      desc: 'Puesta en producción, configuración del entorno, monitoreo y mantenimiento. Aprendizaje continuo basado en la operación real.',
      icon: 'check_circle',
    },
  ],
  certifications: [
    {
      name: 'TypeScript / JavaScript',
      title: 'Lenguajes principales',
      issuer: 'Frontend & Backend',
      file: 'ts-js.stack',
      issued: '2023',
      status: 'activo',
    },
    {
      name: 'Python',
      title: 'Automatización y AI Local',
      issuer: 'Scripting & Backend',
      file: 'python.stack',
      issued: '2023',
      status: 'activo',
    },
    {
      name: 'PHP / MySQL',
      title: 'Sistemas de gestión',
      issuer: 'Backend & DB',
      file: 'php-mysql.stack',
      issued: '2022',
      status: 'activo',
    },
    {
      name: 'Docker / Podman',
      title: 'Contenedores y orquestación',
      issuer: 'DevOps',
      file: 'docker.stack',
      issued: '2024',
      status: 'activo',
    },
    {
      name: 'Google Apps Script',
      title: 'Automatización de documentos',
      issuer: 'Productividad',
      file: 'apps-script.stack',
      issued: '2023',
      status: 'activo',
    },
    {
      name: 'Astro / Gatsby',
      title: 'Frameworks web modernos',
      issuer: 'Frontend',
      file: 'frameworks.stack',
      issued: '2024',
      status: 'activo',
    },
  ],
  toolCategories: [
    {
      name: 'frontend',
      owner: 'web',
      size: '42K',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Astro', 'Tailwind CSS'],
    },
    {
      name: 'backend',
      owner: 'api',
      size: '36K',
      tools: ['Python', 'PHP', 'Node.js', 'MySQL', 'PostgreSQL'],
    },
    {
      name: 'devops',
      owner: 'infra',
      size: '28K',
      tools: ['Docker', 'Podman', 'Bash', 'Linux', 'Nginx', 'Vercel', 'Railway'],
    },
    {
      name: 'ai-local',
      owner: 'ml',
      size: '19K',
      tools: ['Ollama', 'Podman AI', 'Python ML', 'Jupyter'],
    },
  ],
  projects: [
    {
      name: 'cocina-economica',
      category: 'Web App',
      desc: 'Aplicación web para calcular costos de recetas, gestionar inventario de ingredientes y controlar el gasto en cocina. Permite agregar ingredientes, definir cantidades y resta automáticamente del inventario según el uso.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      href: 'https://github.com/aemsyncgd/cocina-economica',
      live: 'https://cocina-economica-two.vercel.app',
    },
    {
      name: 'sectorizador',
      category: 'Web App',
      desc: 'Herramienta web para clasificar listas de clientes según su zona de residencia. Facilita la organización territorial y la logística de distribución.',
      tech: ['Python', 'Flask', 'HTML', 'CSS'],
      href: 'https://github.com/aemsyncgd/sectorizador',
    },
    {
      name: 'vidanet-wisp-admin',
      category: 'Sistema de Gestión',
      desc: 'Sistema de administración integral para proveedores de internet inalámbrico (WISP). Gestión de clientes, facturación, redes y servicios.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      href: 'https://github.com/aemsyncgd/vidanet-wisp-admin',
    },
    {
      name: 'webapp-dictado-a-texto',
      category: 'Web App',
      desc: 'Aplicación web de reconocimiento de voz que convierte dictado en texto en tiempo real. Utiliza la Web Speech API del navegador.',
      tech: ['JavaScript', 'Web Speech API', 'HTML', 'CSS'],
      href: 'https://github.com/aemsyncgd/webapp-dictado-a-texto',
    },
    {
      name: 'ai-local-assistant',
      category: 'AI Local',
      desc: 'Entorno de pruebas para asistente de IA con modelos locales en contenedores Podman. Infraestructura para ejecutar inferencia de LLMs sin depender de servicios cloud.',
      tech: ['Shell', 'Podman', 'Docker', 'Python'],
      href: 'https://github.com/aemsyncgd/ai-local-assistant',
    },
    {
      name: 'telegram-copy',
      category: 'Automatización',
      desc: 'Herramienta para extraer información de canales de Telegram. Automatización de recolección y procesamiento de datos desde la plataforma.',
      tech: ['Python', 'Telegram API'],
      href: 'https://github.com/aemsyncgd/telegram-copy',
    },
    {
      name: 'openclaw-railway',
      category: 'DevOps',
      desc: 'Despliegue de OpenClaw en Railway usando Docker. Configuración de contenedores para entornos de producción y pruebas.',
      tech: ['Docker', 'Dockerfile', 'Railway'],
      href: 'https://github.com/aemsyncgd/openclaw-railway',
    },
    {
      name: 'FuncionesAppScript',
      category: 'Automatización',
      desc: 'Colección de funciones útiles para Google Apps Script. Automatización de tareas en Google Docs, Sheets y otros servicios de Google Workspace.',
      tech: ['Google Apps Script', 'JavaScript'],
      href: 'https://github.com/aemsyncgd/FuncionesAppScript',
    },
    {
      name: 'gatsby-bigcommerce-netlify-cms-starter',
      category: 'E-commerce',
      desc: 'Starter para tiendas online con Gatsby, BigCommerce y Netlify CMS. Integración de catálogo de productos con CMS headless.',
      tech: ['Gatsby', 'React', 'BigCommerce', 'Netlify CMS'],
      href: 'https://github.com/aemsyncgd/gatsby-bigcommerce-netlify-cms-starter',
    },
  ],
  testimonials: [
    {
      title: 'Proyectos Desplegados',
      desc: 'Más de 9 proyectos funcionales publicados en producción, desde aplicaciones web hasta sistemas de gestión completos.',
      date: '2026',
      icon: 'rocket_launch',
    },
    {
      title: 'Trayectoria Autodidacta',
      desc: 'Formación continua a través de documentación técnica, experimentación práctica y contribución a proyectos personales y profesionales.',
      date: '2020 - presente',
      icon: 'school',
    },
    {
      title: 'Stack Multitecnología',
      desc: 'Dominio de más de 15 tecnologías entre lenguajes, frameworks, bases de datos y herramientas de infraestructura.',
      date: 'en constante evolución',
      icon: 'terminal',
    },
  ],
  footer: {
    status: 'CONEXIÓN SEGURA',
  },
} as const;
