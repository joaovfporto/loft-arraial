import type { DailyInfo } from "@/lib/weather";

type WeatherCardProps = {
  info: DailyInfo;
};

export function WeatherCard({ info }: WeatherCardProps) {
  return (
    <article className="surface-card info-card">
      <div className="section-grid grid-4">
        <div>
          <div className="metric-value" style={{ fontSize: "1.8rem" }}>
            {info.status}
          </div>
          <div className="metric-label">{info.note}</div>
        </div>
        <div>
          <div className="card-title" style={{ fontSize: "1.1rem" }}>
            {info.temperature}
          </div>
        </div>
        <div>
          <div className="card-title" style={{ fontSize: "1.1rem" }}>
            {info.wind}
          </div>
        </div>
        <div>
          <div className="card-title" style={{ fontSize: "1.1rem" }}>
            {info.sea}
          </div>
        </div>
      </div>
    </article>
  );
}
