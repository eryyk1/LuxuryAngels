import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SERVICES, PRODUCTS, TESTIMONIALS, GALLERY,
  ABOUT, SALON_EXPERIENCE, TRUST_STATS, TRUST_BADGES,
  SALON_TAGLINE, SALON_LOCATION, PHONE, PHONE_DISPLAY, ADDRESS, MAPS_URL, FACEBOOK_URL,
  PRODUCTS_UI_ENABLED,
} from '../data/content'
import Logo from '../components/Logo'
import SectionHeader from '../components/SectionHeader'
import BeforeAfterGallery, { ServiceCardLink } from '../components/GalleryShowcase'
import AboutPortrait from '../components/AboutPortrait'
import ImagePlaceholder from '../components/ImagePlaceholder'
import PremiumBooking from '../components/PremiumBooking'

function SectionOrnament() {
  return (
    <div className="section-divider-ornament px-4 sm:px-6" aria-hidden="true">
      <span className="section-divider-diamond" />
    </div>
  )
}

export default function HomePage() {
  const [form, setForm] = useState(() => {
    const product = sessionStorage.getItem('inquiryProduct')
    if (product) {
      sessionStorage.removeItem('inquiryProduct')
      return { name: '', email: '', phone: '', message: `Érdekel: ${product}` }
    }
    return { name: '', email: '', phone: '', message: '' }
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-gold relative min-h-[90svh] md:min-h-[92svh] flex items-center pt-[5.25rem] overflow-hidden">
        <div className="hero-shimmer" aria-hidden="true" />
        <div className="hero-gold-frame hidden md:block" aria-hidden="true" />
        <div className="hero-gold-corner hero-gold-corner-tl hidden md:block" aria-hidden="true" />
        <div className="hero-gold-corner hero-gold-corner-tr hidden md:block" aria-hidden="true" />
        <div className="hero-gold-corner hero-gold-corner-bl hidden md:block" aria-hidden="true" />
        <div className="hero-gold-corner hero-gold-corner-br hidden md:block" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-16 items-center">
            <div className="text-center lg:text-left section-animate">
              <p className="section-label mb-5">{SALON_TAGLINE}</p>
              <h1 className="font-serif text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-normal leading-[1.06] mb-6 text-text-primary">
                A hajad,{' '}
                <span className="text-gold-rich italic">újraélesztve</span>
              </h1>
              <p className="prose-luxury max-w-md mx-auto lg:mx-0 mb-8 text-base md:text-lg">
                Hajhosszabítás, hajpótlás és személyre szabott ápolás — diszkrét, elegáns környezetben, {SALON_LOCATION}.
              </p>

              <div className="trust-badge mb-8 mx-auto lg:mx-0 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Ingyenes első konzultáció
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#kapcsolat" className="btn-primary">Időpontot kérek</a>
                {PRODUCTS_UI_ENABLED && (
                  <Link to="/termekek" className="btn-outline">Termékek</Link>
                )}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 section-animate">
              <Logo variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick trust strip ── */}
      <section className="border-y border-gold/25 bg-gold-blush px-4 sm:px-6 py-14 section-animate gold-accent-top">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {TRUST_STATS.slice(0, 3).map((item) => (
            <div key={item.label} className="stat-pill text-center rounded-sm">
              <p className="experience-card-value text-3xl mb-1">{item.value}</p>
              <p className="text-sm text-text-muted font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionOrnament />

      {/* ── About Polgár Hajnalka ── */}
      <section id="rolam" className="section-padding px-4 sm:px-6 about-section section-animate">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-28">
              <AboutPortrait />
            </div>

            <div className="lg:col-span-7">
              <p className="section-label mb-4">A szalon mögött</p>
              <h2 className="section-title mb-3 text-left">{ABOUT.name}</h2>
              <p className="text-gold-rich font-medium text-lg mb-6 tracking-wide">{ABOUT.role}</p>

              <div className="about-intro-card rounded-sm mb-8">
                <p className="prose-luxury text-lg mb-5 leading-relaxed">{ABOUT.intro}</p>
                <p className="prose-luxury leading-relaxed">{ABOUT.story}</p>
              </div>

              <a href="#kapcsolat" className="btn-primary mb-10 inline-flex">
                Időpontot kérek
              </a>

              <div className="gold-line mb-6" />
              <h3 className="font-serif text-2xl text-text-primary mb-6">Szakmai fókusz</h3>
              <ul className="expertise-list">
                {ABOUT.expertise.map((item) => (
                  <li key={item} className="expertise-item">
                    <span className="text-base text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-4 sm:mx-6" aria-hidden="true" />

      {/* ── Salon Experience ── */}
      <section className="section-padding px-4 sm:px-6 bg-gold-soft section-animate">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Az élmény"
            title="Luxury Angels Salon"
          />
          <p className="prose-luxury text-center max-w-2xl mx-auto -mt-8 mb-14 md:mb-16 text-lg">
            Több mint szolgáltatás — egy gondosan megtervezett szépségélmény,
            ahol minden részlet az Ön kényelmét és bizalmát szolgálja.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {SALON_EXPERIENCE.map((item) => (
              <article key={item.number} className="salon-exp-card rounded-sm">
                <span className="salon-exp-number">{item.number}</span>
                <h3 className="font-serif text-2xl text-text-primary mb-3">{item.title}</h3>
                <p className="prose-luxury">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionOrnament />

      {/* ── Services preview ── */}
      <section className="section-padding px-4 sm:px-6 bg-gold-radial section-animate">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Amit kínálok" title="Szolgáltatások" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {SERVICES.slice(0, 3).map((s, i) => (
              <ServiceCardLink key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/szolgaltatasok" className="btn-outline">Összes szolgáltatás</Link>
          </div>
        </div>
      </section>

      {/* ── Trust & Authority ── */}
      <section className="section-padding px-4 sm:px-6 section-animate">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Bizalom & minőség" title="Miért bíznak bennem?" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="experience-card rounded-sm">
                <p className="experience-card-value">{stat.value}</p>
                <p className="experience-card-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.title} className="trust-badge-card rounded-sm">
                <div className="w-10 h-10 mx-auto mb-4 border border-gold/35 rotate-45 flex items-center justify-center">
                  <span className="-rotate-45 text-gold-rich text-lg">✦</span>
                </div>
                <p className="trust-badge-card-title">{badge.title}</p>
                <p className="trust-badge-card-desc">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-4 sm:mx-6" aria-hidden="true" />

      {/* ── Before & After Showcase ── */}
      <section id="referenciak" className="section-padding bg-cream px-4 sm:px-6 section-animate gold-accent-top">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Eredmények" title="Előtte & Utána" />
          <BeforeAfterGallery items={GALLERY} />
        </div>
      </section>

      {PRODUCTS_UI_ENABLED && (
        <>
          <SectionOrnament />

          {/* ── Products preview ── */}
          <section className="section-padding px-4 sm:px-6 bg-gold-blush section-animate">
            <div className="max-w-6xl mx-auto">
              <SectionHeader label="Otthoni ápolás" title="Kiemelt termékek" />
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-3xl mx-auto">
                {PRODUCTS.slice(0, 2).map((p) => (
                  <article key={p.name} className="card-luxury p-6 md:p-8 flex flex-col group rounded-sm">
                    <ImagePlaceholder label="Termékfotó" aspect="aspect-square" className="mb-5 rounded-sm" />
                    {p.tag && <span className="product-tag mb-2">{p.tag}</span>}
                    <h3 className="font-serif text-xl mb-1 text-text-primary flex-grow">{p.name}</h3>
                    <p className="text-gold-rich font-semibold tracking-wide text-base">{p.price}</p>
                  </article>
                ))}
              </div>
              <div className="text-center">
                <Link to="/termekek" className="btn-outline">Összes termék</Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── Testimonials ── */}
      <section className="section-padding px-4 sm:px-6 section-animate">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Vendégeim mondták" title="Vélemények" />
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="card-luxury p-8 rounded-sm relative">
                <div className="absolute top-0 left-8 w-10 h-0.5 bg-gradient-to-r from-gold-rich to-gold-light" />
                <p className="font-serif text-lg md:text-xl italic text-text-primary leading-relaxed mb-6 pt-4">
                  „{t.text}"
                </p>
                <footer className="testimonial-author">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium Booking Experience ── */}
      <PremiumBooking />

      {/* ── Contact ── */}
      <section id="kapcsolat" className="section-padding contact-section px-4 sm:px-6 section-animate">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 relative z-10">
          <div className="text-pearl lg:pr-4">
            <p className="section-label section-label-light mb-4">Kapcsolat</p>
            <h2 className="font-serif text-3xl md:text-[2.75rem] font-normal mb-8 text-pearl">Időpontkérés</h2>
            <p className="text-pearl/90 leading-relaxed mb-10 text-base md:text-lg">
              Írj nekem, és 24 órán belül visszajelzek a szabad időpontokkal.
              Az első konzultáció ingyenes — beszéljük meg, mit szeretnél elérni.
            </p>
            <ul className="space-y-5">
              <li>
                <span className="contact-label">Cím</span>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="contact-detail">
                  {ADDRESS}
                </a>
              </li>
              <li>
                <span className="contact-label">Telefon</span>
                <a href={`tel:${PHONE}`} className="contact-detail">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <span className="contact-label">Közösségi</span>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="contact-detail">
                  Facebook oldal
                </a>
              </li>
            </ul>
          </div>

          {submitted ? (
            <div className="contact-card flex items-center justify-center p-12 text-center rounded-sm">
              <div>
                <p className="font-serif text-2xl md:text-3xl text-gold-rich mb-3">Köszönöm!</p>
                <p className="prose-luxury">Hamarosan felveszem Önnel a kapcsolatot.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-card p-8 md:p-10 space-y-4 rounded-sm">
              {['name', 'email', 'phone'].map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  placeholder={field === 'name' ? 'Név' : field === 'email' ? 'E-mail' : 'Telefonszám'}
                  required={field !== 'phone'}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="input-gold"
                />
              ))}
              <textarea
                placeholder="Üzenet — milyen szolgáltatás érdekel?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-gold resize-none"
              />
              <button type="submit" className="btn-primary w-full">Üzenet küldése</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
