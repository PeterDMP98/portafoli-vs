import { usePortfolio } from '../../context/PortfolioContext'

export default function TitleBar() {
  const { t } = usePortfolio()

  return (
    <div
      id="titlebar"
      className="h-[38px] w-full flex items-center justify-between px-4 border-b shrink-0 transition-colors duration-300"
      style={{
        background: 'color-mix(in srgb, var(--bg1) 85%, transparent)',
        borderColor: 'var(--border)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'relative',
        zIndex: 51,
        padding: '0 12px',
      }}
    >
      <div className="flex items-center gap-2">
        <span className="ml-2 text-xs title-text" style={{ fontFamily: 'var(--mono)', color: 'var(--text2)' }}>
          {t('app.title')}
        </span>
      </div>
    </div>
  )
}
