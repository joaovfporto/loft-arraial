import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { getContent } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function LocalizedDestinationPage({
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
            <span className="eyebrow">{content.destination.eyebrow}</span>
            <h1 className="section-title">{content.destination.title}</h1>
            <p className="section-copy">{content.destination.text}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid grid-2">
          <div className="surface-card info-card">
            <SectionHeading
              eyebrow={content.destination.eyebrow}
              title={content.destination.tourismTitle}
              description={content.destination.text}
            />
            {content.destination.tourismText.map((text) => (
              <p key={text} className="body-copy">
                {text}
              </p>
            ))}
          </div>
          <div className="surface-card info-card">
            <span className="eyebrow">{content.destination.prainhaTitle}</span>
            <h2 className="section-title">{content.destination.prainhaTitle}</h2>
            <ul className="list-clean">
              {content.destination.prainhaBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow={content.destination.beachesTitle}
            title={content.destination.beachesTitle}
            description={content.destination.beachesText}
          />
          <div className="section-grid grid-2">
            {content.destination.beaches.map((beach) => (
              <article key={beach.title} className="surface-card info-card">
                <h3 className="card-title" style={{ fontSize: "1.45rem", marginBottom: 10 }}>
                  {beach.title}
                </h3>
                <p className="body-copy">{beach.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid grid-2">
          <div className="surface-card info-card">
            <span className="eyebrow">{content.destination.tipsTitle}</span>
            <h2 className="section-title">{content.destination.tipsTitle}</h2>
            <ul className="list-clean">
              {content.destination.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card info-card">
            <span className="eyebrow">3 dias</span>
            <h2 className="section-title">{content.destination.threeDaysTitle}</h2>
            {content.destination.threeDaysText.map((text) => (
              <p key={text} className="body-copy">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        locale={typedLocale}
        eyebrow={content.home.ctaEyebrow}
        title={content.destination.ctaTitle}
        description={content.destination.ctaText}
        reserveLabel={content.common.reserveExternal}
        contactLabel={content.common.talkToUs}
      />
    </main>
  );
}
