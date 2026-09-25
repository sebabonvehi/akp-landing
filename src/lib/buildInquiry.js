// Conservative limit: some mail clients and browsers truncate or reject longer URLs.
export const MAX_URL_LENGTH = 2000;

const TRUNCATION_MARKER = '…';

export function buildInquiry(values, { labels, specialtyLabel }) {
  const subject = `${labels.subjectPrefix} ${values.subject.trim()}`;
  const details = [
    `${labels.doctorName}: ${values.doctorName.trim()}`,
    `${labels.clinicName}: ${values.clinicName.trim()}`,
    `${labels.email}: ${values.email.trim()}`,
  ];
  if (values.phone.trim()) details.push(`${labels.phone}: ${values.phone.trim()}`);
  details.push(`${labels.specialty}: ${specialtyLabel}`);

  const sections = [details.join('\n'), values.message.trim()];
  if (values.sendGuide) sections.push(labels.guideRequest);

  return { subject, body: sections.join('\n\n') };
}

export function buildMailtoUrl({ to, subject, body }) {
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${to}?${query}`;
}

export function buildWhatsAppUrl({ phone, text }) {
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
}

export function fitUrlToLimit(buildUrl, text, maxLength = MAX_URL_LENGTH) {
  let url = buildUrl(text);
  let trimmedText = text;

  while (url.length > maxLength && trimmedText.length > 0) {
    const overflow = url.length - maxLength;
    // Encoded characters can take up to 9 URL chars (4-byte UTF-8), so cut at least one char per pass.
    const charsToCut = Math.max(1, Math.ceil(overflow / 9));
    trimmedText = trimmedText.slice(0, -charsToCut);
    url = buildUrl(`${trimmedText}${TRUNCATION_MARKER}`);
  }

  return url;
}
