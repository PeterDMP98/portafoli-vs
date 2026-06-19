import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'

export default function ChatMessages({ messages }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div
      className="flex-1 overflow-y-auto p-[12px_14px] flex flex-col gap-[10px]"
      style={{ scrollbarWidth: 'thin' }}
    >
      {messages.map((msg, i) => (
        <ChatMessage key={i} msg={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
