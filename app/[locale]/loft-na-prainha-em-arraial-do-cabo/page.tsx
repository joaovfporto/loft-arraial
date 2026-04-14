import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/section-heading";
import { getContent, reservationLink } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

const differentiatorIcons: Record<string, string> = {
  PA: "🏖",
  FV: "🏊",
  PR: "📍",
  FM: "👨‍👩‍👧",
  LT: "🧭",
  VL: "☀️",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);

  return {
    title: content.seoPage.title,
    description: content.seoPage.text,
  };
}

export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);

  return (
    <main>
      <section className="page-hero">
        <div className="site-shell">
          <div className="page-hero-card seo-landing-card">
            <span className="eyebrow">{content.seoPage.eyebrow}</span>
            <h1 className="section-title seo-landing-title">{content.seoPage.title}</h1>
            <p className="section-copy seo-landing-copy">{content.seoPage.text}</p>
            <ul className="list-clean seo-landing-list">
              {content.seoPage.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="button-row seo-landing-actions">
              <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
                {content.seoPage.primaryCta}
              </a>
              <a href={reservationLink} target="_blank" rel="noreferrer" className="button-secondary">
                {content.seoPage.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow={content.seoPage.differentiatorsEyebrow}
            title={content.seoPage.differentiatorsTitle}
            description={content.seoPage.differentiatorsText}
          />

          <div className="section-grid grid-3">
            {content.home.differentiators.map((item) => (
              <article key={item.title} className="surface-card feature-card">
                <div className="feature-card-content">
                  <div className="feature-icon" aria-hidden="true">
                    <span>{differentiatorIcons[item.icon] ?? "✦"}</span>
                  </div>
                  <h3 className="card-title feature-title">{item.title}</h3>
                  <p className="body-copy feature-description">{item.description}</p>
                </div>
                <a href={reservationLink} target="_blank" rel="noreferrer" className="feature-cta">
                  {content.common.reserveNow}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid grid-2">
          <article className="surface-card info-card">
            <span className="eyebrow">{content.seoPage.locationEyebrow}</span>
            <h2 className="section-title">{content.seoPage.locationTitle}</h2>
            <p className="body-copy">{content.seoPage.locationText}</p>
            <ul className="list-clean">
              {content.seoPage.locationBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="surface-card info-card">
            <span className="eyebrow">{content.seoPage.locationEyebrow}</span>
            <h2 className="section-title">{content.seoPage.title}</h2>
            <p className="body-copy">{content.home.heroText}</p>
            <div className="pill-list">
              {content.seoPage.searchTerms.map((term) => (
                <span className="pill" key={term}>
                  {term}
                </span>
              ))}
            </div>
          </article>

        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow={content.seoPage.socialEyebrow}
            title={content.seoPage.socialTitle}
            description={content.seoPage.socialText}
          />

          <div className="section-grid grid-3">
            {content.home.testimonials.map((testimonial) => (
              <article key={testimonial.author} className="surface-card testimonial-card">
                <blockquote>“{testimonial.quote}”</blockquote>
                <div className="testimonial-author">{testimonial.author}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="cta-banner">
            <h2 className="section-title" style={{ color: "#fff" }}>
              {content.seoPage.ctaTitle}
            </h2>
            <p className="section-copy" style={{ color: "rgba(255,255,255,0.84)" }}>
              {content.seoPage.ctaText}
            </p>
            <div className="button-row">
              <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
                {content.seoPage.primaryCta}
              </a>
              <a href={reservationLink} target="_blank" rel="noreferrer" className="button-ghost">
                {content.seoPage.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
