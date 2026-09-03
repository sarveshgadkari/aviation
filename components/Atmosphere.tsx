const stars = [
  { t: "8%", l: "6%", d: "0s", s: 2 },
  { t: "14%", l: "18%", d: "1.2s", s: 1 },
  { t: "22%", l: "31%", d: "0.4s", s: 2 },
  { t: "11%", l: "48%", d: "1.8s", s: 1 },
  { t: "28%", l: "62%", d: "0.7s", s: 2 },
  { t: "7%", l: "74%", d: "2.1s", s: 1 },
  { t: "19%", l: "86%", d: "0.9s", s: 2 },
  { t: "36%", l: "12%", d: "1.5s", s: 1 },
  { t: "42%", l: "41%", d: "2.4s", s: 2 },
  { t: "33%", l: "79%", d: "0.3s", s: 1 },
  { t: "48%", l: "91%", d: "1.1s", s: 2 },
  { t: "16%", l: "57%", d: "1.7s", s: 1 },
  { t: "54%", l: "24%", d: "0.6s", s: 1 },
  { t: "61%", l: "68%", d: "2s", s: 2 },
  { t: "70%", l: "9%", d: "1.3s", s: 1 },
  { t: "66%", l: "52%", d: "0.2s", s: 1 },
  { t: "75%", l: "83%", d: "1.9s", s: 2 },
  { t: "82%", l: "37%", d: "0.8s", s: 1 },
];

type Props = {
  showRunway?: boolean;
};

export default function Atmosphere({ showRunway = false }: Props) {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere-grid" />
      <div className="atmosphere-orb atmosphere-orb-a" />
      <div className="atmosphere-orb atmosphere-orb-b" />
      <div className="sky-stars">
        {stars.map((star, i) => (
          <span
            key={i}
            className="sky-star"
            style={{
              top: star.t,
              left: star.l,
              width: star.s,
              height: star.s,
              animationDelay: star.d,
            }}
          />
        ))}
      </div>
      <div className="cloud-wisp cloud-wisp-a" />
      <div className="cloud-wisp cloud-wisp-b" />
      <div className="radar">
        <span className="radar-ring" />
        <span className="radar-ring radar-ring-2" />
        <span className="radar-sweep" />
        <span className="radar-blip" />
        <span className="radar-cross" />
      </div>
      {showRunway ? (
        <div className="runway">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="runway-light" style={{ animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      ) : null}
      <div className="atmosphere-noise" />
    </div>
  );
}
