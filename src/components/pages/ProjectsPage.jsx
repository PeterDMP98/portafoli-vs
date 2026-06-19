import { projects } from '../../data/projects'
import { usePortfolio } from '../../context/PortfolioContext'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsPage() {
  const { t } = usePortfolio()

  return (
    <div className="page">
      <div className="section-label">{t('projects.title')}</div>
      {projects.map(p => (
        <ProjectCard key={p.name} project={p} />
      ))}
    </div>
  )
}
