import { Icon } from '../components/Icon.jsx';
import { BRAND_LOGO, BRAND_NAME } from '../data/brand.js';
import {
  FILE_FORMATS,
  FOOTER_ABOUT,
  FOOTER_BADGES,
  FOOTER_CONTACT,
  FOOTER_HIGHLIGHT,
  FOOTER_LEGAL,
} from '../data/footer.js';

const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-canvas py-10 text-on-surface-variant">
      <div className="container-page">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:mb-16 lg:grid-cols-4 lg:gap-gutter">
          <div>
            <img src={BRAND_LOGO} alt={BRAND_NAME} className="brand-logo mb-4 h-20" loading="lazy" />
            <p className="body-sm mb-4">{FOOTER_ABOUT}</p>
            <ul className="flex flex-wrap gap-1">
              {FOOTER_BADGES.map((badge) => (
                <li key={badge} className="badge">
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{FILE_FORMATS.title}</h3>
            <p className="body-sm mb-4">{FILE_FORMATS.description}</p>
            <ul className="flex flex-col gap-1">
              {FILE_FORMATS.items.map((item) => (
                <li key={item} className="body-sm flex items-center gap-1.5">
                  <Icon name="check_circle" size="sm" className="text-champagne" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{FOOTER_CONTACT.title}</h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_CONTACT.items.map((item) => (
                <li key={item.id} className="flex items-start gap-2">
                  <Icon name={item.icon} className="text-champagne" />
                  <span>
                    <span className="caption block text-on-surface">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="body-sm hover:text-gold">
                        {item.value}
                      </a>
                    ) : (
                      <span className="body-sm">{item.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{FOOTER_HIGHLIGHT.title}</h3>
            <p className="body-sm mb-2">{FOOTER_HIGHLIGHT.description}</p>
            <div className="inset-box">
              <span className="caption block text-champagne">{FOOTER_HIGHLIGHT.label}</span>
              <span className="body-sm block text-on-surface">{FOOTER_HIGHLIGHT.value}</span>
            </div>
          </div>
        </div>

        <p className="caption text-center md:text-left">
          © {CURRENT_YEAR} {FOOTER_LEGAL}
        </p>
      </div>
    </footer>
  );
}
