import { Link } from 'react-router-dom'
import { BOOKING_STEPS, PHONE } from '../data/content'
import MobileCollapsible from './MobileCollapsible'

export default function PremiumBooking() {
  return (
    <section className="section-padding px-4 sm:px-6 section-animate">
      <div className="max-w-6xl mx-auto">
        <div className="premium-booking">
          <div className="premium-booking-glow" aria-hidden="true" />
          <div className="premium-booking-inner">
            <div className="text-center mb-8 md:mb-16">
              <p className="section-label section-label-light mb-4">Exkluzív időpontfoglalás</p>
              <h2 className="font-serif text-3xl md:text-[2.75rem] text-pearl mb-4 md:mb-5 leading-tight">
                Kezdjük egy személyes konzultációval
              </h2>
              <p className="text-pearl/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Az első találkozó ingyenes és kötelezettségmentes. Együtt tervezzük meg,
                hogyan érhetjük el álmai frizuráját — diszkrét, prémium környezetben.
              </p>
            </div>

            <MobileCollapsible toggleLabel="Foglalási lépések" collapseLabel="Kevesebb">
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                {BOOKING_STEPS.map((item) => (
                  <div key={item.step} className="booking-step">
                    <span className="booking-step-number">{item.step}</span>
                    <h3 className="font-serif text-xl text-pearl mb-2">{item.title}</h3>
                    <p className="text-pearl/85 text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </MobileCollapsible>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/#kapcsolat" className="btn-primary">
                Privát konzultáció kérése
              </Link>
              <a href={`tel:${PHONE}`} className="btn-outline-light">
                Telefonos egyeztetés
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
