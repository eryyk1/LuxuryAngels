const COURSE_IMAGES = [
  {
    src: '/photos/tanfolyam1.jpg',
    alt: 'Hajhosszabbító képzés gyakorlati oktatás — PH Luxury Angels Salon, Budapest XVIII. kerület',
  },
  {
    src: '/photos/tanfolyam2.jpg',
    alt: 'Nano gyűrűs hajhosszabbítás technika bemutató — Luxury Angels tanfolyam',
  },
  {
    src: '/photos/tanfolyam3.jpg',
    alt: 'Hajhosszabbító tanfolyam a szalonban — Polgár Hajnalka oktatás',
  },
]

export default function CourseGallery() {
  const [featured, ...rest] = COURSE_IMAGES

  return (
    <div className="course-gallery">
      <figure className="course-gallery-featured">
        <div className="course-gallery-frame">
          <img
            src={featured.src}
            alt={featured.alt}
            className="course-gallery-img"
            loading="lazy"
            decoding="async"
          />
          <div className="course-gallery-shimmer" aria-hidden="true" />
        </div>
      </figure>
      <div className="course-gallery-grid">
        {rest.map((image) => (
          <figure key={image.src} className="course-gallery-item">
            <div className="course-gallery-frame">
              <img
                src={image.src}
                alt={image.alt}
                className="course-gallery-img"
                loading="lazy"
              />
              <div className="course-gallery-shimmer" aria-hidden="true" />
            </div>
          </figure>
        ))}
      </div>
    </div>
  )
}
