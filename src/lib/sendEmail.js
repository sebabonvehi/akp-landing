export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export async function sendEmail({ accessKey, subject, body, replyTo, fromName, botcheck = '' }) {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      message: body,
      email: replyTo,
      from_name: fromName,
      botcheck,
    }),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Email request failed with status ${response.status}`);
  }
}
