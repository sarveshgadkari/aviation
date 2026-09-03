import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact us about student applications, parent info packets, school partnerships, mentoring, or sponsorship across the Mid-South Region (Arkansas, Tennessee, Mississippi).",
};

export default function ContactPage() {
  const c = site.contact;

  return (
    <>
      <PageHero
        title="Strategic Inquiry &"
        italic="Partnership"
        subtitle={c.body}
        image="https://images.unsplash.com/photo-1540962351504-0295b178bf47?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Propeller aircraft on the tarmac at dusk"
      >
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Get In Touch
        </p>
      </PageHero>

      <section className="wrap py-16 sm:py-24 md:py-32 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
        <Reveal>
          <h2 className="display-title text-4xl md:text-5xl leading-tight">
            Who Should Reach Out
          </h2>
          <ul className="mt-10 space-y-8">
            {c.groups.map((g) => (
              <li key={g.title}>
                <h3 className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                  {g.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {g.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
            Email
          </p>
          <a
            href={`mailto:${c.email}`}
            className="mt-2 inline-block text-xl break-all"
            style={{ color: "var(--gold-2)" }}
          >
            {c.email}
          </a>
          <p className="mt-6 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Mid-South Region (Arkansas, Tennessee, Mississippi) · Serving students in grades 6–12
          </p>
        </Reveal>

        <div className="grid gap-6 self-start">
          <Reveal>
            <div id="parent-packet" className="luxury-card p-5 sm:p-8 md:p-10 scroll-mt-28">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                Parent Info Packet
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Request the parent overview packet for Summer 2026 — what students
                do, what families need to know, and how to apply.
              </p>
              <a
                href={`mailto:${c.email}?subject=Parent%20Info%20Packet%20Request&body=Please%20send%20the%20parent%20info%20packet.%0A%0AName%3A%20%0AStudent%20grade%3A%20%0AEmail%3A%20`}
                className="btn-solid inline-block mt-6 px-6 py-3 text-[0.72rem] uppercase tracking-[0.16em]"
              >
                Request Packet
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="luxury-card p-5 sm:p-8 md:p-10">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
