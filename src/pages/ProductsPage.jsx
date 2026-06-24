import { Link, useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data/content'
import PageHero, { BookingCTA } from '../components/PageHero'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function ProductsPage() {
  const navigate = useNavigate()

  const inquire = (productName) => {
    sessionStorage.setItem('inquiryProduct', productName)
    navigate('/#kapcsolat')
  }

  return (
    <>
      <PageHero
        label="Otthoni ápolás"
        title="Kiemelt termékek"
        description="Szalonminőségű ápoló termékek — otthon is profi eredményért."
      />

      <section className="section-padding px-4 sm:px-6 bg-cream -mt-4 section-animate">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PRODUCTS.map((p) => (
              <article key={p.name} className="card-luxury p-6 flex flex-col group rounded-sm">
                <ImagePlaceholder label="Termékfotó" aspect="aspect-square" className="mb-5 rounded-sm" />
                {p.tag && (
                  <span className="product-tag mb-2">{p.tag}</span>
                )}
                <h2 className="font-serif text-xl mb-2 flex-grow text-text-primary">{p.name}</h2>
                <p className="text-gold-rich font-semibold mb-5 text-base tracking-wide">{p.price}</p>
                <button
                  type="button"
                  onClick={() => inquire(p.name)}
                  className="btn-gold-ghost w-full"
                >
                  Érdekel
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />

      <div className="text-center pb-16 px-4 section-animate">
        <Link to="/szolgaltatasok" className="btn-outline">Szolgáltatások</Link>
      </div>
    </>
  )
}
