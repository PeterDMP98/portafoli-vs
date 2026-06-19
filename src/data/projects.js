export const projects = [
  {
    name: 'API REST — Sistema de gestión',
    icon: 'Code',
    badge: { label: 'activo', type: 'active' },
    desc: 'API RESTful con autenticación JWT, manejo de roles y documentación automática con Swagger. Arquitectura en capas con separación de responsabilidades.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT'],
    detailId: 'project-api',
    url: null,
  },
  {
    name: 'Microservicios — E-commerce',
    icon: 'Database',
    badge: { label: 'en desarrollo', type: 'wip' },
    desc: 'Arquitectura de microservicios con comunicación por eventos usando RabbitMQ. Servicios independientes para inventario, órdenes y pagos.',
    stack: ['Python', 'FastAPI', 'RabbitMQ', 'Redis', 'K8s'],
    detailId: null,
    url: null,
  },
  {
    name: 'CLI de automatización',
    icon: 'Cloud',
    badge: { label: 'activo', type: 'active' },
    desc: 'Herramienta de línea de comandos para automatizar despliegues y configuración de entornos. Scripts de Bash y Python integrados.',
    stack: ['Bash', 'Python', 'AWS CLI', 'Terraform'],
    detailId: 'project-infra',
    url: null,
  },
]