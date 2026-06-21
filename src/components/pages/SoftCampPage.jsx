import { usePortfolio } from '../../context/PortfolioContext'

export default function SoftCampPage() {
  const { t } = usePortfolio()
  const content = `# SoftCamp

Sistema multiplataforma Web y móviles para la gestión del campo para campesinos integrado con IA.

## Stack
- **Frontend:** JavaScript, React, Tailwind CSS
- **Backend:** Node.js, Express
- **Base de datos:** PostgreSQL, SQLite
- **IA:** Integración de modelos de inteligencia artificial para asistencia en cultivos

## Estado
En desarrollo.

> Proyecto enfocado en llevar tecnología al campo colombiano, permitiendo a los campesinos gestionar sus cultivos, recibir recomendaciones basadas en IA y acceder a información meteorológica y de mercado.`

  return (
    <div className="page">
      <div className="text-xs font-mono mb-6" style={{ color: 'var(--text3)' }}>
        // {t('softcamp.title')}
      </div>
      <pre
        className="text-sm leading-relaxed whitespace-pre-wrap font-mono"
        style={{ color: 'var(--text2)', lineHeight: '1.8' }}
      >
        {content}
      </pre>
    </div>
  )
}
