import { Code, Database, Cloud } from 'lucide-react'

const iconMap = { Code, Database, Cloud }

export default function SkillGroup({ group }) {
  const Icon = iconMap[group.icon]
  return (
    <div className="mb-[28px]">
      <div
        className="flex items-center gap-[6px] text-xs mb-3"
        style={{ fontFamily: 'var(--mono)', color: 'var(--text2)' }}
      >
        {Icon && <Icon size={14} />}
        {group.title}
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map(skill => (
          <span
            key={skill.name}
            className="flex items-center gap-[6px] text-xs px-3 py-[6px] rounded-md border transition-all duration-200"
            style={{
              fontFamily: 'var(--mono)',
              background: 'var(--bg2)',
              borderColor: 'var(--border)',
              color: 'var(--text2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent2)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: skill.color }} />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}
