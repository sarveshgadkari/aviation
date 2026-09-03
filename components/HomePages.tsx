import Link from "next/link";
import Reveal from "@/components/Reveal";
import PlaneMark from "@/components/PlaneMark";

const pages = [
  {
    href: "/about",
    code: "01",
    title: "About",
    detail: "Our mission, heritage, and the Mid-South Region we serve.",
  },
  {
    href: "/students",
    code: "02",
    title: "Students",
    detail: "Discovery flights, Summer Flight Academy, mentorship, and scholarships.",
  },
  {
    href: "/programs",
    code: "03",
    title: "Programs",
    detail: "Flight academy, career day, and eight aviation career pathways.",
  },
  {
    href: "/partners",
    code: "04",
    title: "Partners",
    detail: "Schools, pilots, and sponsors building the regional pipeline.",
  },
  {
    href: "/contact",
    code: "05",
    title: "Contact",
    detail: "Apply, request a packet, or start a partnership conversation.",
  },
];

export default function HomePages() {
  return (
    <section id="pages" className="py-16 sm:py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Explore the Site
          </p>
          <h2 className="display-title mt-5 text-[clamp(2rem,5vw,3.6rem)] max-w-2xl">
            Five separate pages. <em className="display-italic">One mission.</em>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Each section lives on its own page. Open About, Students, Programs,
            Partners, or Contact from the menu — or start here.
          </p>
        </Reveal>

        <div className="flight-corridor mt-12" aria-hidden="true">
          <span className="flight-corridor-line" />
          <span className="flight-corridor-craft">
            <PlaneMark className="h-5 w-auto" />
          </span>
        </div>

        <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pages.map((page, i) => (
            <Reveal key={page.href} as="li" delay={i * 70}>
              <Link href={page.href} className="luxury-card block h-full p-6 sm:p-7 group">
                <span className="flex items-center justify-between gap-3">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
                    Waypoint {page.code}
                  </span>
                  <PlaneMark className="card-plane h-4 w-auto" />
                </span>
                <h3 className="font-display text-3xl mt-4 leading-tight group-hover:text-[var(--gold-2)] transition-colors">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {page.detail}
                </p>
                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.16em]" style={{ color: "var(--gold)" }}>
                  Open page →
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
