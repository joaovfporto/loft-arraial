import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { getContent, reservationLink } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function LocalizedLoftPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);

  return (
    <main>
      <section className="page-hero">
        <div className="site-shell">
          <div className="page-hero-card">
            <span className="eyebrow">{content.loft.eyebrow}</span>
            <h1 className="section-title">{content.loft.title}</h1>
            <p className="section-copy">{content.loft.text}</p>
            <div className="pill-list">
              {content.loft.pills.map((pill) => (
                <span className="pill" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell two-column-copy">
          <div className="surface-card info-card">
            <span className="eyebrow">{content.loft.descriptionTitle}</span>
            <h2 className="section-title">{content.loft.descriptionTitle}</h2>
            {content.loft.descriptionText.map((text) => (
              <p key={text} className="body-copy">
                {text}
              </p>
            ))}
          </div>
          <div className="surface-card info-card">
            <span className="eyebrow">{content.loft.capacityTitle}</span>
            <h2 className="section-title">{content.loft.capacityTitle}</h2>
            <p className="body-copy">{content.loft.capacityText}</p>
            <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
              {content.common.reserveNow}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <span className="eyebrow">{content.loft.amenitiesTitle}</span>
          <h2 className="section-title">{content.loft.amenitiesTitle}</h2>
          <p className="section-copy">{content.loft.amenitiesText}</p>
          <div className="section-grid grid-2">
            {content.loft.amenities.map((item) => (
              <article key={item} className="surface-card amenity-card">
                <h3 className="card-title" style={{ fontSize: "1.3rem", marginBottom: 8 }}>
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid grid-2">
          <div className="surface-card info-card">
            <span className="eyebrow">{content.loft.rulesTitle}</span>
            <h2 className="section-title">{content.loft.rulesTitle}</h2>
            <ul className="list-clean">
              {content.loft.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card info-card">
            <span className="eyebrow">{content.loft.condoTitle}</span>
            <h2 className="section-title">{content.loft.condoTitle}</h2>
            <ul className="list-clean">
              {content.loft.condo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        locale={typedLocale}
        eyebrow={content.home.ctaEyebrow}
        title={content.loft.ctaTitle}
        description={content.loft.ctaText}
        reserveLabel={content.common.reserveExternal}
        contactLabel={content.common.talkToUs}
      />
    </main>
  );
}
