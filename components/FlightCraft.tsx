import PlaneMark from "@/components/PlaneMark";

type Props = {
  variant?: "hero" | "page" | "footer";
};

export default function FlightCraft({ variant = "hero" }: Props) {
  return (
    <div className={`flight-layer flight-layer-${variant}`} aria-hidden="true">
      <div className={`flight-craft flight-craft-${variant}`}>
        <span className="flight-contrail" />
        <PlaneMark className="flight-plane" />
      </div>
      {variant === "hero" ? (
        <div className="flight-craft flight-craft-alt">
          <span className="flight-contrail flight-contrail-thin" />
          <PlaneMark className="flight-plane flight-plane-sm" />
        </div>
      ) : null}
    </div>
  );
}
