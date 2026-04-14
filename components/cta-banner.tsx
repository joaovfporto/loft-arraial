import { reservationLink } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

type CtaBannerProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  reserveLabel: string;
  contactLabel: string;
};

export function CtaBanner({
  locale,
  eyebrow,
  title,
  description,
  reserveLabel,
  contactLabel,
}: CtaBannerProps) {
  return (
    <section className="section">
      <div className="site-shell">
        <div className="cta-banner">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title" style={{ color: "#fff" }}>
            {title}
          </h2>
          <p className="section-copy" style={{ color: "rgba(255,255,255,0.8)" }}>
            {description}
          </p>
          <div className="button-row">
            <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
              {reserveLabel}
            </a>
            <a href={reservationLink} target="_blank" rel="noreferrer" className="button-ghost">
              {contactLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
