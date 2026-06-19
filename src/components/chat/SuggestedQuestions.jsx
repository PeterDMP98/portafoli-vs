import { Code, Briefcase, Folder, Mail, FileText } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'

const iconMap = { Code, Briefcase, Folder, Mail, FileText }

const questions = [
  { id: 'skills', text: '¿Qué tecnologías dominas?', icon: 'Code' },
  { id: 'experience', text: '¿Cuánta experiencia tienes?', icon: 'Briefcase' },
  { id: 'projects', text: '¿Cuáles son tus proyectos?', icon: 'Folder' },
  { id: 'contact', text: '¿Cómo contactarte?', icon: 'Mail' },
  { id: 'resume', text: '¿Dónde veo tu CV?', icon: 'FileText' },
]

export default function SuggestedQuestions({ onSelect }) {
  const { t } = usePortfolio()

  return (
    <div className="px-4 py-3 ">
      <p
        className="text-[10px] uppercase tracking-wider mb-2 font-semibold"
        style={{ color: 'var(--text3)', padding: '0 0 5px 0' }}
      >
        {t('chat.suggested')}
      </p>
      <div className="flex flex-wrap gap-2">
        {questions.map(q => {
          const Icon = iconMap[q.icon] || Code
          return (
            <button
              key={q.id}
              onClick={() => onSelect(q.text)}
              className="flex items-center gap-1 px-2 py-1 text-[11px] rounded cursor-pointer transition-all duration-150"
              style={{
                fontFamily: 'var(--mono)',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                color: 'var(--text2)',
                padding: '1px 6px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg3)'
                e.currentTarget.style.color = 'var(--text1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--bg2)'
                e.currentTarget.style.color = 'var(--text2)'
              }}
            >
              <Icon size={12} />
              {q.text}
            </button>
          )
        })}
      </div>
    </div>
  )
}
