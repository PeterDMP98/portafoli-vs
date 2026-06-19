export default function Badge({ children, color, borderColor }) {
  return (
    <span
      className="inline-flex items-center text-[11px] rounded-full px-[10px] py-[3px] border"
      style={{
        fontFamily: 'var(--mono)',
        background: 'var(--bg2)',
        borderColor: borderColor || 'var(--border)',
        color: color || 'var(--text2)',
        padding: '1px 8px',
        marginTop: '7px',
      }}
    >
      {children}
    </span>
  )
}
