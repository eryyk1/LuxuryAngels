import { useEffect } from 'react'
import {
  DEFAULT_SEO,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '../data/seo'

const JSON_LD_ATTR = 'data-seo-jsonld'

function readMeta(name, attribute = 'name') {
  return document.querySelector(`meta[${attribute}="${name}"]`)?.getAttribute('content') ?? ''
}

function readLink(rel) {
  return document.querySelector(`link[rel="${rel}"]`)?.getAttribute('href') ?? ''
}

function ensureMeta(name, attribute = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  return element
}

function ensureLink(rel) {
  let element = document.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  return element
}

function captureDocumentMeta() {
  return {
    title: document.title,
    description: readMeta('description'),
    canonical: readLink('canonical'),
    ogTitle: readMeta('og:title', 'property'),
    ogDescription: readMeta('og:description', 'property'),
    ogUrl: readMeta('og:url', 'property'),
    twitterTitle: readMeta('twitter:title'),
    twitterDescription: readMeta('twitter:description'),
    robots: readMeta('robots'),
  }
}

function applyDocumentMeta({
  title,
  description,
  path = '',
  noindex = false,
}) {
  const url = path ? `${SITE_URL}${path}` : `${SITE_URL}/`

  document.title = title
  ensureMeta('description').setAttribute('content', description)
  ensureLink('canonical').setAttribute('href', url)
  ensureMeta('og:title', 'property').setAttribute('content', title)
  ensureMeta('og:description', 'property').setAttribute('content', description)
  ensureMeta('og:url', 'property').setAttribute('content', url)
  ensureMeta('og:image', 'property').setAttribute('content', OG_IMAGE)
  ensureMeta('twitter:title').setAttribute('content', title)
  ensureMeta('twitter:description').setAttribute('content', description)
  ensureMeta('twitter:image').setAttribute('content', OG_IMAGE)
  ensureMeta('og:image:alt', 'property').setAttribute('content', `${SITE_NAME} — prémium hajhosszabbítás Budapesten`)
  ensureMeta('twitter:image:alt').setAttribute('content', `${SITE_NAME} — prémium hajhosszabbítás Budapesten`)

  const robots = noindex ? 'noindex, nofollow' : 'index, follow'
  ensureMeta('robots').setAttribute('content', robots)
}

function injectJsonLd(schemas) {
  if (!schemas?.length) return []

  return schemas.map((schema, index) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute(JSON_LD_ATTR, `${index}`)
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return script
  })
}

function removeJsonLd(scripts) {
  scripts.forEach((script) => script.remove())
}

export default function PageMeta({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  path = DEFAULT_SEO.path,
  jsonLd = [],
  noindex = false,
}) {
  useEffect(() => {
    const previous = captureDocumentMeta()
    applyDocumentMeta({ title, description, path, noindex })
    const scripts = injectJsonLd(jsonLd)

    return () => {
      const restoredPath = previous.canonical.replace(SITE_URL, '') || '/'
      applyDocumentMeta({
        title: previous.title || DEFAULT_SEO.title,
        description: previous.description || DEFAULT_SEO.description,
        path: restoredPath,
        noindex: previous.robots.includes('noindex'),
      })
      removeJsonLd(scripts)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- jsonLd serialized to avoid unstable array refs
  }, [title, description, path, noindex, JSON.stringify(jsonLd)])

  return null
}

export { SITE_NAME, SITE_URL, DEFAULT_SEO }
