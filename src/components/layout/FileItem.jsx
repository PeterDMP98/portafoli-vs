import { usePortfolio } from '../../context/PortfolioContext'

export default function FileItem({ file }) {
  const { openTab, activeTab } = usePortfolio()
  const isActive = activeTab === file.id
  const Icon = file.icon

  return (
    <button
      className="flex items-center gap-1.5 w-full py-1 pl-8 pr-4 text-xs cursor-pointer border-none text-left transition-all duration-200"
      style={{
        fontFamily: 'var(--mono)',
        color: isActive ? 'var(--accent)' : 'var(--text2)',
        background: isActive ? 'color-mix(in srgb, var(--accent) 8%, transparent)' : 'transparent',
        borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
        margin: '4px 0',
      }}
      onClick={() => openTab(file.id, file.label, file.ext)}
      onMouseEnter={e => {
        if (!isActive) {
          e.currentTarget.style.background = 'var(--bg3)'
          e.currentTarget.style.color = 'var(--text1)'
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = 'var(--text2)'
        }
      }}
    >
      <Icon size={14} style={{ color: file.iconColor }} />
      <span>{file.label}.{file.ext}</span>
    </button>
  )
}
