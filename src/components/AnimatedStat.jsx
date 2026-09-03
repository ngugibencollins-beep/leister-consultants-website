import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number counting up when it scrolls into view.
 * value: the target string, e.g. "20MW", "3–6", "5", "$1B"
 * We parse the leading numeric portion and animate that, keeping any
 * prefix/suffix text (like "MW" or a leading "$") static.
 */
export default function AnimatedStat({ value, className = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  // Parse into prefix, numeric target, suffix — handles "20MW", "5", "3–6", "$1B"
  const match = String(value).match(/^([^\d]*)(\d+(?:\.\d+)?)([\s\S]*)$/);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!match || prefersReduced) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1100;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display === null ? (match ? `${match[1]}0${match[3]}` : value) : display}
    </span>
  );
}
