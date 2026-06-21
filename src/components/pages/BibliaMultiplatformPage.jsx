import { usePortfolio } from '../../context/PortfolioContext'

export default function BibliaMultiplatformPage() {
  const { t } = usePortfolio()
  const content = `# Biblia Multiplatform

Sistema multiplataforma para el estudio y presentación de la biblia en iglesias con interfaz amigable y fácil manejo.

## Stack
- **Frontend:** Dart (Flutter)
- **Backend:** Python
- **Base de datos:** PostgreSQL, SQLite

## Características
- Interfaz intuitiva para navegación de libros, capítulos y versículos
- Soporte para múltiples versiones de la biblia
- Funcionalidad de búsqueda avanzada
- Presentación en pantalla completa para iglesias
- Notas y marcadores personalizados

## Estado
En desarrollo.`

  return (
    <div className="page">
      <div className="text-xs font-mono mb-6" style={{ color: 'var(--text3)' }}>
        // {t('biblia.title')}
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
