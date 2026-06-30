import { useMemo, useState } from 'react'
import { SERVICES } from '../data/content'
import { submitAppointmentRequest } from '../lib/appointments'

function getInitialService() {
  const inquiryProduct = sessionStorage.getItem('inquiryProduct')
  if (inquiryProduct) {
    sessionStorage.removeItem('inquiryProduct')
    return inquiryProduct
  }

  const params = new URLSearchParams(window.location.search)
  return params.get('service') || ''
}

export default function AppointmentForm() {
  const serviceOptions = useMemo(
    () => SERVICES.map((service) => ({ value: service.title, label: service.title })),
    [],
  )

  const [form, setForm] = useState(() => ({
    full_name: '',
    email: '',
    phone: '',
    service: getInitialService(),
    preferred_date: '',
    preferred_time: '',
    message: '',
  }))
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      await submitAppointmentRequest(form)
      setSubmitted(true)
    } catch (err) {
      setError(
        err.message
          || 'Hiba történt az időpontkérés elküldése közben. Kérlek próbáld újra később.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="contact-card flex items-center justify-center p-10 md:p-12 text-center rounded-sm">
        <div>
          <p className="font-serif text-2xl md:text-3xl text-gold-rich mb-3">
            Köszönöm az időpontkérésed!
          </p>
          <p className="prose-luxury">
            24 órán belül felveszem veled a kapcsolatot a szabad időpontok egyeztetése érdekében.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-card p-8 md:p-10 space-y-4 rounded-sm">
      <input
        type="text"
        name="full_name"
        placeholder="Teljes név *"
        required
        minLength={2}
        autoComplete="name"
        value={form.full_name}
        onChange={handleChange('full_name')}
        className="input-gold"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail cím *"
        required
        autoComplete="email"
        value={form.email}
        onChange={handleChange('email')}
        className="input-gold"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefonszám *"
        required
        minLength={6}
        autoComplete="tel"
        value={form.phone}
        onChange={handleChange('phone')}
        className="input-gold"
      />
      <select
        name="service"
        required
        value={form.service}
        onChange={handleChange('service')}
        className="input-gold select-gold"
      >
        <option value="" disabled>Válasszon szolgáltatást *</option>
        {serviceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="date"
          name="preferred_date"
          placeholder="Preferált dátum"
          value={form.preferred_date}
          onChange={handleChange('preferred_date')}
          className="input-gold"
        />
        <input
          type="time"
          name="preferred_time"
          placeholder="Preferált időpont"
          value={form.preferred_time}
          onChange={handleChange('preferred_time')}
          className="input-gold"
        />
      </div>
      <textarea
        name="message"
        placeholder="Üzenet / kérés részletei (opcionális)"
        rows={4}
        value={form.message}
        onChange={handleChange('message')}
        className="input-gold resize-none"
      />
      {error && (
        <p className="text-sm text-bronze bg-cream/80 border border-gold/30 px-3 py-2 rounded-sm" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="btn-primary w-full" disabled={submitting}>
        {submitting ? 'Küldés…' : 'Időpontkérés elküldése'}
      </button>
    </form>
  )
}
