export default function ImagePlaceholder({ label, aspect = 'aspect-[3/4]', className = '' }) {
  return (
    <div
      className={`photo-slot ${aspect} ${className}`}
      data-photo-slot={label}
    >
      <span className="photo-slot-label">{label}</span>
    </div>
  )
}
