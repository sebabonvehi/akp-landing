import { useCallback, useEffect, useRef, useState } from 'react';

const SWIPE_THRESHOLD = 40;

// Holds the active slide of a bounded (non-looping) carousel and maps horizontal swipes to prev/next.
export function useCarousel(count) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      if (count === 0) return;
      setActiveIndex(Math.min(Math.max(index, 0), count - 1));
    },
    [count],
  );

  const next = useCallback(() => setActiveIndex((i) => Math.min(i + 1, count - 1)), [count]);
  const previous = useCallback(() => setActiveIndex((i) => Math.max(i - 1, 0)), []);

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

  const hasPrevious = activeIndex > 0;
  const hasNext = activeIndex < count - 1;

  return { trackRef, activeIndex, goTo, next, previous, hasPrevious, hasNext };
}
