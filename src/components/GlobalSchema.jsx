import { useEffect } from 'react'
import { buildGlobalSchemaGraph } from '../data/seo'

const GLOBAL_SCHEMA_ATTR = 'data-global-schema'

export default function GlobalSchema() {
  useEffect(() => {
    const existing = document.querySelector(`script[${GLOBAL_SCHEMA_ATTR}]`)
    if (existing) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute(GLOBAL_SCHEMA_ATTR, 'true')
    script.textContent = JSON.stringify(buildGlobalSchemaGraph())
    document.head.appendChild(script)
  }, [])

  return null
}
