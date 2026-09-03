type Props = {
  code: string;
  label: string;
  heading?: string;
  tone?: "ink" | "paper";
};

export default function WaypointTag({ code, label, heading }: Props) {
  return (
    <div className="waypoint">
      <span className="waypoint-mark" aria-hidden="true" />
      <span>{label}</span>
      {heading ? (
        <>
          <span className="opacity-40">/</span>
          <span>{code}</span>
        </>
      ) : null}
    </div>
  );
}
