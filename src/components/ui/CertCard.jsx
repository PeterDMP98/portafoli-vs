import { Award } from 'lucide-react'

export default function CertCard({ cert }) {
  return (
    <div
      className="flex flex-col rounded-lg"
      style={{
        background: 'var(--bg1)',
        border: '1px solid var(--border)',
        borderLeft: `3px solid ${cert.color}`,
        padding: '16px 18px',
      }}
    >
      <div className="flex justify-between items-center" style={{ marginBottom: '6px' }}>
        <div className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--text1)' }}>
          <Award size={14} style={{ color: cert.color }} />
          {cert.name}
        </div>
        <span className="text-[11px]" style={{ fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
          {cert.year}
        </span>
      </div>
      <div className="text-xs" style={{ color: 'var(--text2)' }}>
        {cert.issuer}
      </div>
    </div>
  )
}