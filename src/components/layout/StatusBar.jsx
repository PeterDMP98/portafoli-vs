import { GitBranch, File, CircleCheck } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'

export default function StatusBar() {
  const { tabs, activeTab, t } = usePortfolio()
  const currentFile = tabs[activeTab]
  const fileName = currentFile ? `${currentFile.name}.${currentFile.ext}` : ''

  return (
    <div
      className="h-6 flex items-center justify-between px-[14px] shrink-0"
      style={{ background: 'var(--accent)' }}
    >
      <span className="flex items-center gap-[6px] text-[11px] text-white" style={{ fontFamily: 'var(--mono)' }}>
        <GitBranch size={12} /> {t('status.branch')}
      </span>
      <span className="flex items-center gap-[6px] text-[11px] text-white" style={{ fontFamily: 'var(--mono)' }}>
        <File size={12} /> {fileName || 'README.md'}
      </span>
      <span className="flex items-center gap-[6px] text-[11px] text-white" style={{ fontFamily: 'var(--mono)' }}>
        <CircleCheck size={12} /> {t('status.available')}
      </span>
    </div>
  )
}
