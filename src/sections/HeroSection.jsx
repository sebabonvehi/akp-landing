import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';
import { EMAIL_GENERAL } from '../data/contact.js';
import { HERO, HERO_IMAGE, HERO_METRICS } from '../data/hero.js';

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="section bg-surface">
      <div className="container-page grid items-center gap-8 lg:grid-cols-12 lg:gap-gutter">
        <div className="flex max-w-2xl flex-col items-start gap-6 lg:col-span-8">
          <p className="hero-badge">
            <Icon name="verified" size="sm" />
            {HERO.badge}
          </p>

          <h1 id="hero-title" className="hero-title">
            {HERO.titleStart} <em className="text-gold">{HERO.titleHighlight}</em> {HERO.titleEnd}
          </h1>

          <p className="hero-description">
            {HERO.descriptionStart}{' '}
            <strong className="font-medium text-champagne">{HERO.descriptionHighlight}</strong>
            {HERO.descriptionEnd}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href={HERO.primaryCta.href} icon={HERO.primaryCta.icon}>
              {HERO.primaryCta.label}
            </Button>
            <Button href={`mailto:${EMAIL_GENERAL}`} variant="secondary" icon="mail">
              {EMAIL_GENERAL}
            </Button>
          </div>

          <dl className="hero-metrics">
            {HERO_METRICS.map((metric) => (
              <div key={metric.id} className="flex flex-col-reverse py-1">
                <dt className="caption">{metric.label}</dt>
                <dd className="metric-value">
                  <Icon name={metric.icon} size="sm" />
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="media-frame lg:col-span-4">
          <div className="relative h-64 overflow-hidden rounded-sm">
            <img
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              fetchPriority="high"
              className="media-image"
            />
            <div className="media-overlay" aria-hidden="true" />
            <div className="media-caption">
              <span className="media-tag">{HERO_IMAGE.tag}</span>
              <span className="caption text-on-surface">{HERO_IMAGE.caption}</span>
            </div>
          </div>
          <figcaption className="flex items-center justify-between px-2 py-3">
            <span>
              <span className="block font-label text-label-md text-on-surface">
                {HERO_IMAGE.material}
              </span>
              <span className="body-sm">{HERO_IMAGE.materialDetail}</span>
            </span>
            <Icon name="brush" size="lg" className="text-gold" />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
