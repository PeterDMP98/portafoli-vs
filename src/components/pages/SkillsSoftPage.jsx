import { softSkills } from '../../data/softSkills'
import { usePortfolio } from '../../context/PortfolioContext'

export default function SkillsSoftPage() {
  const { t } = usePortfolio()

  return (
    <div className="page">
      <div className="section-label">{t('skillsSoft.title')}</div>
      <div className="grid grid-cols-2 gap-3">
        {softSkills.map(s => (
          <div
            key={s.title}
            className="rounded-lg p-[14px]"
            style={{
              background: 'var(--bg1)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="text-xl mb-2">{s.emoji}</div>
            <div className="text-sm font-medium mb-1" style={{ color: 'var(--text1)' }}>
              {s.title}
            </div>
            <div className="text-xs" style={{ color: 'var(--text2)' }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
