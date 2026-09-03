import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function Mission() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20" style={{ background: "var(--bg-2)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 80% at 90% 10%, rgba(201,168,76,0.12), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Our Mission
          </p>
          <p className="display-title mt-5 text-[clamp(1.7rem,4vw,2.7rem)] max-w-4xl leading-[1.15]">
            {site.mission.statement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
