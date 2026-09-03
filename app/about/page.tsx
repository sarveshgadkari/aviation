import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import StatCounter from "@/components/StatCounter";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our mission: build the Mid-South's next generation of pilots, engineers, and aerospace leaders — inspired by the Tuskegee Airmen.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        italic="Mid-South"
        subtitle={site.mission.short}
        image="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Aircraft in flight against a clear sky"
      >
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Our Story
        </p>
      </PageHero>

      <section className="wrap py-16 sm:py-24 md:py-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Our Mission
          </p>
          <h2 className="display-title mt-5 text-[clamp(2rem,4.5vw,3.4rem)]">
            {site.mission.short}
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {site.mission.statement}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="luxury-card p-5 sm:p-8">
            <p className="text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
              Why we exist
            </p>
            <p className="mt-4 font-display italic text-2xl leading-snug">{site.about.story}</p>
          </blockquote>
        </Reveal>
      </section>

      <section className="py-16 sm:py-24 md:py-32" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Impact
            </p>
            <h2 className="display-title mt-5 text-[clamp(2rem,4.5vw,3.4rem)] max-w-2xl">
              {site.impact.heading}
            </h2>
          </Reveal>
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
            {site.impact.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <p className="display-title text-3xl sm:text-5xl md:text-6xl" style={{ color: "var(--gold-2)" }}>
                  <StatCounter value={stat.value} />
                </p>
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
            {site.about.impactNote}
          </p>
          <div className="cta-group mt-10">
            <Link href="/students" className="btn-solid px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
              Student Opportunities
            </Link>
            <Link href="/partners" className="btn-outline px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
