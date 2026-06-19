export default function EduItem({ item }) {
  return (
    <div
      className="flex gap-4"
      style={{ padding: '18px 0', borderBottom: '1px solid var(--border)' }}
    >
      <div
        className="text-[11px] min-w-[70px]"
        style={{ fontFamily: 'var(--mono)', color: 'var(--text3)', paddingTop: '2px' }}
      >
        {item.year}
      </div>
      <div>
        <h3 className="text-sm font-medium" style={{ color: 'var(--text1)', marginBottom: '4px' }}>
          {item.title}
        </h3>
        <p className="text-xs" style={{ color: 'var(--text2)' }}>
          {item.institution}
        </p>
        <div
          className="text-[10px]"
          style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', marginTop: '6px' }}
        >
          // {item.type}
        </div>
      </div>
    </div>
  )
}