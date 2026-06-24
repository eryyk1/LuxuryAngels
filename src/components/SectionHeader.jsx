export default function SectionHeader({ label, title, light = false, className = '' }) {
  return (
    <div className={`section-header text-center mb-14 md:mb-16 section-animate ${className}`}>
      {label && (
        <p className={`section-label mb-4 ${light ? 'section-label-light' : ''}`}>{label}</p>
      )}
      <h2 className={`section-title ${light ? 'section-title-light' : ''}`}>{title}</h2>
      <div className={`divider-gold mx-auto mt-6 ${light ? 'opacity-80' : ''}`} />
    </div>
  )
}
