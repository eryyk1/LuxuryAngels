import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

export default function PageHero({ label, title, description }) {
  return (
    <section className="page-hero pt-24 md:pt-32 pb-12 md:pb-20 px-6 relative overflow-hidden">
      <div className="hero-shimmer" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <SectionHeader label={label} title={title} light as="h1" />
        {description && (
          <p className="text-pearl/95 text-base md:text-lg leading-relaxed tracking-wide max-w-xl mx-auto -mt-6">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

export function BookingCTA({ className = '' }) {
  return (
    <section className={`px-6 py-10 md:py-20 section-animate ${className}`}>
      <div className="max-w-4xl mx-auto text-center booking-cta-strip rounded-sm px-6 py-10 md:px-8 md:py-14 relative z-10">
        <p className="section-label mb-4">Ingyenes konzultáció</p>
        <h2 className="font-serif text-2xl md:text-[2rem] text-text-primary mb-4">
          Foglald le időpontodat
        </h2>
        <p className="text-text-muted text-base mb-8 max-w-md mx-auto leading-relaxed">
          Írj vagy hívj — 24 órán belül visszajelzek a szabad időpontokkal.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
          <Link to="/#kapcsolat" className="btn-primary">
            Időpontfoglalás
          </Link>
          <a href="tel:+36205540430" className="btn-outline">
            Hívás most
          </a>
        </div>
      </div>
    </section>
  )
}
