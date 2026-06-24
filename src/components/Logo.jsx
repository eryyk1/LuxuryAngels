import logoPng from '../assets/logo.png'
import { SALON_NAME } from '../data/content'

const logoMaskStyle = { '--logo-mask': `url(${logoPng})` }

function LogoSparkles() {
  return (
    <>
      <span className="logo-sparkle logo-sparkle-a" aria-hidden="true" />
      <span className="logo-sparkle logo-sparkle-b" aria-hidden="true" />
      <span className="logo-sparkle logo-sparkle-c" aria-hidden="true" />
    </>
  )
}

export default function Logo({ variant = 'header', className = '' }) {
  if (variant === 'hero') {
    return (
      <div className={`logo-hero ${className}`} style={logoMaskStyle}>
        <div className="logo-hero-aura" aria-hidden="true" />
        <div className="logo-hero-glow" aria-hidden="true" />
        <div className="logo-hero-radiance" aria-hidden="true" />
        <div className="logo-hero-frame">
          <div className="logo-hero-stage">
            <div className="logo-hero-spotlight" aria-hidden="true" />
            <img
              src={logoPng}
              alt={SALON_NAME}
              className="logo-hero-img"
              width={1024}
              height={719}
              draggable={false}
            />
            <div className="logo-shine logo-shine-hero" aria-hidden="true" />
            <LogoSparkles />
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={`logo-footer ${className}`} style={logoMaskStyle}>
        <div className="logo-footer-stage">
          <img
            src={logoPng}
            alt={SALON_NAME}
            className="logo-footer-img"
            width={1024}
            height={719}
            draggable={false}
          />
          <div className="logo-shine logo-shine-footer" aria-hidden="true" />
        </div>
      </div>
    )
  }

  return (
    <div className={`logo-header ${className}`} style={logoMaskStyle}>
      <img
        src={logoPng}
        alt={SALON_NAME}
        className="logo-header-img"
        width={1024}
        height={719}
        draggable={false}
      />
    </div>
  )
}
