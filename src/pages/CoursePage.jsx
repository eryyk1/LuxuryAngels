import { FACEBOOK_URL } from '../data/content'
import { PAGE_SEO, buildBreadcrumbSchema, buildCourseSchema } from '../data/seo'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import SectionHeader from '../components/SectionHeader'
import CourseGallery from '../components/CourseGallery'

const TECHNIQUES = [
  'Nano gyűrű',
  'Mikro gyűrű',
  'Hőillesztés',
  'Nano kapszulás hőillesztés',
]

const TRAINING_TOPICS = [
  'Tincsek készítése',
  'Tincsek felhelyezése',
  'Tincsek leszedése',
  'Tökéletes választék készítése',
  'Tincsek precíz elosztása',
  'Alap hajvágási technika',
  'Kezdő szett használata',
  'Oklevél a képzés végén',
  'Támogatás a tanfolyam után is',
]

const GROUP_PRICING = [
  { label: 'Időtartam', value: '3 egymást követő nap' },
  { label: 'Időpont', value: '10:00–16:00' },
  { label: 'Maximum létszám', value: '7–8 fő' },
  { label: 'Jelentkezési díj', value: '25.000 Ft' },
  { label: '1. nap díja', value: '100.000 Ft' },
  { label: 'Szintfelmérő napján fizetendő', value: '65.000 Ft' },
  { label: 'Teljes tanfolyam ára', value: '190.000 Ft' },
]

const INDIVIDUAL_PRICING = [
  { label: 'Időtartam', value: '2 nap' },
  { label: 'Időpont', value: '10:00–15:00' },
  { label: 'Jelentkezési díj', value: '25.000 Ft' },
  { label: 'Teljes ár', value: '250.000 Ft' },
  { text: 'Csak ketten vagyunk' },
  { text: 'A tanuló saját tempójában haladunk' },
  { text: 'Minden tudást személyre szabottan adok át' },
]

const WHY_APPLY = [
  'Gyakorlatorientált oktatás',
  '4 hajhosszabbító technika egy képzésen',
  'Kis létszámú vagy egyéni oktatás',
  'Kezdő szett és oklevél',
  'Támogatás a tanfolyam után is',
  '18. kerületi szalonban',
]

function PricingCard({ title, subtitle, rows, featured = false }) {
  return (
    <article className={`card-luxury p-6 md:p-10 rounded-sm flex flex-col h-full ${featured ? 'course-pricing-card-featured' : ''}`}>
      <div className="gold-line mb-6" />
      <p className="section-label mb-3">{subtitle}</p>
      <h3 className="font-serif text-2xl md:text-[1.75rem] text-text-primary mb-6">{title}</h3>
      <ul className="course-pricing-list flex-grow">
        {rows.map((row) => (
          <li key={row.label || row.text} className={`course-pricing-row${row.text ? ' course-pricing-row-note' : ''}`}>
            {row.text ? (
              <span className="course-pricing-note">{row.text}</span>
            ) : (
              <>
                <span className="course-pricing-label">{row.label}</span>
                <span className="course-pricing-value">{row.value}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function CoursePage() {
  const seo = PAGE_SEO.course

  return (
    <>
      <PageMeta
        title={seo.title}
        description={seo.description}
        path={seo.path}
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Főoldal', path: '/' },
            { name: 'Hajhosszabbító képzés', path: '/tanfolyam' },
          ]),
          buildCourseSchema(),
        ]}
      />

      <PageHero
        label="PH Luxury Angels Salon · Polgár Hajnalka"
        title="Hajhosszabbító képzés"
        description="Választható egyéni és csoportos hajhosszabbító képzés a 18. kerületi szalonban. A képzés célja, hogy a tanulók magabiztosan el tudjanak indulni a saját útjukon, gyakorlati tudással és szakmai támogatással."
      />

      <section className="section-padding px-4 sm:px-6 bg-gold-radial section-animate">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Képzés pillanatai" title="A tanfolyam hangulata" />
          <CourseGallery />
        </div>
      </section>

      <div className="section-divider mx-4 sm:mx-6" aria-hidden="true" />

      <section className="section-padding px-4 sm:px-6 section-animate">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Technikák" title="Mit tanulsz meg?" />
          <p className="prose-luxury text-center max-w-2xl mx-auto -mt-8 mb-10 md:mb-12">
            Az oktatáson 4 hajhosszabbító technikát tanítok meg:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {TECHNIQUES.map((technique) => (
              <div key={technique} className="course-technique-card rounded-sm">
                <span className="course-technique-icon" aria-hidden="true">✦</span>
                <p className="font-serif text-lg md:text-xl text-text-primary text-center leading-snug">
                  {technique}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-4 sm:px-6 bg-cream section-animate gold-accent-top">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Tananyag" title="Mit tartalmaz a képzés?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {TRAINING_TOPICS.map((topic) => (
              <div key={topic} className="course-topic-item">
                <span className="course-topic-icon" aria-hidden="true">✦</span>
                <span className="text-base text-text-primary">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-4 sm:px-6 section-animate">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Árak" title="Képzési csomagok" />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <PricingCard
              title="Csoportos képzés"
              subtitle="Csoportos tanfolyam"
              rows={GROUP_PRICING}
            />
            <PricingCard
              title="Egyéni képzés"
              subtitle="Személyre szabott oktatás"
              rows={INDIVIDUAL_PRICING}
              featured
            />
          </div>
        </div>
      </section>

      <section className="section-padding px-4 sm:px-6 bg-gold-radial section-animate">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Előnyök" title="Miért érdemes jelentkezni?" />
          <ul className="service-list max-w-2xl mx-auto">
            {WHY_APPLY.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-10 md:py-20 section-animate">
        <div className="max-w-4xl mx-auto text-center booking-cta-strip rounded-sm px-6 py-10 md:px-8 md:py-14 relative z-10">
          <p className="section-label mb-4">Jelentkezés</p>
          <h2 className="font-serif text-2xl md:text-[2rem] text-text-primary mb-4">
            Jelentkezés a tanfolyamra
          </h2>
          <p className="text-text-muted text-base mb-8 max-w-md mx-auto leading-relaxed">
            A jelentkezés Facebook privát üzenetben történik. Írj üzenetet, és minden részletet egyeztetünk.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Jelentkezés Facebook üzenetben
          </a>
        </div>
      </section>
    </>
  )
}
