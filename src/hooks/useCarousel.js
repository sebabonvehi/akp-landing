import { useCallback, useEffect, useRef, useState } from 'react';

const SWIPE_THRESHOLD = 40;

// Holds the active slide of a crossfade carousel and maps horizontal swipes to prev/next.
export function useCarousel(count) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      if (count === 0) return;
      setActiveIndex((index + count) % count);
    },
    [count],
  );

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % count), [count]);
  const previous = useCallback(() => setActiveIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let startX = null;
    const handleStart = (event) => {
      startX = event.clientX;
    };
    const handleEnd = (event) => {
      if (startX === null) return;
      const delta = event.clientX - startX;
      startX = null;
      if (delta <= -SWIPE_THRESHOLD) next();
      else if (delta >= SWIPE_THRESHOLD) previous();
    };

    track.addEventListener('pointerdown', handleStart);
    track.addEventListener('pointerup', handleEnd);
    track.addEventListener('pointercancel', handleEnd);
    return () => {
      track.removeEventListener('pointerdown', handleStart);
      track.removeEventListener('pointerup', handleEnd);
      track.removeEventListener('pointercancel', handleEnd);
    };
  }, [next, previous]);

  return { trackRef, activeIndex, goTo, next, previous };
}
