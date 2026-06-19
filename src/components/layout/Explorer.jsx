import { explorerData } from '../../data/files'
import { usePortfolio } from '../../context/PortfolioContext'
import FolderItem from './Folder'

export default function Explorer() {
  const { activeSection } = usePortfolio()
  const sections = explorerData.filter(s => s.id === activeSection)

  return (
    <div className="py-2">
      {sections.map(folder => (
        <FolderItem key={folder.id} folder={folder} forceOpen />
      ))}
    </div>
  )
}
