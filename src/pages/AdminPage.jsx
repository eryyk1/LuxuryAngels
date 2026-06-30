import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  clearAdminPassword,
  fetchAppointmentRequests,
  getAdminPassword,
  setAdminPassword,
  updateAppointmentStatus,
  verifyAdminPassword,
} from '../lib/appointments'

const STATUS_OPTIONS = [
  { value: 'new', label: 'Új' },
  { value: 'contacted', label: 'Kapcsolatfelvétel' },
  { value: 'confirmed', label: 'Megerősítve' },
  { value: 'cancelled', label: 'Törölve' },
]

function formatDate(value) {
  return new Intl.DateTimeFormat('hu-HU', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value))
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(() => Boolean(getAdminPassword()))
  const [passwordInput, setPasswordInput] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(false)
  const [tableError, setTableError] = useState('')
  const [updatingId, setUpdatingId] = useState(null)

  const loadRequests = useCallback(async () => {
    setLoading(true)
    setTableError('')

    try {
      const rows = await fetchAppointmentRequests()
      setRequests(rows)
    } catch (err) {
      setTableError(err.message || 'Betöltési hiba')
      if (err.message === 'Session expired') {
        setAuthenticated(false)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authenticated) {
      loadRequests()
    }
  }, [authenticated, loadRequests])

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoginLoading(true)
    setLoginError('')

    try {
      const ok = await verifyAdminPassword(passwordInput)
      if (!ok) {
        setLoginError('Hibás jelszó.')
        return
      }

      setAdminPassword(passwordInput)
      setAuthenticated(true)
      setPasswordInput('')
    } catch (err) {
      setLoginError(err.message || 'Bejelentkezés sikertelen.')
    } finally {
      setLoginLoading(false)
    }
  }

  const handleLogout = () => {
    clearAdminPassword()
    setAuthenticated(false)
    setRequests([])
  }

  const handleStatusChange = async (id, status) => {
    setUpdatingId(id)
    setTableError('')

    try {
      const updated = await updateAppointmentStatus(id, status)
      setRequests((current) => current.map((row) => (row.id === id ? updated : row)))
    } catch (err) {
      setTableError(err.message || 'Státusz frissítése sikertelen.')
      if (err.message === 'Session expired') {
        setAuthenticated(false)
      }
    } finally {
      setUpdatingId(null)
    }
  }

  if (!authenticated) {
    return (
      <div className="admin-shell">
        <div className="admin-login-card">
          <p className="section-label mb-3">Admin</p>
          <h1 className="font-serif text-3xl text-text-primary mb-2">Időpontkérések</h1>
          <p className="prose-luxury mb-8">Jelentkezzen be a foglalások kezeléséhez.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin jelszó"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="input-gold"
              required
              autoComplete="current-password"
            />
            {loginError && <p className="text-sm text-bronze" role="alert">{loginError}</p>}
            <button type="submit" className="btn-primary w-full" disabled={loginLoading}>
              {loginLoading ? 'Ellenőrzés…' : 'Bejelentkezés'}
            </button>
          </form>
          <Link to="/" className="inline-block mt-6 text-sm text-gold-rich hover:underline">
            ← Vissza a weboldalra
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-shell">
      <div className="admin-panel">
        <header className="admin-header">
          <div>
            <p className="section-label mb-2">Admin</p>
            <h1 className="font-serif text-3xl md:text-4xl text-text-primary">Időpontkérések</h1>
          </div>
          <div className="admin-header-actions">
            <button type="button" className="btn-outline" onClick={loadRequests} disabled={loading}>
              Frissítés
            </button>
            <button type="button" className="btn-outline" onClick={handleLogout}>
              Kijelentkezés
            </button>
            <Link to="/" className="btn-primary btn-primary-sm">
              Weboldal
            </Link>
          </div>
        </header>

        {tableError && (
          <p className="admin-alert" role="alert">{tableError}</p>
        )}

        {loading ? (
          <p className="prose-luxury">Betöltés…</p>
        ) : requests.length === 0 ? (
          <p className="prose-luxury">Még nincs időpontkérés.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Dátum</th>
                  <th>Név</th>
                  <th>E-mail</th>
                  <th>Telefon</th>
                  <th>Szolgáltatás</th>
                  <th>Üzenet</th>
                  <th>Státusz</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((row) => (
                  <tr key={row.id}>
                    <td data-label="Dátum">{formatDate(row.created_at)}</td>
                    <td data-label="Név">{row.full_name}</td>
                    <td data-label="E-mail">
                      <a href={`mailto:${row.email}`} className="admin-link">{row.email}</a>
                    </td>
                    <td data-label="Telefon">
                      <a href={`tel:${row.phone}`} className="admin-link">{row.phone}</a>
                    </td>
                    <td data-label="Szolgáltatás">{row.service}</td>
                    <td data-label="Üzenet">{row.message || '—'}</td>
                    <td data-label="Státusz">
                      <select
                        className="admin-status-select"
                        value={row.status}
                        disabled={updatingId === row.id}
                        onChange={(e) => handleStatusChange(row.id, e.target.value)}
                      >
                        {STATUS_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
