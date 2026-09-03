import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { site } from "@/data/site";

const extras = [
  { value: "3", label: "States · AR · TN · MS" },
];

export default function Impact() {
  const i = site.impact;
  const stats = [...i.stats, ...extras].slice(0, 4);

  return (
    <section className="border-y" style={{ borderColor: "var(--line-soft)" }}>
      <div className="wrap py-16 md:py-20">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Impact
          </p>
          <h2 className="display-title mt-4 text-[clamp(1.8rem,4vw,2.8rem)] max-w-2xl">
            {i.heading}
          </h2>
        </Reveal>
        <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, n) => (
            <Reveal key={stat.label} delay={n * 80}>
              <p className="display-title text-3xl sm:text-5xl md:text-6xl" style={{ color: "var(--gold-2)" }}>
                <StatCounter value={stat.value} />
              </p>
              <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs tracking-[0.08em] uppercase" style={{ color: "var(--muted)" }}>
          {i.note}
        </p>
      </div>
    </section>
  );
}
