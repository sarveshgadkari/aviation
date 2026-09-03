import Link from "next/link";
import Reveal from "@/components/Reveal";
import { programAreas } from "@/data/programAreas";
import { site } from "@/data/site";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export default function ProgramAreasPreview() {
  return (
    <section id="programs" className="py-16 sm:py-24 md:py-32" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Program Architecture
          </p>
          <h2 className="display-title mt-5 text-[clamp(2.2rem,5vw,3.8rem)] max-w-3xl">
            Our Strategic <em className="display-italic">Pathways</em>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {site.pathwaysPitch}
          </p>
        </Reveal>

        <ul className="mt-14 grid md:grid-cols-2 gap-5">
          {programAreas.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} as="li" delay={i * 80}>
              <Link href={`/programs#${p.slug}`} className="luxury-card block h-full p-5 sm:p-7 md:p-8 group">
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                    Pathway {ROMAN[i]}
                  </span>
                  <span className="badge-live">Active Pathway</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl mt-6 leading-tight group-hover:text-[var(--gold-2)] transition-colors">
                  {p.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {p.description.slice(0, 180)}…
                </p>
                <ul className="mt-6 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                  {p.learn.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-px w-4 flex-none" style={{ background: "var(--gold)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="cta-group mt-12">
          <Link href="/programs" className="btn-outline px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
            View All Programs & Pathways
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
