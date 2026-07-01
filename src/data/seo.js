import {
  FACEBOOK_URL,
  MAPS_URL,
  PHONE,
  PRODUCTS_UI_ENABLED,
  SALON_LOCATION,
  SALON_NAME,
  SERVICES,
} from './content.js'

export const SITE_URL = 'https://luxuryangels.hu'
export const SITE_NAME = 'PH Luxury Angels Salon'
export const SITE_NAME_ALT = 'Luxury Angels Salon'
export const OG_IMAGE = `${SITE_URL}/og-image.png`
export const GEO = {
  locality: 'Budapest',
  region: 'HU-BU',
  postalCode: '1183',
  streetAddress: 'Szent Lőrinc sétány 4/B',
  country: 'HU',
}

export const DEFAULT_SEO = {
  title: 'PH Luxury Angels Salon | Hajhosszabbítás Budapest XVIII. kerület',
  description:
    'Prémium nano gyűrűs hajhosszabbítás, mikro gyűrű, hőillesztés, póthaj és hajdúsítás Budapest XVIII. kerületében. Fodrász és hajhosszabbító képzés — Polgár Hajnalka, Luxury Angels Salon.',
  path: '/',
}

export const PAGE_SEO = {
  services: {
    title: 'Szolgáltatások | Hajhosszabbítás & fodrász Budapest — PH Luxury Angels Salon',
    description:
      'Hajhosszabbítás nanogyűrűvel, póthaj, hőillesztés, hajdúsítás, fodrászat és hajnövesztő kezelések Budapest XVIII. kerületében. Személyre szabott konzultációval.',
    path: '/szolgaltatasok',
  },
  course: {
    title: 'Hajhosszabbító képzés | Tanfolyam Budapest — PH Luxury Angels Salon',
    description:
      'Egyéni és csoportos hajhosszabbító képzés Polgár Hajnalkával a 18. kerületi Luxury Angels Salonban. Nano gyűrű, mikro gyűrű, hőillesztés és nano kapszulás hőillesztés oktatás.',
    path: '/tanfolyam',
  },
  products: {
    title: 'Hajápoló termékek | PH Luxury Angels Salon Budapest',
    description:
      'Prémium hajápoló termékek otthoni használatra — szalonminőségű sampon, balzsam és kezelőcsomagok a Luxury Angels Salontól, Budapesten.',
    path: '/termekek',
  },
  notFound: {
    title: 'Szolgáltatás nem található | PH Luxury Angels Salon',
    description:
      'A keresett szolgáltatás nem érhető el. Fedezze fel hajhosszabbítás, póthaj és fodrász szolgáltatásainkat Budapest XVIII. kerületében.',
    path: '',
    noindex: true,
  },
}

const SERVICE_SEO_OVERRIDES = {
  hosszabbitas: {
    title: 'Nano gyűrűs hajhosszabbítás Budapest | PH Luxury Angels Salon',
    description:
      'Nano gyűrűs hajhosszabbítás és póthaj felrakás prémium minőségben Budapest XVIII. kerületében. Természetes hossz, hajdúsítás és volumennövelés — Luxury Angels Salon.',
  },
  'pothaj-ar': {
    title: 'Póthaj árlista Budapest | Prémium póthaj — PH Luxury Angels Salon',
    description:
      'Prémium póthaj árak 100 grammra, barna és szőke árnyalatokban. Nano gyűrű és hőillesztés tincsezés Budapest XVIII. kerületében — Luxury Angels Salon.',
  },
  fodraszat: {
    title: 'Fodrász Budapest XVIII. kerület | Hajápolás — PH Luxury Angels Salon',
    description:
      'Professzionális fodrászat, festés, hajápolás és L’Oréal SteamPod kezelés Budapest XVIII. kerületében. Prémium szalon — PH Luxury Angels Salon.',
  },
  hajnovestes: {
    title: 'Hajnövesztő kezelés Budapest | Hajdúsítás — PH Luxury Angels Salon',
    description:
      'Hajnövesztő és hajsűrítő kezelés prémium termékekkel Budapest XVIII. kerületében. Támogassa haja egészséges növekedését — Luxury Angels Salon.',
  },
  'hajnovestes-komplex': {
    title: 'Komplex hajnövesztő kezelés Budapest | PH Luxury Angels Salon',
    description:
      'Komplex hajnövesztő, sűrítő és hajszerkezet-újító kezelés fejbőrdiagnosztikával és SteamPod formázással Budapest XVIII. kerületében.',
  },
}

export function getServiceSeo(slug) {
  const service = SERVICES.find((item) => item.slug === slug)
  if (!service) return PAGE_SEO.notFound

  const override = SERVICE_SEO_OVERRIDES[slug]
  return {
    title: override?.title ?? `${service.shortTitle} | PH Luxury Angels Salon Budapest`,
    description: override?.description ?? `${service.desc} Budapest XVIII. kerület — ${SITE_NAME}.`,
    path: `/szolgaltatasok/${slug}`,
  }
}

/** Routes included in sitemap.xml — extend SERVICES or PAGE_SEO to add new pages. */
export function getSitemapEntries() {
  const today = new Date().toISOString().slice(0, 10)
  const entries = [
    { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
    { path: '/szolgaltatasok', priority: '0.9', changefreq: 'weekly', lastmod: today },
    ...SERVICES.map((service) => ({
      path: `/szolgaltatasok/${service.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: today,
    })),
    { path: '/tanfolyam', priority: '0.8', changefreq: 'monthly', lastmod: today },
  ]

  if (PRODUCTS_UI_ENABLED) {
    entries.push({
      path: '/termekek',
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: today,
    })
  }

  return entries
}

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function buildGlobalSchemaGraph() {
  const businessId = `${SITE_URL}/#salon`
  const orgId = `${SITE_URL}/#organization`
  const websiteId = `${SITE_URL}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['HairSalon', 'LocalBusiness'],
        '@id': businessId,
        name: SITE_NAME,
        alternateName: [SITE_NAME_ALT, SALON_NAME],
        description: DEFAULT_SEO.description,
        url: SITE_URL,
        image: OG_IMAGE,
        logo: `${SITE_URL}/icon-512.png`,
        telephone: PHONE,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: GEO.streetAddress,
          addressLocality: GEO.locality,
          postalCode: GEO.postalCode,
          addressCountry: GEO.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 47.444,
          longitude: 19.175,
        },
        areaServed: {
          '@type': 'City',
          name: 'Budapest',
        },
        sameAs: [FACEBOOK_URL, MAPS_URL],
        hasMap: MAPS_URL,
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE_NAME,
        alternateName: SITE_NAME_ALT,
        url: SITE_URL,
        logo: `${SITE_URL}/icon-512.png`,
        founder: {
          '@type': 'Person',
          name: 'Polgár Hajnalka',
        },
        sameAs: [FACEBOOK_URL],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'hu-HU',
        publisher: { '@id': orgId },
      },
    ],
  }
}

export function buildServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.overview || service.desc,
    provider: {
      '@type': 'HairSalon',
      name: SITE_NAME,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: GEO.locality,
        addressRegion: SALON_LOCATION,
        addressCountry: GEO.country,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Budapest',
    },
    url: absoluteUrl(`/szolgaltatasok/${service.slug}`),
  }
}

export function buildCourseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Hajhosszabbító képzés',
    description: PAGE_SEO.course.description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: 'hu-HU',
    url: absoluteUrl('/tanfolyam'),
    teaches: [
      'Nano gyűrűs hajhosszabbítás',
      'Mikro gyűrűs hajhosszabbítás',
      'Hőillesztés',
      'Nano kapszulás hőillesztés',
    ],
  }
}
