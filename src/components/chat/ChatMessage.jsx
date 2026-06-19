import { Bot, User } from 'lucide-react'

export default function ChatMessage({ msg }) {
  const isUser = msg.type === 'user'

  return (
    <div
      className="flex gap-3 px-4 py-3"
      style={{ justifyContent: isUser ? 'flex-end' : 'flex-start' }}
    >
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: 'color-mix(in srgb, var(--accent) 20%, transparent)' }}
        >
          <Bot size={14} style={{ color: 'var(--accent)' }} />
        </div>
      )}
      <div
        className="max-w-[85%] text-xs leading-relaxed rounded-lg"
        style={{
          background: isUser ? 'var(--accent)' : 'var(--bg2)',
          color: isUser ? '#fff' : 'var(--text1)',
          padding: '8px 12px',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}
      >
        {msg.text}
      </div>
      {isUser && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: 'var(--accent)' }}
        >
          <User size={14} style={{ color: '#fff' }} />
        </div>
      )}
    </div>
  )
}