import { FolderOpen, Folder, FileText, Braces, FileCode, Terminal, Mail } from 'lucide-react'

export const explorerData = [
  {
    id: 'about',
    label: 'sobre-mi',
    icon: FolderOpen,
    defaultOpen: true,
    files: [
      { id: 'about', label: 'README', ext: 'md', icon: FileText, iconColor: '#519ABA' },
    ],
  },
  {
    id: 'projects',
    label: 'proyectos',
    icon: Folder,
    defaultOpen: false,
    files: [
      { id: 'projects', label: 'index', ext: 'js', icon: FileCode, iconColor: '#D7BA7D' },
      { id: 'project-api', label: 'api-rest', ext: 'py', icon: FileCode, iconColor: '#FFD700' },
      { id: 'project-infra', label: 'infra-docker', ext: 'sh', icon: Terminal, iconColor: '#3FB950' },
    ],
  },
  {
    id: 'edu',
    label: 'educacion',
    icon: Folder,
    defaultOpen: false,
    files: [
      { id: 'education', label: 'formacion', ext: 'md', icon: FileText, iconColor: '#519ABA' },
      { id: 'edu-certs', label: 'certificados', ext: 'json', icon: Braces, iconColor: '#D4D4D4' },
    ],
  },
  {
    id: 'contact',
    label: 'contacto',
    icon: Folder,
    defaultOpen: true,
    files: [
      { id: 'contact', label: 'contacto', ext: 'js', icon: Mail, iconColor: '#3B82F6' },
    ],
  },
]
