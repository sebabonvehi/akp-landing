import { Icon } from '../components/Icon.jsx';
import { InstagramIcon } from '../components/InstagramIcon.jsx';
import { BRAND_MARK_WHITE } from '../data/brand.js';
import {
  FOOTER_CONTACT,
  FOOTER_HOURS,
  FOOTER_INSTAGRAM,
  FOOTER_LEGAL,
  FOOTER_TAGLINE,
} from '../data/footer.js';
import { externalLinkProps } from '../lib/externalLinkProps.js';

const CURRENT_YEAR = new Date().getFullYear();

const CONTACT_ITEMS = [
  ...FOOTER_CONTACT.items,
  {
    id: 'instagram',
    href: FOOTER_INSTAGRAM.href,
    value: FOOTER_INSTAGRAM.handle,
    label: FOOTER_INSTAGRAM.label,
    isInstagram: true,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse-primary text-inverse-surface">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-3 lg:gap-gutter">
        <div className="flex flex-col items-start gap-4">
          <img
            src={BRAND_MARK_WHITE}
            alt="AKP Laboratorio Dental Digital"
            width={1433}
            height={376}
            className="brand-logo h-12 w-auto"
            loading="lazy"
          />
          <p className="max-w-xs font-sans text-body-sm opacity-80">{FOOTER_TAGLINE}</p>
        </div>

        <div>
          <h3 className="footer-heading">{FOOTER_CONTACT.title}</h3>
          <ul className="flex flex-col gap-3">
            {CONTACT_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  className="flex items-center gap-2 font-sans text-body-sm hover:text-primary"
                  {...externalLinkProps(item.href)}
                >
                  {item.isInstagram ? (
                    <InstagramIcon className="h-4 w-4 shrink-0" />
                  ) : (
                    <Icon name={item.icon} size="sm" />
                  )}
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">{FOOTER_HOURS.title}</h3>
          <ul className="mb-4 flex flex-col gap-1">
            {FOOTER_HOURS.lines.map((line) => (
              <li key={line} className="font-sans text-body-sm">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-outline">
        <p className="container-page py-4 text-center font-label text-label-sm sm:text-left">
          © {CURRENT_YEAR} {FOOTER_LEGAL}
        </p>
      </div>
    </footer>
  );
}
