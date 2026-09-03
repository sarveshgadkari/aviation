"use client";

import { useEffect, useRef, useState } from "react";

function parseStat(value: string) {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { prefix: "", n: 0, suffix: value, numeric: false };
  return { prefix: match[1], n: Number(match[2]), suffix: match[3], numeric: true };
}

export default function StatCounter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const parsed = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(parsed.numeric ? 0 : parsed.n);
  const [ready, setReady] = useState(!parsed.numeric);

  useEffect(() => {
    if (!parsed.numeric) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [parsed.numeric]);

  useEffect(() => {
    if (!ready || !parsed.numeric) return;
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) {
      setShown(parsed.n);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(parsed.n * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [ready, parsed.n, parsed.numeric]);

  return (
    <span ref={ref} className={className}>
      {parsed.numeric ? `${parsed.prefix}${shown}${parsed.suffix}` : value}
    </span>
  );
}
