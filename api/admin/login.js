import { isAdminAuthorized } from '../lib/auth.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.ADMIN_PASSWORD) {
    return res.status(503).json({ error: 'Admin access is not configured' })
  }

  if (!isAdminAuthorized(req)) {
    return res.status(401).json({ error: 'Invalid password' })
  }

  return res.status(200).json({ ok: true })
}
