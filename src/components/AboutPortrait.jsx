const PORTRAIT_SRC = '/photos/hajni.jpg'

export default function AboutPortrait() {
  return (
    <div className="about-portrait">
      <div className="about-portrait-glow" aria-hidden="true" />
      <div className="about-portrait-frame">
        <div className="about-portrait-inner">
          <img
            src={PORTRAIT_SRC}
            alt="Polgár Hajnalka — Luxury Angels Salon"
            className="about-portrait-img"
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-portrait-accent" aria-hidden="true" />
      </div>
      <p className="about-portrait-caption">Polgár Hajnalka</p>
    </div>
  )
}
