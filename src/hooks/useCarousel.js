import { useCallback, useEffect, useRef, useState } from 'react';

// Tracks the visible slide of a horizontal scroll-snap track and scrolls to a given slide.
export function useCarousel(count) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index));
        });
      },
      { root: track, threshold: 0.6 },
    );
    Array.from(track.children).forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [count]);

  const goTo = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track || count === 0) return;
      const target = (index + count) % count;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({
        left: track.children[target].offsetLeft - track.offsetLeft,
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    },
    [count],
  );

  return {
    trackRef,
    activeIndex,
    goTo,
    next: () => goTo(activeIndex + 1),
    previous: () => goTo(activeIndex - 1),
  };
}
