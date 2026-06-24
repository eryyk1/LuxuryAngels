import { Link } from 'react-router-dom'
import { SALON_NAME, PHONE, PHONE_DISPLAY, ADDRESS, MAPS_URL, FACEBOOK_URL } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-gold-line" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo variant="footer" />
            <p className="footer-tagline mt-5">Prémium hajápolás · Budapest</p>
          </div>

          <div className="space-y-4 footer-links">
            <p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer-link">
                {ADDRESS}
              </a>
            </p>
            <p>
              <a href={`tel:${PHONE}`} className="footer-link">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="footer-link">
                Facebook
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <Link to="/#kapcsolat" className="btn-primary btn-primary-sm w-full md:w-auto text-center">
              Időpontfoglalás
            </Link>
            <a href={`tel:${PHONE}`} className="btn-outline btn-primary-sm w-full md:w-auto text-center">
              Hívás
            </a>
          </div>
        </div>

        <div className="divider-gold-wide mt-14 mb-7" />
        <p className="text-center footer-copyright">
          © 2026 {SALON_NAME} — Minden jog fenntartva
        </p>
      </div>
    </footer>
  )
}
