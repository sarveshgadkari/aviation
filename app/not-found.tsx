import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col justify-center py-28 md:py-36">
      <p className="eyebrow">
        <span className="eyebrow-line" />
        404
      </p>
      <h1 className="display-title mt-5 text-[clamp(2.4rem,8vw,5rem)] max-w-2xl">
        This heading is off the chart.
      </h1>
      <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        That page is not on this flight plan. Return home or open a program pathway.
      </p>
      <div className="cta-group mt-8">
        <Link href="/" className="btn-solid px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
          Back Home
        </Link>
        <Link href="/programs" className="btn-outline px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.16em]">
          View Programs
        </Link>
      </div>
    </section>
  );
}
