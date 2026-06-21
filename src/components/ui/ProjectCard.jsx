import { Code, Database, Cloud, Eye, ExternalLink } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'

const iconMap = { Code, Database, Cloud }
const extMap = {
  softcamp: 'js',
  'biblia-multiplatform': 'py',
  'devmatch-ai': 'py',
}

export default function ProjectCard({ project }) {
  const { openTab } = usePortfolio()
  const Icon = iconMap[project.icon] || Code
  const badgeColor = project.badge.type === 'active' ? 'var(--green)' : 'var(--yellow)'

  return (
    <div
      className="rounded-lg transition-all duration-200"
      style={{
        background: 'var(--bg1)',
        border: '1px solid var(--border)',
        padding: '20px 22px',
        marginBottom: '16px',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
    >
      <div className="flex items-start justify-between" style={{ marginBottom: '10px' }}>
        <span className="flex items-center gap-2" style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text1)' }}>
          {Icon && <Icon size={14} style={{ color: 'var(--accent)' }} />}
          {project.name}
        </span>
        <span
          className="text-[10px] px-2 py-[2px] rounded border"
          style={{
            fontFamily: 'var(--mono)',
            borderColor: badgeColor,
            color: badgeColor,
          }}
        >
          {project.badge.label}
        </span>
      </div>
      <p className="text-[13px]" style={{ color: 'var(--text2)', lineHeight: '1.7', marginBottom: '14px' }}>
        {project.desc}
      </p>
      <div className="flex gap-[6px] flex-wrap" style={{ marginBottom: '16px' }}>
        {project.stack.map(tech => (
          <span
            key={tech}
            className="text-[10px] px-[7px] py-[2px] rounded"
            style={{
              fontFamily: 'var(--mono)',
              background: 'var(--bg3)',
              color: 'var(--text3)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap">
        {project.detailId && (
          <button
            className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded border cursor-pointer transition-all duration-200"
            style={{
              fontFamily: 'var(--mono)',
              background: 'transparent',
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
            onClick={() => {
              const ext = extMap[project.detailId] || 'js'
              openTab(project.detailId, project.detailId, ext)
            }}
          >
            <Eye size={12} />
            Ver más
          </button>
        )}
        <a
          href={project.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded border no-underline transition-all duration-200"
          style={{
            fontFamily: 'var(--mono)',
            background: 'transparent',
            borderColor: project.url ? 'var(--accent2)' : 'var(--border)',
            color: project.url ? 'var(--accent2)' : 'var(--text3)',
            cursor: project.url ? 'pointer' : 'default',
            opacity: project.url ? 1 : 0.5,
          }}
          onMouseEnter={e => { if (project.url) { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.color = '#fff' } }}
          onMouseLeave={e => { if (project.url) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent2)' } }}
        >
          <ExternalLink size={12} />
          Visualizar app
        </a>
      </div>
    </div>
  )
}
