import { useCallback, useEffect, useRef, useState } from 'react';

const SWIPE_THRESHOLD = 40;
// Drag resistance past the first/last slide, so the edge feels elastic instead of hard-stopped.
const EDGE_RESISTANCE = 0.3;

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

  const indexRef = useRef(activeIndex);
  useEffect(() => {
    indexRef.current = activeIndex;
  }, [activeIndex]);

  // The slides follow the pointer while dragging (via --carousel-drag), then snap on release.
  useEffect(() => {
    const viewport = trackRef.current;
    const strip = viewport?.firstElementChild;
    if (!viewport || !strip) return undefined;

    let startX = null;
    const setDrag = (px) => strip.style.setProperty('--carousel-drag', `${px}px`);

    const handleStart = (event) => {
      startX = event.clientX;
      viewport.setPointerCapture?.(event.pointerId);
      strip.classList.add('carousel-track-dragging');
    };
    const handleMove = (event) => {
      if (startX === null) return;
      const delta = event.clientX - startX;
      const atEdge =
        (delta > 0 && indexRef.current === 0) || (delta < 0 && indexRef.current === count - 1);
      setDrag(atEdge ? delta * EDGE_RESISTANCE : delta);
    };
    const handleEnd = (event) => {
      if (startX === null) return;
      const delta = event.clientX - startX;
      startX = null;
      strip.classList.remove('carousel-track-dragging');
      setDrag(0);
      if (delta <= -SWIPE_THRESHOLD) next();
      else if (delta >= SWIPE_THRESHOLD) previous();
    };

    viewport.addEventListener('pointerdown', handleStart);
    viewport.addEventListener('pointermove', handleMove);
    viewport.addEventListener('pointerup', handleEnd);
    viewport.addEventListener('pointercancel', handleEnd);
    return () => {
      viewport.removeEventListener('pointerdown', handleStart);
      viewport.removeEventListener('pointermove', handleMove);
      viewport.removeEventListener('pointerup', handleEnd);
      viewport.removeEventListener('pointercancel', handleEnd);
    };
  }, [count, next, previous]);

  const hasPrevious = activeIndex > 0;
  const hasNext = activeIndex < count - 1;

  return { trackRef, activeIndex, goTo, next, previous, hasPrevious, hasNext };
}
