import { WHATSAPP_FAB, WHATSAPP_FAB_URL } from '../data/contact.js';
import { externalLinkProps } from '../lib/externalLinkProps.js';
import { WhatsAppIcon } from './WhatsAppIcon.jsx';

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_FAB_URL}
      className="whatsapp-fab"
      aria-label={WHATSAPP_FAB.label}
      title={WHATSAPP_FAB.label}
      {...externalLinkProps(WHATSAPP_FAB_URL)}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
