import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const chapters = [
  {
    era: "1941 — The Inspiration",
    title: "The Tuskegee Airmen",
    body: "A generation of aviators proved that talent, given a real chance to train, can change history. Their example is the foundation of this program.",
  },
  {
    era: "The Beginning",
    title: "A Pipeline for the Mid-South",
    body: "The Mid-South Region (Arkansas, Tennessee, Mississippi) needed a stronger aviation workforce path — and young people needed a real first look at the cockpit, hangar, and flight deck.",
  },
  {
    era: "The Academy",
    title: "From Classrooms to Cockpits",
    body: "Discovery flights, simulators, drone labs, and mentorship became the practical way students try aviation before they choose a career.",
  },
  {
    era: "Today",
    title: "A Regional Initiative",
    body: "The Mid-South Youth Aviation Initiative now stands as a free, multi-pathway aviation program — with schools, pilots, and sponsors building the next generation of aviators across Arkansas, Tennessee, and Mississippi.",
  },
];

export default function Legacy() {
  const l = site.legacy;
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <Atmosphere />
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Our Heritage
          </p>
          <h2 className="display-title mt-5 text-[clamp(2.2rem,5vw,3.8rem)] max-w-3xl">
            {l.heading}. <em className="display-italic">{l.headingSub}</em>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {l.body}
          </p>
        </Reveal>

        <div className="timeline mt-16 grid gap-10 pl-8">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.title} delay={i * 90} className="relative">
              <div className="absolute -left-8 top-1">
                <span className="timeline-dot block" />
              </div>
              <p className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                {chapter.era}
              </p>
              <h3 className="font-display text-2xl md:text-3xl mt-2">{chapter.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {chapter.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link href="/about" className="btn-outline inline-block px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
            Read Our Story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
