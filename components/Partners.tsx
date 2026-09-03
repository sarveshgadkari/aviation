import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function Partners() {
  const p = site.partners;
  return (
    <section id="partners" className="py-24 md:py-32" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Strategic Network
          </p>
          <h2 className="display-title mt-5 text-[clamp(2.2rem,5vw,3.8rem)] max-w-3xl">
            Our Ecosystem of <em className="display-italic">Partners</em>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {p.body}
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {p.groups.map((g, i) => (
            <Reveal key={g.id} delay={i * 90}>
              <article id={g.id} className="luxury-card h-full p-7 scroll-mt-28">
                <p className="text-[0.7rem] tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-3xl mt-4 leading-tight">{g.title}</h3>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {g.detail}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {g.receive.split("+").map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.62rem] uppercase tracking-[0.12em] px-2.5 py-1"
                      style={{ border: "1px solid var(--line)", color: "var(--gold-2)" }}
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
                <Link
                  href="/partners"
                  className="inline-block mt-7 text-[0.72rem] uppercase tracking-[0.16em]"
                  style={{ color: "var(--gold)" }}
                >
                  {g.cta} →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
