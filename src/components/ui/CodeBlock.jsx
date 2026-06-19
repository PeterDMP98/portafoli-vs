export default function CodeBlock({ code, lang }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-wider uppercase mb-4 flex items-center gap-2"
        style={{ fontFamily: 'var(--mono)', color: 'var(--text3)' }}
      >
        {lang}
      </div>
      <pre
        className="rounded-lg p-5 overflow-x-auto text-xs leading-relaxed"
        style={{
          fontFamily: 'var(--mono)',
          background: 'var(--bg1)',
          border: '1px solid var(--border)',
          color: 'var(--text2)',
          lineHeight: '1.8',
        }}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </div>
  )
}
