import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';
import { BRAND_NAME, BRAND_TAGLINE, LOGO_ALT, LOGO_SRC } from '../data/brand.js';
import {
  HEADER_CTA,
  MENU_LABELS,
  NAV_LABEL,
  NAV_LINKS,
  SKIP_LINK_LABEL,
} from '../data/navigation.js';
import { useMobileMenu } from '../hooks/useMobileMenu.js';

const MOBILE_NAV_ID = 'mobile-nav';

export function SiteHeader() {
  const menu = useMobileMenu();

  return (
    <header className="site-header">
      <a href="#content" className="skip-link">
        {SKIP_LINK_LABEL}
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#content" className="flex min-w-0 items-center gap-3">
          <img src={LOGO_SRC} alt={LOGO_ALT} className="logo" />
          <span className="hidden flex-col lg:flex">
            <span className="brand-name">{BRAND_NAME}</span>
            <span className="caption text-on-surface">{BRAND_TAGLINE}</span>
          </span>
        </a>

        <nav aria-label={NAV_LABEL} className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={HEADER_CTA.href} icon={HEADER_CTA.icon} className="hidden sm:inline-flex">
            {HEADER_CTA.label}
          </Button>
          <button
            type="button"
            className="menu-toggle md:hidden"
            aria-expanded={menu.isOpen}
            aria-controls={MOBILE_NAV_ID}
            aria-label={menu.isOpen ? MENU_LABELS.close : MENU_LABELS.open}
            onClick={menu.toggle}
          >
            <Icon name={menu.isOpen ? 'close' : 'menu'} size="lg" />
          </button>
        </div>
      </div>

      <nav
        id={MOBILE_NAV_ID}
        aria-label={NAV_LABEL}
        hidden={!menu.isOpen}
        className="mobile-nav md:hidden"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={link.href} className="mobile-nav-link" onClick={menu.close}>
            {link.label}
          </a>
        ))}
        <Button href={HEADER_CTA.href} icon={HEADER_CTA.icon} onClick={menu.close}>
          {HEADER_CTA.label}
        </Button>
      </nav>
    </header>
  );
}
