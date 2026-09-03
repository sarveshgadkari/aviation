type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  italic,
  subtitle,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : ""}>
      <p className="eyebrow justify-center" style={align === "left" ? { justifyContent: "flex-start" } : undefined}>
        <span className="eyebrow-line" />
        {eyebrow}
      </p>
      <h2 className="display-title mt-5 text-[clamp(2.1rem,5vw,3.6rem)]">
        {title}
        {italic ? (
          <>
            {" "}
            <em className="display-italic">{italic}</em>
          </>
        ) : null}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
