import { Icon } from '../components/Icon.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { GALLERY_HEADING, GALLERY_LABELS, GALLERY_PHOTOS } from '../data/gallery.js';
import { useCarousel } from '../hooks/useCarousel.js';

export function GallerySection() {
  const total = GALLERY_PHOTOS.length;
  const { trackRef, activeIndex, goTo, next, previous, hasPrevious, hasNext } = useCarousel(total);

  if (total === 0) return null;

  return (
    <section id="casos" aria-labelledby="gallery-title" className="section bg-surface">
      <div className="container-page flex flex-col items-center gap-8">
        <SectionHeading id="gallery-title" align="center" {...GALLERY_HEADING} />

        <div
          className="carousel"
          aria-roledescription="carrusel"
          aria-label={GALLERY_LABELS.region}
        >
          <div className="carousel-stage">
            {total > 1 && (
              <button
                type="button"
                className="carousel-arrow"
                aria-label={GALLERY_LABELS.previous}
                onClick={previous}
                disabled={!hasPrevious}
              >
                <Icon name="arrow_back" />
              </button>
            )}
            <div ref={trackRef} className="carousel-viewport">
              <ul className="carousel-track" style={{ '--carousel-index': activeIndex }}>
                {GALLERY_PHOTOS.map((photo, index) => (
                  <li
                    key={photo.file}
                    className={
                      index === activeIndex
                        ? 'carousel-slide carousel-slide-active'
                        : 'carousel-slide'
                    }
                    aria-roledescription="diapositiva"
                    aria-label={GALLERY_LABELS.slide(index + 1, total)}
                    aria-hidden={index !== activeIndex}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="carousel-image"
                    />
                  </li>
                ))}
              </ul>
            </div>
            {total > 1 && (
              <button
                type="button"
                className="carousel-arrow"
                aria-label={GALLERY_LABELS.next}
                onClick={next}
                disabled={!hasNext}
              >
                <Icon name="arrow_forward" />
              </button>
            )}
          </div>

          {total > 1 && (
            <div className="carousel-dots">
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
          )}
        </div>
      </div>
    </section>
  );
}
