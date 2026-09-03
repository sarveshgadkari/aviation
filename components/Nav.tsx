"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/students", label: "Students" },
  { href: "/programs", label: "Programs" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="wrap flex items-center justify-between py-3 md:py-4 gap-3">
        <Link href="/" className="min-w-0">
          <Logo size={48} priority showTitle />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[0.72rem] uppercase tracking-[0.18em]">
          {links
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "is-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/contact"
            className="btn-outline hidden md:inline-block px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em]"
          >
            Inquiry
          </Link>
          <Link
            href="/students"
            className="btn-solid hidden sm:inline-block px-3 md:px-4 py-2 text-[0.68rem] uppercase tracking-[0.16em]"
          >
            Apply Now
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center"
            style={{ color: "var(--cream)" }}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden absolute inset-x-0 top-full overflow-y-auto border-t"
          style={{
            minHeight: "calc(100dvh - 64px)",
            borderColor: "var(--line-soft)",
            background: "#07080c",
          }}
        >
          <nav className="wrap flex flex-col py-6 gap-1 text-[0.78rem] uppercase tracking-[0.18em]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3"
                style={{ color: pathname === link.href ? "var(--gold-2)" : "var(--cream)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/students"
              className="btn-solid mt-4 px-4 py-3 text-center"
              onClick={() => setOpen(false)}
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="btn-outline mt-2 px-4 py-3 text-center"
              onClick={() => setOpen(false)}
            >
              Inquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
