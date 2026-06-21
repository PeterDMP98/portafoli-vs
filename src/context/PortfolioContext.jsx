import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import translations from '../i18n'
import { explorerData } from '../data/files'

const PortfolioContext = createContext()

const defaultTabs = { about: { name: 'README', ext: 'md' } }

const aiReplies = {
  node: 'Pedro tiene experiencia con Node.js y Express para construir APIs REST y aplicaciones web full stack.',
  python: 'Usa Python con FastAPI para microservicios y análisis de datos. También tiene conocimientos en ciencia de datos con Python.',
  react: 'Pedro tiene experiencia sólida con React, React-Bootstrap y Tailwind CSS para crear interfaces modernas y responsivas.',
  softcamp: 'SoftCamp es su proyecto principal: un sistema multiplataforma para gestión agrícola integrado con IA, usando React, Node.js y PostgreSQL.',
  biblia: 'Biblia Multiplatform es un sistema para estudio bíblico en iglesias, desarrollado con Dart/Flutter y Python.',
  devmatch: 'DevMatch AI es una plataforma de reclutamiento con IA que automatiza procesos de selección y matching de talento.',
  ecommerce: 'Tiene un proyecto de e-commerce desarrollado con React, React-Bootstrap, Node.js y PostgreSQL.',
  disponible: 'Sí, Pedro está disponible para oportunidades laborales, colaboraciones y proyectos.',
  experiencia: 'Desarrollador full stack con proyectos en JavaScript, React, Node.js, Python y bases de datos relacionales.',
  colombia: 'Pedro está basado en Colombia y abierto a trabajo remoto.',
  salario: 'Para discutir compensación, te recomiendo contactar directamente a Pedro.',
  academlo: 'Pedro estudió Full Stack Web Development en ACADEMLO, un bootcamp intensivo.',
  sena: 'Pedro tiene certificación del SENA en Manejo de Pruebas de Software.',
  alura: 'Pedro estudió Ciencia de datos con Python en Alura Latam.',
  ingles: 'Pedro tiene nivel básico de inglés y español nativo.',
  default: 'Soy Daniel, el asistente de Pedro. Te recomiendo revisar las secciones del portafolio o contactar directamente a Pedro para más detalles.',
}

function deriveSection(tabId) {
  for (const section of explorerData) {
    if (section.files.some(f => f.id === tabId)) return section.id
  }
  return 'about'
}

export function PortfolioProvider({ children }) {
  const [tabs, setTabs] = useState(defaultTabs)
  const [activeTab, setActiveTab] = useState('about')
  const [activeSection, setActiveSection] = useState('about')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [language, setLanguage] = useState('ES')

  const langKey = language === 'EN' ? 'en' : 'es'
  const [messages, setMessages] = useState([
    { type: 'ai', text: translations[langKey]['chat.welcome'] },
  ])
  const [chatLoading, setChatLoading] = useState(false)

  useEffect(() => {
    setActiveSection(deriveSection(activeTab))
  }, [activeTab])

  useEffect(() => {
    setMessages(prev => {
      const newWelcome = translations[langKey]['chat.welcome']
      if (prev[0]?.type === 'ai') {
        return [{ type: 'ai', text: newWelcome }, ...prev.slice(1)]
      }
      return prev
    })
  }, [language])

  const t = useCallback((key) => {
    return translations[langKey][key] || key
  }, [language])

  const openTab = useCallback((id, name, ext) => {
    setTabs(prev => {
      if (prev[id]) return prev
      return { ...prev, [id]: { name, ext } }
    })
    setActiveTab(id)
  }, [])

  const closeTab = useCallback((id) => {
    setTabs(prev => {
      const next = { ...prev }
      delete next[id]
      return next
    })
    setActiveTab(prev => {
      if (prev === id) {
        const remaining = Object.keys(tabs).filter(k => k !== id)
        return remaining.length ? remaining[remaining.length - 1] : ''
      }
      return prev
    })
  }, [tabs])

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(c => !c)
  }, [])

  const toggleChat = useCallback(() => {
    setChatOpen(c => !c)
  }, [])

  const closeChat = useCallback(() => {
    setChatOpen(false)
  }, [])

  const addMessage = useCallback((type, text) => {
    setMessages(prev => [...prev, { type, text }])
  }, [])

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return
    setChatLoading(true)
    addMessage('user', text)
    setTimeout(() => {
      const lower = text.toLowerCase()
      let reply = aiReplies.default
      for (const [key, val] of Object.entries(aiReplies)) {
        if (lower.includes(key)) { reply = val; break }
      }
      addMessage('ai', reply)
      setChatLoading(false)
    }, 600)
  }, [addMessage])

  const value = {
    tabs, activeTab, setActiveTab,
    openTab, closeTab,
    activeSection,
    sidebarCollapsed, toggleSidebar,
    chatLoading,
    chatOpen, toggleChat, closeChat,
    language, setLanguage, t,

    messages, sendMessage, addMessage,
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be used within PortfolioProvider')
  return ctx
}
