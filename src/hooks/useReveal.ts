import { useEffect, useRef, useState } from 'react';

// Adds the `in` class when an element scrolls into view so CSS can play the
// rise-in animation. One-shot: it stops observing after the first reveal.
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return { ref, className: shown ? 'reveal in' : 'reveal' };
}
