import { Icon } from '../components/Icon.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { GALLERY_HEADING, GALLERY_LABELS, GALLERY_PHOTOS } from '../data/gallery.js';
import { useCarousel } from '../hooks/useCarousel.js';

export function GallerySection() {
  const total = GALLERY_PHOTOS.length;
  const { trackRef, activeIndex, goTo, next, previous } = useCarousel(total);

  if (total === 0) return null;

  return (
    <section id="galeria" aria-labelledby="gallery-title" className="section bg-surface">
      <div className="container-page flex flex-col items-center gap-8">
        <SectionHeading id="gallery-title" align="center" {...GALLERY_HEADING} />

        <div
          className="carousel"
          aria-roledescription="carrusel"
          aria-label={GALLERY_LABELS.region}
        >
          <ul ref={trackRef} className="carousel-track">
            {GALLERY_PHOTOS.map((photo, index) => (
              <li
                key={photo.file}
                data-index={index}
                className="carousel-slide"
                aria-roledescription="diapositiva"
                aria-label={GALLERY_LABELS.slide(index + 1, total)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="carousel-image"
                />
              </li>
            ))}
          </ul>

          {total > 1 && (
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-arrow"
                aria-label={GALLERY_LABELS.previous}
                onClick={previous}
              >
                <Icon name="chevron_left" />
              </button>

              <div className="flex items-center gap-2">
                {GALLERY_PHOTOS.map((photo, index) => (
                  <button
                    key={photo.file}
                    type="button"
                    className={index === activeIndex ? 'carousel-dot-active' : 'carousel-dot'}
                    aria-label={GALLERY_LABELS.goTo(index + 1, total)}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="carousel-arrow"
                aria-label={GALLERY_LABELS.next}
                onClick={next}
              >
                <Icon name="chevron_right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
