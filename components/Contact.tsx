import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function Contact() {
  const c = site.contact;
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <Atmosphere />
        <div className="wrap relative text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="eyebrow-line" />
              Strategic Partnership
            </p>
            <h2 className="display-title mt-5 text-[clamp(2.4rem,6vw,4.6rem)] max-w-4xl mx-auto">
              Ready to Build Something{" "}
              <em className="display-italic">Extraordinary Together?</em>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              {c.body}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-solid px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
                Initiate Inquiry
              </Link>
              <Link href="/programs" className="btn-outline px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
                Explore Programs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32" style={{ background: "var(--bg-2)" }}>
        <div className="wrap grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Get in Touch
            </p>
            <h2 className="display-title mt-5 text-[clamp(2.1rem,4.5vw,3.4rem)]">
              Strategic Inquiry & <em className="display-italic">Partnership</em>
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              We welcome students, families, schools, pilots, and sponsors across the Mid-South Region (Arkansas, Tennessee, Mississippi). Tell us how you want to get involved.
            </p>
            <ul className="mt-10 space-y-6">
              {c.groups.map((g) => (
                <li key={g.title}>
                  <p className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                    {g.title}
                  </p>
                  <p className="mt-1" style={{ color: "var(--ink-soft)" }}>
                    {g.detail}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
              Response time · Within 24 hours
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="luxury-card p-6 md:p-8">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
