import Image from "next/image";
import Atmosphere from "@/components/Atmosphere";
import Logo from "@/components/Logo";

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
    <section className="page-hero min-h-[78vh]">
      <div className="page-hero-media">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
      </div>
      <Atmosphere />
      <div className="page-hero-shade" />
      <div className="wrap relative w-full pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mb-6 animate-rise">
          <Logo size={72} />
        </div>
        {children && <div className="mb-6 animate-rise-delay-1">{children}</div>}
        <h1 className="display-title text-[clamp(3rem,8vw,6rem)] max-w-4xl animate-rise-delay-1">
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
            className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed animate-rise-delay-2"
            style={{ color: "var(--ink-soft)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
