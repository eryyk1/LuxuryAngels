import { getSupabaseAdmin } from './lib/supabase.js'
import { validateAppointmentPayload } from './lib/validate.js'
import { sendConfirmationEmail } from './lib/resend.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const validation = validateAppointmentPayload(req.body)

    if (!validation.ok) {
      return res.status(400).json({ error: 'Validation failed', details: validation.errors })
    }

    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('appointment_requests')
      .insert(validation.data)
      .select('id, created_at')
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      return res.status(500).json({ error: 'Could not save appointment request' })
    }

    try {
      await sendConfirmationEmail({
        to: validation.data.email,
        fullName: validation.data.full_name,
      })
    } catch (emailError) {
      console.error('Confirmation email error:', emailError)
      return res.status(201).json({
        ok: true,
        id: data.id,
        created_at: data.created_at,
        emailSent: false,
        warning: 'Request saved, but confirmation email could not be sent.',
      })
    }

    return res.status(201).json({
      ok: true,
      id: data.id,
      created_at: data.created_at,
      emailSent: true,
    })
  } catch (err) {
    console.error('Appointment request error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
