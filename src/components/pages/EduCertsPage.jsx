import { certificates } from '../../data/certificates'
import { usePortfolio } from '../../context/PortfolioContext'
import CertCard from '../ui/CertCard'

export default function EduCertsPage() {
  const { t } = usePortfolio()

  return (
    <div className="page">
      <div className="section-label">{t('eduCerts.title')}</div>
      <div className="flex flex-col gap-3">
        {certificates.map(c => (
          <CertCard key={c.name} cert={c} />
        ))}
      </div>
    </div>
  )
}