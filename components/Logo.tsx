import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
  showTitle?: boolean;
};

export const LOGO_SRC = "/logo.jpeg";
export const LOGO_ALT =
  "Tuskegee National Aviation Alumni Association — Milton Crenchaw and Luke Weathers";

export default function Logo({
  size = 48,
  className = "",
  priority = false,
  showTitle = false,
}: Props) {
  return (
    <span className={`inline-flex items-center gap-3 min-w-0 ${className}`}>
      <Image
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width={size}
        height={size}
        priority={priority}
        className="shrink-0 rounded-full"
        style={{
          width: size,
          height: size,
          objectFit: "cover",
          boxShadow: "0 0 0 1px rgba(201,168,76,0.35), 0 8px 24px rgba(0,0,0,0.35)",
        }}
      />
      {showTitle ? (
        <span className="leading-tight min-w-0">
          <span className="block font-display text-[1.05rem] tracking-wide">Mid-South</span>
          <span
            className="hidden sm:block text-[0.62rem] uppercase tracking-[0.18em]"
            style={{ color: "var(--muted)" }}
          >
            AR · TN · MS
          </span>
        </span>
      ) : null}
    </span>
  );
}
