const ADMIN_SESSION_KEY = 'salon_admin_password'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'ff1372e9-9177-448b-a22f-f36eed5aa8c3'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateAppointmentPayload(payload) {
  const errors = []
  const full_name = typeof payload?.full_name === 'string' ? payload.full_name.trim() : ''
  const email = typeof payload?.email === 'string' ? payload.email.trim().toLowerCase() : ''
  const phone = typeof payload?.phone === 'string' ? payload.phone.trim() : ''
  const service = typeof payload?.service === 'string' ? payload.service.trim() : ''
  const preferred_date = typeof payload?.preferred_date === 'string' ? payload.preferred_date.trim() : ''
  const preferred_time = typeof payload?.preferred_time === 'string' ? payload.preferred_time.trim() : ''
  const message = typeof payload?.message === 'string' ? payload.message.trim() : ''

  if (full_name.length < 2) errors.push('A teljes név megadása kötelező.')
  if (!email || !EMAIL_RE.test(email)) errors.push('Érvényes e-mail cím szükséges.')
  if (!phone || phone.length < 6) errors.push('Telefonszám megadása kötelező.')
  if (!service) errors.push('Válasszon szolgáltatást.')

  if (errors.length > 0) {
    return { ok: false, errors }
  }

  return {
    ok: true,
    data: { full_name, email, phone, service, preferred_date, preferred_time, message },
  }
}

export function getAdminPassword() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY)
}

export function setAdminPassword(password) {
  sessionStorage.setItem(ADMIN_SESSION_KEY, password)
}

export function clearAdminPassword() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY)
}

export async function submitAppointmentRequest(payload) {
  const validation = validateAppointmentPayload(payload)

  if (!validation.ok) {
    throw new Error(validation.errors.join(' '))
  }

  const { full_name, email, phone, service, preferred_date, preferred_time, message } = validation.data

  const details = [
    `Szolgáltatás: ${service}`,
    `Preferált dátum: ${preferred_date || 'Nincs megadva'}`,
    `Preferált időpont: ${preferred_time || 'Nincs megadva'}`,
    message ? `Üzenet: ${message}` : null,
  ].filter(Boolean).join('\n')

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Új időpontkérés - PH Luxury Angels Salon',
      name: full_name,
      email,
      phone,
      service,
      preferred_date: preferred_date || 'Nincs megadva',
      preferred_time: preferred_time || 'Nincs megadva',
      message: details,
    }),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok || !data.success) {
    throw new Error(
      'Hiba történt az időpontkérés elküldése közben. Kérlek próbáld újra később.',
    )
  }

  return data
}

export async function verifyAdminPassword(password) {
  const response = await fetch('/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-password': password,
    },
    body: JSON.stringify({}),
  })

  if (response.status === 401) return false
  if (!response.ok) {
    const data = await response.json().catch(() => ({}))
    throw new Error(data.error || 'Login failed')
  }

  return true
}

export async function fetchAppointmentRequests() {
  const password = getAdminPassword()
  if (!password) throw new Error('Not authenticated')

  const response = await fetch('/api/admin/appointments', {
    headers: { 'x-admin-password': password },
  })

  const data = await response.json().catch(() => ({}))

  if (response.status === 401) {
    clearAdminPassword()
    throw new Error('Session expired')
  }

  if (!response.ok) {
    throw new Error(data.error || 'Could not load requests')
  }

  return data.data
}

export async function updateAppointmentStatus(id, status) {
  const password = getAdminPassword()
  if (!password) throw new Error('Not authenticated')

  const response = await fetch('/api/admin/appointments', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-password': password,
    },
    body: JSON.stringify({ id, status }),
  })

  const data = await response.json().catch(() => ({}))

  if (response.status === 401) {
    clearAdminPassword()
    throw new Error('Session expired')
  }

  if (!response.ok) {
    throw new Error(data.error || 'Could not update status')
  }

  return data.data
}
