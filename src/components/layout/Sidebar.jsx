import { usePortfolio } from '../../context/PortfolioContext'
import ActivityBar from './ActivityBar'
import ExplorerHeader from './ExplorerHeader'
import Explorer from './Explorer'

export default function Sidebar() {
  const { sidebarCollapsed } = usePortfolio()

  return (
    <div className="flex shrink-0">
      <ActivityBar />
      <div
        id="sidebar"
        className="flex flex-col gap-1.5 overflow-y-auto transition-[width] duration-300"
        style={{
          width: sidebarCollapsed ? '0px' : '220px',
          background: 'var(--bg1)',
          boxShadow: 'inset -1px 0 0 var(--border)',
          overflow: sidebarCollapsed ? 'hidden' : 'auto',
        }}
      >
        <ExplorerHeader />
        <Explorer />
      </div>
    </div>
  )
}
