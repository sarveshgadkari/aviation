import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Students",
  description:
    "Discovery flights, Summer Flight Academy 2026, mentorship, drone certification, career day, and scholarships for students in the Mid-South Region (Arkansas, Tennessee, Mississippi).",
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

export default function StudentsPage() {
  const s = site.studentOpportunities;

  return (
    <>
      <PageHero
        title="Student"
        italic="Opportunities"
        subtitle={s.body}
        image="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Small aircraft parked on an airfield runway"
      >
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Grades 6–12 · Free
        </p>
      </PageHero>

      <section className="wrap py-16 sm:py-24 md:py-32">
        <Reveal>
          <h2 className="display-title text-[clamp(2rem,4.5vw,3.4rem)] max-w-3xl">
            Discovery Flights, Camp, <em className="display-italic">Mentorship & More</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {s.items.map((item, i) => (
            <Reveal key={item.title} as="article" delay={i * 70} className="luxury-card p-5 sm:p-7 md:p-8">
              <span className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                Opportunity {ROMAN[i]} · {item.age}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl mt-4 leading-tight">{item.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
                Outcome: {item.outcome}
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {item.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-28" style={{ background: "var(--bg-2)" }}>
        <div className="wrap max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Summer 2026
            </p>
            <h2 className="display-title mt-5 text-[clamp(2rem,4.5vw,3.4rem)]">
              Apply for Summer <em className="display-italic">Flight Academy</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              No prior flight experience is required. Share your name, school,
              grade, and a short note about why you want to fly — we&apos;ll follow
              up with next steps for students and families.
            </p>
            <div className="cta-group mt-10">
              <a
                href={`mailto:${site.contact.email}?subject=Summer%20Flight%20Academy%202026%20Application&body=Student%20name%3A%20%0ASchool%3A%20%0AGrade%3A%20%0AParent%2Fguardian%20email%3A%20%0A%0AWhy%20I%20want%20to%20fly%3A%20`}
                className="btn-solid px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]"
              >
                Start Application
              </a>
              <a
                href={`mailto:${site.contact.email}?subject=Parent%20Info%20Packet%20Request&body=Please%20send%20the%20parent%20info%20packet.%0A%0AName%3A%20%0AStudent%20grade%3A%20%0AEmail%3A%20`}
                className="btn-outline px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]"
              >
                Download Parent Info Packet
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
