import { useEffect, useRef } from 'react'
import { Bot, X, Mail } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import SuggestedQuestions from './SuggestedQuestions'

export default function ChatPanel() {
  const { chatOpen, closeChat, messages, sendMessage, t } = usePortfolio()
  const bottomRef = useRef(null)

  useEffect(() => {
    if (chatOpen) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, chatOpen])

  return (
    <div
      id="chat-panel"
      className={'flex flex-col shrink-0 ' + (chatOpen ? 'chat-open' : 'chat-closed')}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 shrink-0"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-2">
          <Bot size={16} style={{ color: 'var(--accent)' }} />
          <span className="text-xs font-semibold" style={{ fontFamily: 'var(--mono)', color: 'var(--text1)' }}>
            {t('chat.title')}
          </span>
        </div>
        <button
          onClick={closeChat}
          className="flex items-center justify-center cursor-pointer border-none"
          style={{ background: 'none', color: 'var(--text3)' }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--text1)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)' }}
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
        {messages.map((msg, i) => (
          <ChatMessage key={i} msg={msg} />
        ))}
        {messages.length === 1 && (
          <SuggestedQuestions onSelect={(text) => sendMessage(text)} />
        )}
        <div ref={bottomRef} />
      </div>

      {/* Contact button */}
      <a
        href="https://wa.me/573043583617?text=Hola%20Pedro%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 mx-3 my-2 px-3 py-2 text-xs font-mono rounded no-underline transition-colors shrink-0"
        style={{
          background: 'var(--accent)',
          color: '#fff',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.9' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        <Mail size={14} />
        {t('chat.contact')}
      </a>

      <ChatInput />
    </div>
  )
}