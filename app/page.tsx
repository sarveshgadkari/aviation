import Hero from "@/components/Hero";
import HomePages from "@/components/HomePages";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <HomePages />
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: "var(--bg-2)" }}>
        <div className="compass-rose" aria-hidden="true" />
        <div className="wrap text-center relative">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="eyebrow-line" />
              {site.regionLabel}
            </p>
            <h2 className="display-title mt-5 text-[clamp(2rem,5vw,3.4rem)] max-w-3xl mx-auto">
              Ready for <em className="display-italic">takeoff?</em>
            </h2>
            <div className="cta-group mt-8 justify-center">
              <Link href="/students" className="btn-solid px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
                Apply as a Student
              </Link>
              <Link href="/contact" className="btn-outline px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
