import Image from "next/image";
import Atmosphere from "@/components/Atmosphere";

type Props = {
  title: string;
  italic?: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
};

export default function PageHero({
  title,
  italic,
  subtitle,
  image,
  imageAlt,
  children,
}: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero-media">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
      </div>
      <Atmosphere />
      <div className="page-hero-shade" />
      <div className="wrap relative w-full pb-12 pt-28 sm:pb-16 sm:pt-32 md:pb-24 md:pt-40">
        {children && <div className="mb-5 sm:mb-6 animate-rise">{children}</div>}
        <h1 className="display-title text-[clamp(2.35rem,10vw,6rem)] max-w-4xl animate-rise-delay-1 break-words">
          {title}
          {italic ? (
            <>
              {" "}
              <em className="display-italic" style={{ color: "var(--gold-2)" }}>
                {italic}
              </em>
            </>
          ) : null}
        </h1>
        {subtitle && (
          <p
            className="mt-5 sm:mt-6 max-w-2xl text-base md:text-xl leading-relaxed animate-rise-delay-2"
            style={{ color: "var(--ink-soft)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
