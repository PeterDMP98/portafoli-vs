import { ChevronDown } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'

export default function ExplorerHeader() {
  const { t } = usePortfolio()

  return (
    <div
      className="flex items-center gap-1 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider"
      style={{
        fontFamily: 'var(--mono)',
        color: 'var(--text3)',
        background: 'var(--bg1)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <ChevronDown size={12} />
      <span>{t('explorer.title')}</span>
    </div>
  )
}
