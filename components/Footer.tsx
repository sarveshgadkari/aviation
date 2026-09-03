import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

const columns = [
  { href: "/about", label: "About Mid-South", group: "Enterprise" },
  { href: "/programs", label: "Our Programs", group: "Enterprise" },
  { href: "/partners", label: "Partner Ecosystem", group: "Enterprise" },
  { href: "/about", label: "Our Heritage", group: "Enterprise" },
  { href: "/students", label: "Student Pathways", group: "Divisions" },
  { href: "/programs", label: "Flight Academy", group: "Divisions" },
  { href: "/programs#drone-technology", label: "Drone Technology", group: "Divisions" },
  { href: "/programs", label: "Career Pathways", group: "Divisions" },
  { href: "/contact", label: "Strategic Inquiry", group: "Connect" },
  { href: "/partners", label: "Partnership", group: "Connect" },
  { href: "/partners#sponsors", label: "Sponsorship", group: "Connect" },
  { href: "/students", label: "Apply Now", group: "Connect" },
];

export default function Footer() {
  const groups = ["Enterprise", "Divisions", "Connect"] as const;

  return (
    <footer className="relative overflow-hidden border-t" style={{ borderColor: "var(--line-soft)", background: "#06070b" }}>
      <div className="wrap py-12 sm:py-16 grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo
            size={72}
            showTitle
            markClassName="h-12 w-12 md:h-[72px] md:w-[72px]"
            className="[&_.font-display]:text-2xl md:[&_.font-display]:text-3xl"
          />
          <p className="mt-3 text-sm italic display-italic" style={{ color: "var(--gold-2)" }}>
            Building Aviators. Driving Mid-South Impact.
          </p>
          <p className="mt-5 text-sm leading-relaxed max-w-sm" style={{ color: "var(--ink-soft)" }}>
            A free aviation initiative for students in the Mid-South Region
            (Arkansas, Tennessee, Mississippi) in grades 6–12, inspired by the
            Tuskegee Airmen legacy.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group}>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] mb-4" style={{ color: "var(--gold)" }}>
              {group}
            </p>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--ink-soft)" }}>
              {columns
                .filter((c) => c.group === group)
                .map((c) => (
                  <li key={`${group}-${c.label}`}>
                    <Link href={c.href} className="hover:text-[var(--cream)] transition-colors">
                      {c.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="wrap py-5 flex flex-col sm:flex-row gap-3 justify-between items-center text-center sm:text-left text-[0.65rem] sm:text-[0.7rem] tracking-[0.12em] uppercase border-t"
        style={{ borderColor: "var(--line-soft)", color: "var(--muted)" }}
      >
        <span>
          © {new Date().getFullYear()} {site.orgName}. All rights reserved.
        </span>
        <span style={{ color: "var(--gold)" }}>Est. · Mid-South Region</span>
      </div>
    </footer>
  );
}
