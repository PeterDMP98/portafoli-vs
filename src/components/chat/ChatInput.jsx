import { useState, useRef, useEffect } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'

export default function ChatInput() {
  const [text, setText] = useState('')
  const { sendMessage, chatLoading, t } = usePortfolio()
  const inputRef = useRef(null)

  const handleSend = () => {
    if (!text.trim() || chatLoading) return
    sendMessage(text)
    setText('')
  }

  useEffect(() => {
    if (!chatLoading && inputRef.current) inputRef.current.focus()
  }, [chatLoading])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div
      className="p-3 shrink-0 "
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div
        className="flex flex-col gap-3 rounded-lg p-2"
        style={{
          background: 'var(--bg0)',
          border: '1px solid var(--border)',
        }}
      >
        <textarea
          ref={inputRef}
          className="bg-transparent text-xs outline-none resize-none font-mono"
          style={{ color: 'var(--text1)', height: '65px', padding: '5px 6px' }}
          rows={1}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('chat.placeholder')}
        />
        <button
          className="flex items-center justify-center rounded p-1.5 cursor-pointer border-none shrink-0"
          style={{
            background: text.trim() && !chatLoading ? 'var(--accent)' : 'var(--bg3)',
            color: '#fff',
            opacity: text.trim() && !chatLoading ? 1 : 0.4,
            padding: '3px 0',
          }}
          onClick={handleSend}
          disabled={!text.trim() || chatLoading}
          aria-label="Enviar"
        >
          {chatLoading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
        </button>
      </div>
    </div>
  )
}