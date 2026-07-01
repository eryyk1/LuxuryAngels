import { Link } from 'react-router-dom'

const COURSE_PROMO_IMAGE = '/photos/tanfolyam1.jpg'

export default function MobileCoursePromo() {
  return (
    <section
      className="mobile-course-promo md:hidden px-4 py-8 section-animate"
      aria-label="Hajhosszabbító képzés"
    >
      <div className="mobile-course-promo-card rounded-sm">
        <div
          className="mobile-course-promo-bg"
          style={{ backgroundImage: `url(${COURSE_PROMO_IMAGE})` }}
          aria-hidden="true"
        />
        <div className="mobile-course-promo-overlay" aria-hidden="true" />
        <div className="mobile-course-promo-shimmer" aria-hidden="true" />

        <div className="mobile-course-promo-content">
          <p className="section-label section-label-light mb-3">Oktatás</p>
          <h2 className="font-serif text-2xl text-pearl mb-3 leading-tight">
            Hajhosszabbító képzés
          </h2>
          <p className="text-pearl/90 text-sm leading-relaxed mb-5">
            Szeretnél professzionális hajhosszabbítóvá válni?
            Ismerd meg egyéni és csoportos képzéseimet, ahol 4 különböző technikát
            sajátíthatsz el gyakorlati oktatás keretében.
          </p>
          <Link to="/tanfolyam" className="btn-primary w-full text-center">
            Tovább a tanfolyamhoz
          </Link>
        </div>
      </div>
    </section>
  )
}
