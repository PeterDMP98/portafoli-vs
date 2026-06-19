import { useState } from 'react'
import { ChevronRight, ChevronDown, Folder } from 'lucide-react'
import FileItem from './FileItem'

export default function FolderComponent({ folder, forceOpen }) {
  const [open, setOpen] = useState(forceOpen || (folder.defaultOpen ?? false))

  return (
    <div>
      <button
        className="flex items-center gap-1 w-full px-4 py-1 text-xs cursor-pointer border-none text-left transition-colors"
        style={{
          fontFamily: 'var(--mono)',
          color: 'var(--text2)',
          background: 'transparent',
        }}
        onClick={() => setOpen(!open)}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--text1)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text2)' }}
      >
        {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        <Folder size={14} style={{ color: '#D7BA7D' }} />
        <span>{folder.label}</span>
      </button>
      {open && (
        <div style={{ marginLeft: '8px', padding: '4px 0' }}>
          {folder.files.map(file => (
            <FileItem key={file.id} file={file} />
          ))}
        </div>
      )}
    </div>
  )
}
