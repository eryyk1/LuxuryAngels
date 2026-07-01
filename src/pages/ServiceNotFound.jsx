import { Link } from 'react-router-dom'
import { SERVICES } from '../data/content'
import { PAGE_SEO } from '../data/seo'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'

export default function ServiceNotFound() {
  const seo = PAGE_SEO.notFound

  return (
    <>
      <PageMeta
        title={seo.title}
        description={seo.description}
        noindex={seo.noindex}
      />

      <PageHero
        label="Szolgáltatás"
        title="A keresett szolgáltatás nem található"
        description="Lehet, hogy a link elavult. Válasszon a szolgáltatásaink közül, vagy foglaljon időpontot."
      />
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2 section-animate" aria-label="Szolgáltatás navigáció">
        <Link to="/szolgaltatasok" className="service-back-link btn-outline">
          <span className="service-back-link-arrow" aria-hidden="true">←</span>
          Vissza a szolgáltatásokhoz
        </Link>
      </nav>
      <section className="section-padding px-4 sm:px-6 section-animate">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/szolgaltatasok/${s.slug}`}
                className="card-luxury card-luxury-link p-6 rounded-sm group block text-center"
              >
                <h2 className="font-serif text-xl text-text-primary group-hover:text-gold-rich transition-colors mb-2">
                  {s.shortTitle}
                </h2>
                <span className="text-sm font-semibold tracking-[0.12em] uppercase text-gold-rich">
                  Megtekintés →
                </span>
              </Link>
            ))}
          </div>
          <Link to="/szolgaltatasok" className="btn-outline mr-3">Összes szolgáltatás</Link>
          <Link to="/#kapcsolat" className="btn-primary">Időpontot kérek</Link>
        </div>
      </section>
    </>
  )
}
