const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const STATUSES = new Set(['new', 'contacted', 'confirmed', 'cancelled'])

export function validateAppointmentPayload(body) {
  const errors = []
  const full_name = typeof body?.full_name === 'string' ? body.full_name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const phone = typeof body?.phone === 'string' ? body.phone.trim() : ''
  const service = typeof body?.service === 'string' ? body.service.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (full_name.length < 2) errors.push('A teljes név megadása kötelező.')
  if (!email || !EMAIL_RE.test(email)) errors.push('Érvényes e-mail cím szükséges.')
  if (!phone || phone.length < 6) errors.push('Telefonszám megadása kötelező.')
  if (!service) errors.push('Válasszon szolgáltatást.')

  if (errors.length > 0) {
    return { ok: false, errors }
  }

  return {
    ok: true,
    data: {
      full_name,
      email,
      phone,
      service,
      message: message || null,
      status: 'new',
    },
  }
}

export function validateStatus(value) {
  if (!STATUSES.has(value)) {
    return { ok: false, error: 'Invalid status value.' }
  }
  return { ok: true, status: value }
}

export function isValidUuid(value) {
  return typeof value === 'string'
    && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
}
