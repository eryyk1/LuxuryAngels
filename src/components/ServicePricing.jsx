export function PricingTable({ title, subtitle, rows }) {
  if (!rows?.length) return null

  return (
    <div className="pricing-block">
      {title && <h3 className="pricing-block-title">{title}</h3>}
      {subtitle && <p className="pricing-block-subtitle">{subtitle}</p>}
      <div className="pricing-table rounded-sm">
        {rows.map((row) => (
          <div key={`${row.name}-${row.price}`} className="pricing-row">
            <span className="pricing-name">{row.name}</span>
            <span className="pricing-value">{row.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ServicePricing({ sections, notes = [] }) {
  return (
    <div className="pricing-sections">
      {sections.map((section, i) => (
        <PricingTable
          key={section.title || `section-${i}`}
          title={section.title}
          subtitle={section.subtitle}
          rows={section.rows}
        />
      ))}
      {notes.length > 0 && (
        <ul className="pricing-notes">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
