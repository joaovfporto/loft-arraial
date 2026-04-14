import { notFound } from "next/navigation";

import { reservationLink } from "@/lib/content";
import { CtaBanner } from "@/components/cta-banner";
import { getContent } from "@/lib/content";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).blog.posts.map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export default async function LocalizedBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);
  const post = content.blog.posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="site-shell">
          <div className="page-hero-card">
            <span className="eyebrow">{post.category}</span>
            <h1 className="section-title">{post.title}</h1>
            <p className="section-copy">{post.excerpt}</p>
            <div className="pill-list">
              <span className="pill">{post.readTime}</span>
              <span className="pill">{post.publishedAt}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-shell">
          <div className="post-cover" style={{ background: `url("${post.cover}") center/cover no-repeat` }} />
        </div>
      </section>

      <section className="section">
        <div className="site-shell" style={{ maxWidth: 860 }}>
          <div className="section-grid">
            {post.sections.map((section) => (
              <article key={section.heading} className="surface-card info-card">
                <h2 className="section-title" style={{ fontSize: "2rem" }}>
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="body-copy">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
            <article className="surface-card info-card">
              <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
                {post.finalCtaLabel}
              </a>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                {post.authorHeading}
              </h2>
              <p className="body-copy">
                <strong>{post.authorName}</strong>
              </p>
              <p className="body-copy">{post.authorBio}</p>
            </article>
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
    </main>
  );
}
