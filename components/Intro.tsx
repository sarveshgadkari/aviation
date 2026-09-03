import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const pillars = [
  {
    title: "Regional Reach",
    detail: "Hands-on aviation education for students across the Mid-South Region (Arkansas, Tennessee, Mississippi).",
  },
  {
    title: "Proven Pathways",
    detail: "Flight, drones, maintenance, STEM, and workforce tracks toward real credentials.",
  },
  {
    title: "Industry Partners",
    detail: "A growing network of schools, pilots, airports, and sponsors building the pipeline.",
  },
];

export default function Intro() {
  return (
    <section id="intro" className="relative py-16 sm:py-24 md:py-32">
      <div className="wrap grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            About Mid-South
          </p>
          <h2 className="display-title mt-5 text-[clamp(2.2rem,5vw,3.8rem)] max-w-xl">
            Opening the Cockpit.
            <em className="block display-italic" style={{ color: "var(--gold-2)" }}>
              Building the Mid-South&apos;s Next Generation.
            </em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {site.intro.shortBody}
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {site.intro.body}
          </p>
          <div className="cta-group mt-8">
            <Link href="/about" className="btn-outline px-6 py-3 text-[0.72rem] uppercase tracking-[0.16em]">
              About Us
            </Link>
            <Link href="/programs" className="btn-solid px-6 py-3 text-[0.72rem] uppercase tracking-[0.16em]">
              See Career Pathways
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="luxury-card p-6 md:p-7">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={280}>
            <blockquote
              className="luxury-card p-6 md:p-8"
              style={{ borderColor: "var(--line)" }}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                Inspired by 1941
              </p>
              <p className="mt-4 font-display italic text-xl md:text-2xl leading-snug">
                “The Tuskegee Airmen proved what happens when talent is given a real chance to train.”
              </p>
              <p className="mt-4 text-xs tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
                Mid-South · Honoring that legacy
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
