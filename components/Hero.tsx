import Image from "next/image";
import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import { site } from "@/data/site";

const stats = [
  { value: "6–12", label: "Student Grades" },
  { value: "Free", label: "Programs & Flights" },
  { value: "8", label: "Career Pathways" },
  { value: "3", label: "States · AR · TN · MS" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=80"
          alt="Aircraft wing above clouds at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
      </div>
      <Atmosphere />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,8,12,0.55) 0%, rgba(7,8,12,0.55) 40%, rgba(7,8,12,0.92) 100%)",
        }}
      />

      <div className="wrap relative w-full pt-32 pb-10 md:pt-40 md:pb-14">
        <p className="eyebrow animate-rise">
          <span className="eyebrow-line" />
          {site.hero.eyebrow}
        </p>

        <h1 className="display-title mt-7 text-[clamp(3rem,9vw,7.2rem)] max-w-5xl animate-rise-delay-1">
          {site.hero.headline}
          <span className="block display-italic" style={{ color: "var(--gold-2)" }}>
            {site.hero.headlineItalic}
          </span>
        </h1>

        <p
          className="mt-7 max-w-xl text-base md:text-lg leading-relaxed animate-rise-delay-2"
          style={{ color: "var(--ink-soft)" }}
        >
          {site.hero.subhead}
        </p>

        <div className="mt-10 flex flex-wrap gap-3 animate-rise-delay-3">
          {site.hero.ctas.slice(0, 2).map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={
                cta.primary
                  ? "btn-solid px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]"
                  : "btn-outline px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]"
              }
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative border-t" style={{ borderColor: "var(--line-soft)" }}>
        <div className="wrap grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-6 md:py-7 animate-rise-delay-4"
              style={{
                borderRight: i === stats.length - 1 ? "none" : "1px solid var(--line-soft)",
                paddingLeft: i === 0 ? 0 : undefined,
              }}
            >
              <p className="display-title text-3xl md:text-4xl" style={{ color: "var(--gold-2)" }}>
                {stat.value}
              </p>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a href="#intro" className="scroll-cue absolute right-6 md:right-10 bottom-28 md:bottom-36 animate-fade hidden md:flex">
        <span>Scroll</span>
        <span className="scroll-cue-bar" />
      </a>
    </section>
  );
}
