export function isAdminAuthorized(req) {
  const configured = process.env.ADMIN_PASSWORD
  if (!configured) return false

  const headerPassword = req.headers['x-admin-password']
  const bearer = req.headers.authorization?.startsWith('Bearer ')
    ? req.headers.authorization.slice(7)
    : null

  const provided = headerPassword || bearer
  return typeof provided === 'string' && provided.length > 0 && provided === configured
}
