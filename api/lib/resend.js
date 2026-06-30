const CONFIRMATION_SUBJECT = 'Appointment request received'

const CONFIRMATION_TEXT = `Thank you for your appointment request. Your request is currently being processed. The salon will contact you soon to confirm the exact appointment time.`

export async function sendConfirmationEmail({ to, fullName }) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.FROM_EMAIL

  if (!apiKey || !from) {
    throw new Error('Missing email configuration')
  }

  const greeting = fullName ? `Dear ${fullName},` : 'Dear guest,'
  const text = `${greeting}\n\n${CONFIRMATION_TEXT}`
  const html = `
    <div style="font-family: Georgia, serif; color: #2f2820; line-height: 1.7; max-width: 560px;">
      <p>${greeting}</p>
      <p>${CONFIRMATION_TEXT}</p>
      <p style="color: #756654; margin-top: 2rem;">Luxury Angels Salon</p>
    </div>
  `.trim()

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: CONFIRMATION_SUBJECT,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`Resend API error (${response.status}): ${detail}`)
  }

  return response.json()
}
