import { useState } from 'react'

export default function PricingInfoAccordion({ intro, full }) {
  const [open, setOpen] = useState(false)
  const paragraphs = full.split('\n\n').filter(Boolean)

  return (
    <div className={`pricing-info-accordion${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="pricing-info-accordion-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="pricing-info-accordion-intro">{intro}</span>
        <span className="pricing-info-accordion-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="pricing-info-accordion-panel">
        <div className="pricing-info-accordion-content">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="prose-luxury">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
