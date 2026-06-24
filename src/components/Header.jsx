import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV, PRODUCTS_UI_ENABLED } from '../data/content'

function BookingLink({ className, onClick }) {
  return (
    <Link to="/#kapcsolat" className={className} onClick={onClick}>
      Időpontfoglalás
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const navItems = PRODUCTS_UI_ENABLED ? NAV : NAV.filter((item) => item.to !== '/termekek')

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50">
      <div className="header-gold-line" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[4.75rem] md:h-[5.25rem] flex items-center justify-between gap-4">
        <Link
          to="/"
          className="header-wordmark shrink-0 group"
          onClick={closeMenu}
        >
          <span className="header-wordmark-main">Luxury Angels</span>
          <span className="header-wordmark-sub">Salon</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 nav-luxury">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-luxury-link${isActive && !item.to.includes('#') ? ' nav-luxury-link-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BookingLink className="btn-primary btn-primary-sm hidden md:inline-flex" />

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-gold-rich"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden px-4 sm:px-6 pb-5 flex flex-col gap-1 border-t border-gold/25 pt-3 bg-champagne/98 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className="py-3.5 text-sm tracking-[0.14em] uppercase text-text-primary hover:text-gold-rich transition-colors border-b border-gold/15 last:border-0 font-medium"
            >
              {item.label}
            </Link>
          ))}
          <BookingLink className="btn-primary w-full text-center mt-4" onClick={closeMenu} />
        </nav>
      )}
    </header>
  )
}
