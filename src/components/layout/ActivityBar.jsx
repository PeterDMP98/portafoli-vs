import { useState, useRef, useEffect } from 'react'
import { User, Folder, GraduationCap, Mail, MessageCircle, Settings, Sun, Moon, PanelLeftClose } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import { useTheme } from '../../context/ThemeContext'
import { explorerData } from '../../data/files'

const sectionIcons = {
  about: User,
  projects: Folder,
  edu: GraduationCap,
  contact: Mail,
}

function SettingsPopover({ onClose }) {
  const { language, setLanguage, t } = usePortfolio()
  const { theme, toggleTheme } = useTheme()
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  return (
    <div
      ref={ref}
      className="rounded-lg border shadow-xl p-2 flex flex-col gap-1"
      style={{
        position: 'absolute',
        left: '52px',
        bottom: '8px',
        width: '180px',
        background: 'var(--bg1)',
        borderColor: 'var(--border)',
        zIndex: 100,
        animation: 'fadeIn 0.15s ease-out',
      }}
    >
      <span className="text-[10px] uppercase tracking-wider px-2 py-1" style={{ color: 'var(--text3)', fontFamily: 'var(--mono)' }}>
        Settings
      </span>

      <button
        className="flex items-center gap-2 px-2 py-1.5 text-xs rounded cursor-pointer border-none transition-all duration-150"
        style={{
          fontFamily: 'var(--sans)',
          background: 'transparent',
          color: 'var(--text2)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--text1)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text2)' }}
        onClick={() => { setLanguage(language === 'ES' ? 'EN' : 'ES'); onClose() }}
      >
        <span className="text-xs w-4 text-center font-bold" style={{ color: language === 'ES' ? 'var(--accent)' : 'var(--accent2)' }}>{language === 'ES' ? 'ES' : 'EN'}</span>
        {t('app.lang')}
      </button>

      <button
        className="flex items-center gap-2 px-2 py-1.5 text-xs rounded cursor-pointer border-none transition-all duration-150"
        style={{
          fontFamily: 'var(--sans)',
          background: 'transparent',
          color: 'var(--text2)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--text1)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text2)' }}
        onClick={() => { toggleTheme(); onClose() }}
      >
        {theme === 'dark' ? <Sun size={13} style={{ color: 'var(--yellow)' }} /> : <Moon size={13} style={{ color: 'var(--accent)' }} />}
        {theme === 'dark' ? t('app.light') : t('app.dark')}
      </button>
    </div>
  )
}

export default function ActivityBar() {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { activeSection, openTab, toggleSidebar, toggleChat, t } = usePortfolio()

  return (
    <div
      className="flex flex-col items-center py-2 gap-2 shrink-0 relative"
      style={{
        width: '48px',
        background: 'var(--bg0)',
        borderRight: '1px solid var(--border)',
      }}
    >
      {/* Collapse sidebar (was chat) */}
      <button
        className="flex items-center justify-center rounded transition-colors cursor-pointer relative border-none outline-none"
        style={{ width: '36px', height: '36px', color: 'var(--text3)', background: 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--text1)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text3)' }}
        onClick={toggleSidebar}
        title={t('app.sidebar')}
      >
        <PanelLeftClose size={18} />
      </button>

      <div style={{ width: '24px', height: '1px', background: 'var(--border)' }} />

      {/* Section icons */}
      {explorerData.map(section => {
        const Icon = sectionIcons[section.id]
        const isActive = activeSection === section.id
        return (
          <button
            key={section.id}
            onClick={() => {
              const firstFile = section.files[0]
              openTab(firstFile.id, firstFile.label, firstFile.ext)
            }}
            className="flex items-center justify-center rounded transition-colors cursor-pointer relative border-none outline-none"
            style={{
              width: '36px',
              height: '36px',
              color: isActive ? 'var(--accent)' : 'var(--text3)',
              background: isActive ? 'var(--bg2)' : 'transparent',
            }}
            onMouseEnter={e => {
              if (!isActive) e.currentTarget.style.background = 'var(--bg3)'
              e.currentTarget.style.color = isActive ? 'var(--accent)' : 'var(--text1)'
            }}
            onMouseLeave={e => {
              if (!isActive) e.currentTarget.style.background = 'transparent'
              if (!isActive) e.currentTarget.style.color = 'var(--text3)'
            }}
            title={section.label}
          >
            {Icon && <Icon size={20} />}
            {isActive && (
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-r"
                style={{ height: '20px', background: 'var(--accent)' }}
              />
            )}
          </button>
        )
      })}

      {/* Chat below contact */}
      <button
        className="flex items-center justify-center rounded transition-colors cursor-pointer relative border-none outline-none"
        style={{ width: '36px', height: '36px', color: 'var(--text3)', background: 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text3)' }}
        onClick={toggleChat}
        title={t('chat.title')}
      >
        <MessageCircle size={20} />
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Settings */}
      <button
        className="flex items-center justify-center rounded transition-colors cursor-pointer border-none outline-none"
        style={{
          width: '36px',
          height: '36px',
          color: settingsOpen ? 'var(--accent)' : 'var(--text3)',
          background: settingsOpen ? 'var(--bg2)' : 'transparent',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--text1)' }}
        onMouseLeave={e => { if (!settingsOpen) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text3)' } }}
        onClick={() => setSettingsOpen(!settingsOpen)}
        title="Settings"
      >
        <Settings size={18} />
      </button>

      {settingsOpen && <SettingsPopover onClose={() => setSettingsOpen(false)} />}
    </div>
  )
}