import { X } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import { tabIcons, tabColors } from '../../data/tabs'

export default function Tabs() {
  const { tabs, activeTab, setActiveTab, closeTab } = usePortfolio()
  const entries = Object.entries(tabs)

  return (
    <div
      id="tabs"
      className="h-[36px] flex items-end border-b overflow-x-auto shrink-0"
      style={{ background: 'var(--bg1)', borderColor: 'var(--border)' }}
    >
      {entries.map(([id, { name, ext }]) => {
        const Icon = tabIcons[ext]
        const isActive = id === activeTab
        return (
          <div
            key={id}
            className={`flex items-center gap-1.5 px-3.5 text-xs whitespace-nowrap shrink-0 cursor-pointer border-r transition-all duration-150`}
            style={{
              height: '35px',
              fontFamily: 'var(--mono)',
              color: isActive ? 'var(--text1)' : 'var(--text3)',
              borderRight: '1px solid var(--border)',
              borderTop: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
              background: isActive ? 'var(--tab-active)' : 'transparent',
              borderBottom: isActive ? '1px solid var(--tab-active)' : 'none',
              padding: '0px 5px',
            }}
            onClick={() => setActiveTab(id)}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--bg2)' }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
          >
            {Icon && <Icon size={13} style={{ color: tabColors[ext] || '#aaa' }} />}
            <span>{name}.{ext}</span>
            <button
              className="flex items-center justify-center p-0 ml-[6px] cursor-pointer rounded-sm"
              style={{ background: 'none', border: 'none', color: 'var(--text3)', fontSize: '12px', lineHeight: '1' }}
              onClick={e => { e.stopPropagation(); closeTab(id) }}
              aria-label="Cerrar pestaña"
            >
              <X size={12} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
