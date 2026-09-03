import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

export default function StudentOpportunities() {
  const s = site.studentOpportunities;
  return (
    <section id="students" className="py-16 sm:py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            For Students & Families
          </p>
          <h2 className="display-title mt-5 text-[clamp(2.2rem,5vw,3.8rem)] max-w-2xl">
            Explore Student <em className="display-italic">Opportunities</em>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {s.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {s.items.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 70}>
              <article className="luxury-card h-full p-6 md:p-7 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                    Opportunity {ROMAN[i]}
                  </span>
                  <span className="badge-live">Open</span>
                </div>
                <h3 className="font-display text-2xl mt-5 leading-tight">{item.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
                  {item.age}
                </p>
                <p className="mt-4 text-sm leading-relaxed flex-1" style={{ color: "var(--ink-soft)" }}>
                  {item.detail}
                </p>
                <p className="mt-5 text-sm" style={{ color: "var(--gold-2)" }}>
                  {item.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="cta-group mt-12">
          <Link href="/students" className="btn-solid px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
            {s.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
