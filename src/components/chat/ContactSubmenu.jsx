import { Mail } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'

export default function ContactSubmenu() {
  const { t } = usePortfolio()

  return (
    <div className="px-3 pb-3">
      <div className="flex gap-2">
        <a
          href="https://wa.me/573000000000?text=Hola%20Pedro%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 text-[11px] rounded cursor-pointer border no-underline transition-all duration-200"
          style={{
            fontFamily: 'var(--mono)',
            borderColor: '#25D366',
            color: '#25D366',
            background: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#25D366' }}
        >
          WhatsApp
        </a>
        <a
          href="mailto:tu@email.com?subject=Contacto%20desde%20portafolio&body=Hola%20Pedro%2C%20vi%20tu%20portafolio%20y%20quiero%20contactarte."
          className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 text-[11px] rounded cursor-pointer border no-underline transition-all duration-200"
          style={{
            fontFamily: 'var(--mono)',
            borderColor: 'var(--accent)',
            color: 'var(--accent)',
            background: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--accent)' }}
        >
          <Mail size={12} /> {t('chat.contact')}
        </a>
      </div>
    </div>
  )
}
