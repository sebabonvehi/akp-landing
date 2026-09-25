import { Button } from '../components/Button.jsx';
import { BRAND_NAME, BRAND_TAGLINE, LOGO_ALT, LOGO_SRC } from '../data/brand.js';
import { HEADER_CTA, NAV_LINKS } from '../data/navigation.js';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img src={LOGO_SRC} alt={LOGO_ALT} className="logo" />
          <span className="hidden flex-col lg:flex">
            <span className="brand-name">{BRAND_NAME}</span>
            <span className="caption text-on-surface">{BRAND_TAGLINE}</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-4 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={HEADER_CTA.href} icon={HEADER_CTA.icon} className="hidden sm:inline-flex">
          {HEADER_CTA.label}
        </Button>
      </div>
    </header>
  );
}
