import { Link } from 'react-router-dom'
import { SERVICES, PRODUCTS_UI_ENABLED } from '../data/content'
import PageHero, { BookingCTA } from '../components/PageHero'
import { ServiceCardLink } from '../components/GalleryShowcase'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Amit kínálok"
        title="Szolgáltatások"
        description="Hajhosszabbítás, póthaj, fodrászat, hajnövesztő kezelések — minden szolgáltatás személyre szabott konzultációval kezdődik."
      />

      <section className="section-padding px-4 sm:px-6 bg-gold-radial -mt-4 section-animate">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((s, i) => (
              <ServiceCardLink key={s.slug} service={s} index={i} className="p-6 md:p-10 lg:p-12" />
            ))}
          </div>

          <p className="text-center prose-luxury mt-14 max-w-lg mx-auto">
            Az árak egyedi konzultáció után, a haj állapota és a választott technika alapján kerülnek meghatározásra.
          </p>
        </div>
      </section>

      <BookingCTA />

      {PRODUCTS_UI_ENABLED && (
        <div className="text-center pb-16 px-4 section-animate">
          <Link to="/termekek" className="btn-outline">Termékek megtekintése</Link>
        </div>
      )}
    </>
  )
}
