import { Icon } from '../components/Icon.jsx';
import { InstagramIcon } from '../components/InstagramIcon.jsx';
import { BRAND_MARK_WHITE } from '../data/brand.js';
import { FOOTER_CONTACT, FOOTER_HOURS, FOOTER_INSTAGRAM, FOOTER_LEGAL } from '../data/footer.js';
import { externalLinkProps } from '../lib/externalLinkProps.js';

const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-inverse-primary text-inverse-surface">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-3 lg:gap-gutter">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_MARK_WHITE}
              alt=""
              width={194}
              height={201}
              className="brand-logo h-12"
              loading="lazy"
            />
          </div>
          <a href={FOOTER_INSTAGRAM.href}
            className="inline-flex items-center gap-2 font-sans text-body-sm hover:text-primary"
            {...externalLinkProps(FOOTER_INSTAGRAM.href)}>
            <InstagramIcon />
            <span>@akpdentalab</span>
          </a>
        </div>

        <div>
          <h3 className="footer-heading">{FOOTER_CONTACT.title}</h3>
          <ul className="flex flex-col gap-3">
            {FOOTER_CONTACT.items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 font-sans text-body-sm hover:text-primary"
                  {...externalLinkProps(item.href)}
                >
                  <Icon name={item.icon} size="sm" />
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
