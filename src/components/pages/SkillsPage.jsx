import { skillGroups } from '../../data/skills'
import { usePortfolio } from '../../context/PortfolioContext'
import SkillGroup from '../ui/SkillGroup'

export default function SkillsPage() {
  const { t } = usePortfolio()

  return (
    <div className="page">
      <div className="section-label">{t('skills.title')}</div>
      {skillGroups.map(g => (
        <SkillGroup key={g.title} group={g} />
      ))}
    </div>
  )
}
