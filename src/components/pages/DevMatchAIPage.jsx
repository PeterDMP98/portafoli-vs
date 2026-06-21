import { usePortfolio } from '../../context/PortfolioContext'

export default function DevMatchAIPage() {
  const { t } = usePortfolio()
  const content = `# DevMatch AI

DevMatch AI es una plataforma de reclutamiento impulsada por inteligencia artificial que automatiza procesos de selección, evalúa candidatos y optimiza el matching entre talento y empresas.

## Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Python, FastAPI
- **Base de datos:** PostgreSQL
- **IA:** Modelos de machine learning para matching y evaluación de candidatos

## Características
- Automatización del proceso de selección
- Evaluación inteligente de candidatos
- Sistema de matching entre talento y empresas
- Panel de administración para reclutadores
- Análisis y reportes de contratación

## Estado
En desarrollo.`

  return (
    <div className="page">
      <div className="text-xs font-mono mb-6" style={{ color: 'var(--text3)' }}>
        // {t('devmatch.title')}
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
