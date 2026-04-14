import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { WeatherCard } from "@/components/weather-card";
import { getContent, reservationLink } from "@/lib/content";
import { getLocalePath, isValidLocale, localizedRoutes, type Locale } from "@/lib/i18n";
import { galleryImages, heroImage } from "@/lib/property-images";
import { getDailyInfo } from "@/lib/weather";

const differentiatorIcons: Record<string, string> = {
  PA: "🏖",
  FV: "🏊",
  PR: "📍",
  FM: "👨‍👩‍👧",
  LT: "🧭",
  VL: "☀️",
  PV: "🏊",
  CT: "📍",
  BF: "🏖",
  FA: "👨‍👩‍👧",
  CE: "🧭",
  NL: "☀️",
};

export default async function LocalizedHomePage({
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
  const weather = await getDailyInfo(typedLocale);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-shell hero-shell-full">
          <Image
            src={heroImage.src}
            alt={content.home.heroImageAlt}
            priority
            fill
            sizes="100vw"
            className="hero-media-image"
          />
          <div className="hero-overlay" />
          <div className="site-shell hero-content-wrap">
            <div className="hero-grid grid-2">
              <div className="hero-copy">
                <span className="eyebrow">{content.home.heroEyebrow}</span>
                <h1 className="display-title">{content.home.heroTitle}</h1>
                <p>{content.home.heroText}</p>
                <div className="button-row">
                  <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
                    {content.home.heroPrimaryCta}
                  </a>
                  <a href={reservationLink} target="_blank" rel="noreferrer" className="button-ghost">
                    {content.home.heroSecondaryCta}
                  </a>
                </div>
                <div className="floating-badge">{content.home.heroBadge}</div>
              </div>

              <aside className="hero-panel">
                <div className="hero-highlights">
                  {content.home.heroHighlights.map((item) => (
                    <div key={item.title} className="hero-highlight-item">
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
                <a href={reservationLink} target="_blank" rel="noreferrer" className="button-secondary hero-panel-cta">
                  {content.common.reserveExternal}
                </a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gallery-first">
        <div className="site-shell">
          <SectionHeading
            eyebrow={content.home.galleryEyebrow}
            title={content.home.galleryTitle}
            description={content.home.galleryText}
          />

          <div className="premium-gallery-grid">
            {galleryImages.map((image, index) => {
              const localizedImage = content.home.gallery[index];

              return (
                <article
                  key={image.name}
                  className={index === 0 ? "premium-gallery-card featured" : "premium-gallery-card"}
                >
                  <div className="premium-gallery-media">
                    <Image
                      src={image.src}
                      alt={localizedImage.title}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="premium-gallery-image"
                    />
                  </div>
                  <div className="premium-gallery-body">
                    <strong>{localizedImage.title}</strong>
                    <p>{localizedImage.description}</p>
                    <a href={reservationLink} target="_blank" rel="noreferrer" className="inline-cta">
                      {content.common.reserveNow}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section metrics-section">
        <div className="site-shell">
          <div className="section-grid grid-4">
            {content.home.metrics.map((metric) => (
              <div key={metric.label} className="surface-card metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section conversion-section">
        <div className="site-shell">
          <div className="surface-card info-card conversion-card">
            <span className="eyebrow conversion-eyebrow">{content.home.conversionEyebrow}</span>
            <h2 className="section-title conversion-title">{content.home.conversionTitle}</h2>
            <p className="body-copy conversion-copy">{content.home.conversionText}</p>
            <ul className="list-clean conversion-list">
              {content.home.conversionPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="button-row conversion-actions">
              <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary conversion-primary">
                {content.home.conversionPrimaryCta}
              </a>
              <a href={reservationLink} target="_blank" rel="noreferrer" className="button-secondary conversion-secondary">
                {content.home.conversionSecondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow={content.home.differentiatorsEyebrow}
            title={content.home.differentiatorsTitle}
            description={content.home.differentiatorsText}
          />

          <div className="section-grid grid-3">
            {content.home.differentiators.map((item) => (
              <article key={item.title} className="surface-card feature-card">
                <div className="feature-card-content">
                  <div className="feature-icon" aria-hidden="true">
                    <span>{differentiatorIcons[item.icon] ?? "✦"}</span>
                  </div>
                  <h3 className="card-title feature-title">
                    {item.title}
                  </h3>
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
          <div className="surface-card info-card">
            <span className="eyebrow">{content.home.familyEyebrow}</span>
            <h2 className="section-title">{content.home.familyTitle}</h2>
            <p className="body-copy">{content.home.familyText}</p>
            <ul className="list-clean">
              {content.home.familyBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card info-card">
            <span className="eyebrow">{content.home.weatherEyebrow}</span>
            <h2 className="section-title">{content.home.weatherTitle}</h2>
            <p className="body-copy">{content.home.weatherText}</p>
            <WeatherCard info={weather} />
            <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary" style={{ marginTop: 18 }}>
              {content.home.weatherCta}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow={content.home.testimonialsEyebrow}
            title={content.home.testimonialsTitle}
            description={content.home.testimonialsText}
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

      <CtaBanner
        locale={typedLocale}
        eyebrow={content.home.ctaEyebrow}
        title={content.home.ctaTitle}
        description={content.home.ctaText}
        reserveLabel={content.common.reserveExternal}
        contactLabel={content.common.talkToUs}
      />

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow={content.home.blogEyebrow}
            title={content.home.blogTitle}
            description={content.home.blogText}
          />
          <div className="section-grid grid-3">
            {content.blog.posts.map((post) => (
              <article key={post.slug} className="surface-card article-card">
                <div
                  className="gallery-item"
                  style={{
                    minHeight: 210,
                    marginBottom: 18,
                    background: `url("${post.cover}") center/cover no-repeat`,
                  }}
                />
                <div className="article-meta">
                  <span className="pill">{post.category}</span>
                  <span className="pill">{post.readTime}</span>
                </div>
                <h3 className="card-title" style={{ fontSize: "1.55rem" }}>
                  {post.title}
                </h3>
                <p className="body-copy">{post.excerpt}</p>
                <div className="button-row">
                  <Link href={`${getLocalePath(typedLocale, localizedRoutes.blog)}/${post.slug}`} className="button-secondary">
                    {content.common.readMore}
                  </Link>
                  <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
                    {content.common.reserveNow}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
