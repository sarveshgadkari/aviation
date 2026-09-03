import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  markClassName?: string;
  priority?: boolean;
  showTitle?: boolean;
};

export const LOGO_SRC = "/logo.jpeg";
export const LOGO_ALT =
  "Tuskegee National Aviation Alumni Association — Milton Crenchaw and Luke Weathers";

export default function Logo({
  size = 48,
  className = "",
  markClassName = "h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12",
  priority = false,
  showTitle = false,
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-3 min-w-0 ${className}`}>
      <Image
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width={size}
        height={size}
        priority={priority}
        className={`shrink-0 rounded-full ${markClassName}`}
        style={{
          objectFit: "cover",
          boxShadow: "0 0 0 1px rgba(201,168,76,0.35), 0 8px 24px rgba(0,0,0,0.35)",
        }}
      />
      {showTitle ? (
        <span className="leading-tight min-w-0">
          <span className="block font-display text-[0.95rem] sm:text-[1.05rem] tracking-wide truncate">
            Mid-South
          </span>
          <span
            className="hidden sm:block text-[0.58rem] uppercase tracking-[0.16em]"
            style={{ color: "var(--muted)" }}
          >
            AR · TN · MS
          </span>
        </span>
      ) : null}
    </span>
  );
}
