type Props = {
  className?: string;
};

export default function PlaneMark({ className = "" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 28c14-2 32-5 52-6l38-9 18 6-16 5c-12 1-28 2-40 3l-8 12-16-1 10-11c-14 1-28 2-38 3z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M22 26 10 14l16 11"
        fill="currentColor"
        opacity="0.85"
      />
      <path d="M86 20h18" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
    </svg>
  );
}
