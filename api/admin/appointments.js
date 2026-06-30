import { getSupabaseAdmin } from '../lib/supabase.js'
import { isAdminAuthorized } from '../lib/auth.js'
import { isValidUuid, validateStatus } from '../lib/validate.js'

export default async function handler(req, res) {
  if (!isAdminAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const supabase = getSupabaseAdmin()

    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('appointment_requests')
        .select('id, full_name, email, phone, service, message, status, created_at')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase fetch error:', error)
        return res.status(500).json({ error: 'Could not load appointment requests' })
      }

      return res.status(200).json({ data })
    }

    if (req.method === 'PATCH') {
      const id = req.body?.id
      const statusResult = validateStatus(req.body?.status)

      if (!isValidUuid(id)) {
        return res.status(400).json({ error: 'Invalid request id' })
      }

      if (!statusResult.ok) {
        return res.status(400).json({ error: statusResult.error })
      }

      const { data, error } = await supabase
        .from('appointment_requests')
        .update({ status: statusResult.status })
        .eq('id', id)
        .select('id, full_name, email, phone, service, message, status, created_at')
        .single()

      if (error) {
        console.error('Supabase update error:', error)
        return res.status(500).json({ error: 'Could not update status' })
      }

      return res.status(200).json({ data })
    }

    res.setHeader('Allow', 'GET, PATCH')
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error('Admin appointments error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
