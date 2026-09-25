import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';
import { CONVERSION_STRIP, WHATSAPP_URL } from '../data/contact.js';

export function ConversionSection() {
  return (
    <section aria-labelledby="conversion-title" className="bg-surface-hover py-4">
      <div className="container-page flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <span className="icon-box-solid">
            <Icon name="headset_mic" />
          </span>
          <div>
            <h2 id="conversion-title" className="eyebrow">
              {CONVERSION_STRIP.title}
            </h2>
            <p className="body-sm">{CONVERSION_STRIP.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button href={CONVERSION_STRIP.href} icon="outgoing_mail">
            {CONVERSION_STRIP.cta}
          </Button>
          <Button
            href={WHATSAPP_URL}
            variant="secondary"
            icon="chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONVERSION_STRIP.whatsappCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
