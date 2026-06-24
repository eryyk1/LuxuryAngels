import { useState } from 'react'

/**
 * Collapses content on viewports below 768px. Always fully expanded on desktop.
 */
export default function MobileCollapsible({
  children,
  toggleLabel = 'Tovább',
  collapseLabel = 'Kevesebb',
  preview = null,
  className = '',
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`mobile-collapsible${open ? ' mobile-collapsible-open' : ''} ${className}`.trim()}>
      {preview && <div className="mobile-collapsible-preview">{preview}</div>}
      <div className="mobile-collapsible-body">{children}</div>
      <button
        type="button"
        className="mobile-collapsible-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? collapseLabel : toggleLabel}
      </button>
    </div>
  )
}
