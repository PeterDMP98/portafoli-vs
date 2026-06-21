import { PortfolioProvider, usePortfolio } from './context/PortfolioContext'
import TitleBar from './components/layout/TitleBar'
import Sidebar from './components/layout/Sidebar'
import Tabs from './components/layout/Tabs'
import StatusBar from './components/layout/StatusBar'
import ChatPanel from './components/chat/ChatPanel'
import AboutPage from './components/pages/AboutPage'
import SkillsPage from './components/pages/SkillsPage'
import SkillsSoftPage from './components/pages/SkillsSoftPage'
import ContactPage from './components/pages/ContactPage'
import ProjectsPage from './components/pages/ProjectsPage'
import SoftCampPage from './components/pages/SoftCampPage'
import BibliaMultiplatformPage from './components/pages/BibliaMultiplatformPage'
import DevMatchAIPage from './components/pages/DevMatchAIPage'
import EducationPage from './components/pages/EducationPage'
import EduCertsPage from './components/pages/EduCertsPage'

const pages = {
  about: AboutPage,
  skills: SkillsPage,
  softskills: SkillsSoftPage,
  contact: ContactPage,
  projects: ProjectsPage,
  softcamp: SoftCampPage,
  'biblia-multiplatform': BibliaMultiplatformPage,
  'devmatch-ai': DevMatchAIPage,
  education: EducationPage,
  'edu-certs': EduCertsPage,
}

function ContentArea() {
  const { activeTab, t } = usePortfolio()
  const PageComponent = pages[activeTab]

  return (
    <div
      id="content"
      className="flex-1 overflow-y-auto"
      style={{ background: 'var(--bg0)', fontSize: '14px' }}
    >
      {PageComponent ? (
        <div className="page" style={{ display: 'block' }}>
          <PageComponent />
        </div>
      ) : (
        <div className="page" style={{ display: 'block' }}>
          <div
            className="text-center pt-20"
            style={{ color: 'var(--text3)', fontFamily: 'var(--mono)' }}
          >
            {t('tab.empty')}
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <PortfolioProvider>
      <div
        className="flex flex-col"
        style={{
          height: '100vh',
          minHeight: '600px',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}
      >
        <TitleBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div id="main" className="flex flex-col flex-1 overflow-hidden min-w-0">
            <Tabs />
            <ContentArea />
          </div>
          <ChatPanel />
        </div>
        <StatusBar />
      </div>
    </PortfolioProvider>
  )
}

export default App
