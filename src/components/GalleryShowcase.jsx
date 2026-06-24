import { Link } from 'react-router-dom'
import MobileCollapsible from './MobileCollapsible'

function GalleryPair({ beforeImage, afterImage, featured = false }) {
  return (
    <article className={`ba-pair group section-animate ${featured ? 'ba-pair-featured' : ''}`}>
      <div className="ba-pair-grid">
        <div className="ba-pair-half">
          <span className="ba-pair-label">Előtte</span>
          <img
            src={beforeImage}
            alt="Előtte"
            className="ba-pair-img"
            loading="lazy"
          />
          <div className="ba-pair-shimmer" aria-hidden="true" />
        </div>
        <div className="ba-pair-divider" aria-hidden="true" />
        <div className="ba-pair-half">
          <span className="ba-pair-label">Utána</span>
          <img
            src={afterImage}
            alt="Utána"
            className="ba-pair-img"
            loading="lazy"
          />
          <div className="ba-pair-shimmer" aria-hidden="true" />
        </div>
      </div>
    </article>
  )
}

export default function BeforeAfterGallery({ items }) {
  const [featured, ...rest] = items

  return (
    <div className="ba-gallery">
      {featured && (
        <GalleryPair
          beforeImage={featured.beforeImage}
          afterImage={featured.afterImage}
          featured
        />
      )}
      {rest.length > 0 && (
        <MobileCollapsible toggleLabel="További referenciák" collapseLabel="Kevesebb">
          <div className="ba-gallery-grid">
            {rest.map((item) => (
              <GalleryPair
                key={item.id}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
            ))}
          </div>
        </MobileCollapsible>
      )}
    </div>
  )
}

export function ServiceCardLink({ service, index, className = '' }) {
  return (
    <Link
      to={`/szolgaltatasok/${service.slug}`}
      className={`card-luxury card-luxury-link p-6 md:p-10 group rounded-sm block ${className}`}
    >
      <div className="gold-line mb-6" />
      <span className="card-number mb-3 block">0{index + 1}</span>
      <h3 className="font-serif text-2xl md:text-[1.75rem] mb-3 text-text-primary group-hover:text-gold-rich transition-colors duration-300">
        {service.title}
      </h3>
      <p className="prose-luxury mb-6">{service.desc}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] uppercase text-gold-rich">
        Részletek
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
