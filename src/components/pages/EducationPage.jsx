import { education } from '../../data/education'
import { usePortfolio } from '../../context/PortfolioContext'
import EduItem from '../ui/EduItem'

export default function EducationPage() {
  const { t } = usePortfolio()

  return (
    <div className="page">
      <div className="section-label">{t('education.title')}</div>
      {education.map((e, i) => (
        <EduItem key={i} item={e} />
      ))}
    </div>
  )
}