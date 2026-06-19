import { Mail, Globe, Code2, Server, Database, Cloud, Users, Puzzle, BookOpen, Clock } from 'lucide-react'
import { usePortfolio } from '../../context/PortfolioContext'
import { skillGroups } from '../../data/skills'
import { softSkills } from '../../data/softSkills'
import Badge from '../ui/Badge'

const groupIcons = { Server, Database, Cloud }
const softIcons = [Puzzle, Users, BookOpen, Clock]

export default function AboutPage() {
  const { t } = usePortfolio()

  return (
    <div className="page">
      {/* Header */}
      <div className="flex gap-7 items-start mb-10">
        <div className="shrink-0">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-[22px] font-medium text-white border-2"
            style={{
              fontFamily: 'var(--mono)',
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              borderColor: 'var(--border)',
            }}
          >
            PLC
          </div>
        </div>
        <div >
          <h1 className="text-[22px] font-semibold mb-1" style={{ color: 'var(--text1)' }}>
            {t('about.name')}
          </h1>
          <div className="text-[13px] mb-3" style={{ fontFamily: 'var(--mono)', color: 'var(--accent)' }}>
            // {t('about.role')}
          </div>
          <p className="text-sm max-w-130" style={{ color: 'var(--text2)', lineHeight: '1.8' }}>
            {t('about.desc')}
          </p>
          <div className="flex gap-3 flex-wrap ">
            <Badge borderColor="var(--accent)" color="var(--accent2)" >{t('about.badge.available')}</Badge>
            <Badge borderColor="var(--green)" color="var(--green)">{t('about.badge.remote')}</Badge>
            <Badge>{t('about.badge.country')}</Badge>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="section-label ">{t('about.aboutSection')}</div>
        <p className="text-sm" style={{ color: 'var(--text2)', maxWidth: '600px', lineHeight: '1.8', marginBottom: '32px' }}>
          {t('about.aboutDesc')}
        </p>

      {/* Skills */}
      <div className="section-label">Stack técnico</div>

      <div className="grid gap-5 mb-8">
        {skillGroups.map(group => {
          const GroupIcon = groupIcons[group.icon] || Server
          return (
            <div
              key={group.title}
              className="rounded-xl transition-all duration-300"
              style={{
                background: 'var(--bg1)',
                border: '1px solid var(--border)',
                padding: '16px 18px',
              }}
            >
              <div className="flex items-center gap-2" style={{ marginBottom: '12px' }}>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}
                >
                  <GroupIcon size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-xs font-semibold" style={{ fontFamily: 'var(--mono)', color: 'var(--text1)' }}>
                  {group.title}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 text-xs rounded-lg border transition-all duration-200"
                    style={{
                      fontFamily: 'var(--mono)',
                      background: 'color-mix(in srgb, ' + skill.color + ' 10%, transparent)',
                      borderColor: 'color-mix(in srgb, ' + skill.color + ' 30%, transparent)',
                      color: skill.color,
                      padding: '6px 12px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'color-mix(in srgb, ' + skill.color + ' 25%, transparent)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'color-mix(in srgb, ' + skill.color + ' 10%, transparent)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: skill.color }} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Soft Skills */}
      <div className="section-label">Soft Skills</div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {softSkills.map((s, i) => {
          const SIcon = softIcons[i] || Puzzle
          return (
            <div
              key={s.title}
              className="rounded-xl transition-all duration-300"
              style={{
                background: 'var(--bg1)',
                border: '1px solid var(--border)',
                padding: '16px 18px',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'color-mix(in srgb, var(--accent2) 15%, transparent)' }}
                >
                  <SIcon size={14} style={{ color: 'var(--accent2)' }} />
                </div>
                <span className="text-xs font-medium" style={{ color: 'var(--text1)' }}>
                  {s.title}
                </span>
              </div>
              <p className="text-[12px]" style={{ color: 'var(--text3)', lineHeight: '1.6' }}>
                {s.desc}
              </p>
            </div>
          )
        })}
      </div>

      {/* Quick Contact */}
      <div className="section-label">{t('about.contactSection')}</div>
      <div className="flex gap-[10px] flex-wrap">
        <QuickLink href="https://linkedin.com/in/tu-perfil" icon={<Globe size={14} style={{ color: 'var(--accent)' }} />} label="LinkedIn" />
        <QuickLink href="https://github.com/tu-usuario" icon={<Code2 size={14} />} label="GitHub" />
      </div>
    </div>
  )
}

function QuickLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-[13px] rounded-md border no-underline transition-all duration-200"
      style={{
        fontFamily: 'var(--mono)',
        background: 'var(--bg2)',
        borderColor: 'var(--border)',
        color: 'var(--text2)',
        padding: '8px 16px',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
    >
      {icon} {label}
    </a>
  )
}