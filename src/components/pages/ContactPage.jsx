import { useState } from 'react'
import { MessageCircle, Send, ExternalLink, Check, Loader2 } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import { contact } from '../../data/contact'

const emailEncoded = btoa(contact.email)

export default function ContactPage() {
  const { toggleChat, t } = usePortfolio()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    setSending(true)
    const to = atob(emailEncoded)
    const subject = encodeURIComponent('Contacto desde portafolio')
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email || 'No especificado'}\n\nMensaje:\n${form.message}`
    )
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank')
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 500)
  }

  return (
    <div className="page">
      <div className="section-label">{t('contact.title')}</div>

      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: 'var(--text2)', maxWidth: '500px' }}
      >
        Elige el medio que prefieras para contactarme. Estoy disponible para
        oportunidades laborales, colaboraciones o simplemente para conversar.
      </p>

      <div className="flex flex-col gap-4 max-w-md">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${contact.whatsapp}?text=Hola%20Pedro%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-5 py-4 rounded-xl no-underline transition-all duration-300 group"
          style={{
            background: 'var(--bg1)',
            border: '1px solid var(--border)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)'
            e.currentTarget.style.borderColor = '#25D366'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            <MessageCircle size={22} style={{ color: '#fff' }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium" style={{ color: 'var(--text1)' }}>
              WhatsApp
            </div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>
              Respuesta rápida
            </div>
          </div>
          <ExternalLink size={16} style={{ color: 'var(--text3)' }} />
        </a>

        {/* Pedro AI / Chat */}
        <button
          onClick={toggleChat}
          className="flex items-center gap-4 px-5 py-4 rounded-xl no-underline transition-all duration-300 cursor-pointer border group"
          style={{
            background: 'var(--bg1)',
            borderColor: 'var(--border)',
            textAlign: 'left',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)'
            e.currentTarget.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            }}
          >
            <MessageCircle size={22} style={{ color: '#fff' }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium" style={{ color: 'var(--text1)' }}>
              {t('chat.title')}
            </div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>
              {t('chat.placeholder')}
            </div>
          </div>
          <span
            className="text-xs px-3 py-1 rounded-full font-mono"
            style={{ background: 'var(--bg3)', color: 'var(--text3)' }}
          >
            Daniel
          </span>
        </button>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl p-5 transition-all duration-300"
          style={{
            background: 'var(--bg1)',
            border: '1px solid var(--border)',
            padding: '10px 5px',
          }}
        >
          <div className="text-sm font-medium mb-4" style={{ color: 'var(--text1)', marginBottom: '10px' }}>
            Enviar correo
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Tu nombre *"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              required
              className="w-full px-3 py-2.5 rounded-lg border outline-none transition-colors"
              style={{
                fontFamily: 'var(--mono)',
                background: 'var(--bg0)',
                borderColor: 'var(--border)',
                color: 'var(--text1)',
                padding: '5px 5px',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
              onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            />
            <input
              type="email"
              placeholder="Tu email (opcional)"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full px-3 py-2.5 rounded-lg border outline-none transition-colors"
              style={{
                fontFamily: 'var(--mono)',
                background: 'var(--bg0)',
                borderColor: 'var(--border)',
                color: 'var(--text1)',
                padding: '5px 5px',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
              onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            />
            <textarea
              placeholder="Tu mensaje *"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              required
              rows={7}
              className="w-full px-3 py-2.5 rounded-lg border outline-none resize-none transition-colors"
              style={{
                fontFamily: 'var(--mono)',
                background: 'var(--bg0)',
                borderColor: 'var(--border)',
                color: 'var(--text1)',
                padding: '5px 5px',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
              onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            />
            <button
              type="submit"
              disabled={!form.name.trim() || !form.message.trim() || sending}
              className="flex items-center justify-center gap-2 text-xs px-4 py-2.5 rounded-lg border-none cursor-pointer transition-all duration-200"
              style={{
                fontFamily: 'var(--mono)',
                background: form.name.trim() && form.message.trim() && !sending ? 'var(--accent)' : 'var(--bg3)',
                color: '#fff',
                opacity: form.name.trim() && form.message.trim() && !sending ? 1 : 0.5,
                padding: '5px 5px',
              }}
            >
              {sending ? <Loader2 size={14} className="animate-spin" /> : sent ? <Check size={14} /> : <Send size={14} />}
              {sent ? 'Enviado' : 'Enviar mensaje'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}