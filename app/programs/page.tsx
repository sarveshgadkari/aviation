import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { programAreas } from "@/data/programAreas";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Summer Flight Academy, mentorship, career day, GAMA Design Challenge, and eight aviation career pathways.",
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export default function ProgramsPage() {
  const named = site.namedPrograms;

  return (
    <>
      <PageHero
        title="Programs &"
        italic="Pathways"
        subtitle={named.intro}
        image="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Commercial aircraft flying through a clear blue sky"
      >
        <p className="eyebrow">
          <span className="eyebrow-line" />
          What We Offer
        </p>
      </PageHero>

      <section className="wrap py-16 sm:py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Featured Programs
          </p>
          <h2 className="display-title mt-5 text-[clamp(2rem,4.5vw,3.4rem)]">
            {named.heading}
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {named.items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <article id={item.slug} className="luxury-card p-5 sm:p-7 md:p-8 scroll-mt-28">
                <span className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                  Program {ROMAN[i]}
                </span>
                <h3 className="font-display text-3xl mt-4 leading-tight">{item.name}</h3>
                <p className="mt-4 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Career Pathways
            </p>
            <h2 className="display-title mt-5 text-[clamp(2rem,4.5vw,3.4rem)] max-w-3xl">
              Choose Your <em className="display-italic">Pathway</em>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              {site.pathwaysIntro}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="wrap py-16 md:py-24 grid gap-5">
        {programAreas.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 60}>
            <section id={p.slug} className="luxury-card p-5 sm:p-7 md:p-10 scroll-mt-28">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                  Pathway {ROMAN[i]} · {p.code}
                </span>
                <span className="badge-live">Active Pathway</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mt-5 leading-tight">{p.name}</h2>
              <p className="mt-4 max-w-3xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {p.description}
              </p>
              <div className="mt-10 grid md:grid-cols-3 gap-8">
                {[
                  { title: "What Students Could Learn", items: p.learn },
                  { title: "Possible Activities", items: p.activities },
                  { title: "Possible Partner Support", items: p.partners },
                ].map((col) => (
                  <div key={col.title}>
                    <h3 className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                      {col.title}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                      {col.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-px w-3 flex-none" style={{ background: "var(--gold)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      <section className="wrap py-20 md:py-24 text-center">
        <Reveal>
          <h2 className="display-title text-4xl md:text-5xl">
            Ready to <em className="display-italic">Start?</em>
          </h2>
          <div className="cta-group mt-8 justify-center">
            <Link href="/students" className="btn-solid px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
              Apply as a Student
            </Link>
            <Link href="/contact" className="btn-outline px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
              Talk With Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
