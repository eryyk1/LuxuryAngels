import { Link, useParams } from 'react-router-dom'
import { getServiceBySlug, SERVICES } from '../data/content'
import PageHero, { BookingCTA } from '../components/PageHero'
import { ServicePricing } from '../components/ServicePricing'
import ServiceNotFound from './ServiceNotFound'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? getServiceBySlug(slug) : null

  if (!service) {
    return <ServiceNotFound />
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug)
  const pricingSections = service.pricingSections ?? []
  const pricingNotes = service.pricingNotes ?? []
  const hasPricingTable = pricingSections.some((s) => s.rows?.length > 0)

  return (
    <>
      <PageHero
        label="Szolgáltatás"
        title={service.title}
        description={service.desc}
      />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2 section-animate" aria-label="Szolgáltatás navigáció">
        <Link to="/szolgaltatasok" className="service-back-link btn-outline">
          <span className="service-back-link-arrow" aria-hidden="true">←</span>
          Vissza a szolgáltatásokhoz
        </Link>
      </nav>

      {/* Overview + accent */}
      <section className="section-padding px-4 sm:px-6 bg-gold-radial section-animate">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className={service.image ? 'lg:col-span-7' : 'lg:col-span-12 max-w-4xl mx-auto'}>
              <p className="section-label mb-4">Részletes leírás</p>
              <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
                {service.shortTitle}
              </h2>
              <p className="prose-luxury text-lg leading-relaxed mb-6">{service.overview}</p>
              {service.detail && (
                <p className="prose-luxury leading-relaxed">{service.detail}</p>
              )}
            </div>
            {service.image && (
              <div className="lg:col-span-5">
                <div className="service-detail-accent" aria-hidden="true">
                  <div className="service-detail-accent-glow" />
                  <div className="service-detail-accent-pattern" />
                  <div className="service-detail-accent-inner">
                    <span className="service-detail-accent-icon">✦</span>
                    <div className="divider-gold my-6 mx-auto w-16" />
                    <p className="font-serif text-xl md:text-2xl text-gold-rich text-center px-6 leading-snug">
                      {service.shortTitle}
                    </p>
                    <div className="service-detail-accent-sparkle" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {service.forWho?.length > 0 && (
            <div className="service-highlight-card rounded-sm mt-12 max-w-3xl">
              <p className="section-label mb-4">Kinek ajánlom?</p>
              <ul className="service-list">
                {service.forWho.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <div className="section-divider mx-4 sm:mx-6" aria-hidden="true" />

      {/* Includes */}
      {service.includes?.length > 0 && (
        <section className="section-padding px-4 sm:px-6 section-animate">
          <div className="max-w-6xl mx-auto">
            <SectionBlock label="Tartalom" title="Mit tartalmaz a kezelés?" />
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {service.includes.map((item) => (
                <div key={item} className="expertise-item">
                  <span className="text-base text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process?.length > 0 && (
        <>
          <div className="section-divider mx-4 sm:mx-6" aria-hidden="true" />
          <section className="section-padding px-4 sm:px-6 bg-gold-soft section-animate">
            <div className="max-w-6xl mx-auto">
              <SectionBlock label="Folyamat" title="Hogyan zajlik?" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.process.map((step) => (
                  <article key={step.step} className="salon-exp-card rounded-sm">
                    <span className="salon-exp-number">{step.step}</span>
                    <h3 className="font-serif text-xl text-text-primary mb-2">{step.title}</h3>
                    <p className="prose-luxury text-base">{step.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Benefits */}
      {service.benefits?.length > 0 && (
        <>
          <div className="section-divider mx-4 sm:mx-6" aria-hidden="true" />
          <section className="section-padding px-4 sm:px-6 section-animate">
            <div className="max-w-6xl mx-auto">
              <SectionBlock label="Előnyök" title="Miért érdemes?" />
              <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="expertise-item">
                    <span className="text-base text-text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Pricing */}
      <section className="section-padding px-4 sm:px-6 bg-gold-blush section-animate">
        <div className="max-w-6xl mx-auto">
          <SectionBlock label="Árak" title="Árlista" />
          {hasPricingTable ? (
            <ServicePricing sections={pricingSections} notes={pricingNotes} />
          ) : (
            <div className="pricing-consultation-box rounded-sm max-w-2xl mx-auto text-center">
              <p className="font-serif text-2xl text-text-primary mb-4">Személyre szabott árajánlat</p>
              <p className="prose-luxury mb-6">
                Ennél a szolgáltatásnál az ár egyedi konzultáció után kerül meghatározásra,
                a haj állapota és igényei alapján.
              </p>
              {pricingNotes.length > 0 && (
                <ul className="pricing-notes text-left mb-6">
                  {pricingNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <div className="text-center mt-10">
            <Link to="/#kapcsolat" className="btn-primary">
              Időpontot kérek
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section-padding px-4 sm:px-6 section-animate">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Konzultáció</p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-6">
            Foglaljon időpontot
          </h2>
          <p className="prose-luxury text-lg mb-8">{service.consultation}</p>
          <Link to="/#kapcsolat" className="btn-primary">
            Időpontot kérek
          </Link>
        </div>
      </section>

      <BookingCTA />

      {/* Other services */}
      <section className="section-padding px-4 sm:px-6 pb-16 section-animate">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-center mb-8">További szolgáltatások</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/szolgaltatasok/${s.slug}`}
                className="card-luxury card-luxury-link p-6 rounded-sm group block text-center"
              >
                <h3 className="font-serif text-lg text-text-primary group-hover:text-gold-rich transition-colors mb-2">
                  {s.shortTitle}
                </h3>
                <span className="text-sm font-semibold tracking-[0.12em] uppercase text-gold-rich">
                  Megtekintés →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function SectionBlock({ label, title }) {
  return (
    <div className="text-center mb-12 md:mb-14">
      <p className="section-label mb-4">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className="divider-gold mx-auto mt-6" />
    </div>
  )
}
