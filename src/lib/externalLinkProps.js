// Web links (WhatsApp, Instagram) open in a new tab; mailto:/tel: stay in place.
export function externalLinkProps(href = '') {
  return href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
