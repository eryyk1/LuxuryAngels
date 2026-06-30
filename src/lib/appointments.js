const ADMIN_SESSION_KEY = 'salon_admin_password'

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
  const response = await fetch('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = data.details?.join(' ') || data.error || 'Could not submit request'
    throw new Error(message)
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
