import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with us as a school, aviation mentor, or sponsor to build the next aviation workforce across the Mid-South Region (Arkansas, Tennessee, Mississippi).",
};

export default function PartnersPage() {
  const p = site.partners;

  return (
    <>
      <PageHero
        title="Partner"
        italic="With Us"
        subtitle={p.body}
        image="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Aircraft on the airfield at dusk"
      >
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Schools · Industry · Sponsors
        </p>
      </PageHero>

      <section className="wrap py-24 md:py-32">
        <div className="grid lg:grid-cols-3 gap-5">
          {p.groups.map((g, i) => (
            <Reveal key={g.id} delay={i * 80}>
              <article id={g.id} className="luxury-card h-full p-8 scroll-mt-28">
                <span className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                  Track {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl mt-4 leading-tight">{g.title}</h2>
                <p className="mt-4 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {g.detail}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
                  You receive: {g.receive}
                </p>
                <Link
                  href="/contact"
                  className="btn-solid inline-block mt-8 px-5 py-3 text-[0.72rem] uppercase tracking-[0.16em]"
                >
                  {g.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-28" style={{ background: "var(--bg-2)" }}>
        <div className="wrap max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Why It Matters
            </p>
            <h2 className="display-title mt-5 text-[clamp(2rem,4.5vw,3.6rem)]">
              Build the Mid-South Aviation <em className="display-italic">Pipeline</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Every school club, mentor hour, and sponsored discovery flight puts
              a student closer to a real career in the cockpit, hangar, tower, or
              control room. Your support becomes someone&apos;s first clear view of
              what&apos;s possible.
            </p>
            <Link
              href="/contact"
              className="btn-solid inline-block mt-10 px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]"
            >
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
