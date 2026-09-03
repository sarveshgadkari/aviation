"use client";

import { useEffect, useState } from "react";

function pad(n: number, width = 3) {
  return String(Math.floor(n)).padStart(width, "0");
}

export default function FlightHud() {
  const [heading, setHeading] = useState(248);
  const [alt, setAlt] = useState(8420);
  const [ias, setIas] = useState(164);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = window.setInterval(() => {
      setHeading((h) => (h + 1) % 360);
      setAlt((a) => a + (Math.random() > 0.45 ? 8 : -4));
      setIas((s) => Math.min(188, Math.max(148, s + (Math.random() > 0.5 ? 1 : -1))));
    }, 140);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flight-hud" aria-hidden="true">
      <div className="flight-hud-cell">
        <span>HDG</span>
        <strong>{pad(heading)}°</strong>
      </div>
      <div className="flight-hud-cell">
        <span>ALT</span>
        <strong>{Math.round(alt).toLocaleString()}</strong>
      </div>
      <div className="flight-hud-cell">
        <span>IAS</span>
        <strong>{ias}</strong>
      </div>
    </div>
  );
}
