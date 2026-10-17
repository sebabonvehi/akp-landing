import { Icon } from '../components/Icon.jsx';
import { InstagramIcon } from '../components/InstagramIcon.jsx';
import { BRAND_LOGO, BRAND_NAME } from '../data/brand.js';
import { FILE_FORMATS, FOOTER_CONTACT, FOOTER_LEGAL } from '../data/footer.js';
import { externalLinkProps } from '../lib/externalLinkProps.js';

const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-canvas py-10 text-on-surface-variant">
      <div className="container-page">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:mb-16 lg:grid-cols-4 lg:gap-gutter">
          <div>
            <img
              src={BRAND_LOGO}
              alt={BRAND_NAME}
              width={759}
              height={201}
              className="brand-logo mb-4 h-14"
              loading="lazy"
            />
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
                  {item.icon === 'instagram' ? (
                    <InstagramIcon className="text-champagne" />
                  ) : (
                    <Icon name={item.icon} className="text-champagne" />
                  )}
                  <span>
                    <span className="caption block text-on-surface">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="body-sm hover:text-gold"
                        {...externalLinkProps(item.href)}
                      >
                        {item.value}
                      </a>
                    ) : (
                      [item.value].flat().map((line) => (
                        <span key={line} className="body-sm block">
                          {line}
                        </span>
                      ))
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="caption text-center md:text-left">
          © {CURRENT_YEAR} {FOOTER_LEGAL}
        </p>
      </div>
    </footer>
  );
}
