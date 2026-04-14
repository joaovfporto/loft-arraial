import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { getContent, reservationLink } from "@/lib/content";
import { getLocalePath, isValidLocale, localizedRoutes, type Locale } from "@/lib/i18n";

export default async function LocalizedBlogPage({
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
            <span className="eyebrow">{content.blog.eyebrow}</span>
            <h1 className="section-title">{content.blog.title}</h1>
            <p className="section-copy">{content.blog.text}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeading
            eyebrow={content.blog.categoriesTitle}
            title={content.blog.categoriesTitle}
            description={content.blog.categoriesText}
          />
          <div className="pill-list">
            <Link href={getLocalePath(typedLocale, localizedRoutes.blog)} className="pill">
              {content.common.allCategories}
            </Link>
            {content.blog.categories.map((category) => (
              <span key={category} className="pill">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-shell blog-layout">
          <div className="section-grid">
            {content.blog.posts.map((post) => (
              <BlogCard key={post.slug} locale={typedLocale} post={post} readLabel={content.common.readMore} />
            ))}
          </div>

          <aside className="sidebar-stack">
            <div className="surface-card info-card">
              <span className="eyebrow">SEO</span>
              <h2 className="section-title">{content.blog.seoTitle}</h2>
              <p className="body-copy">{content.blog.seoText}</p>
            </div>
            <div className="surface-card info-card">
              <span className="eyebrow">{content.home.ctaEyebrow}</span>
              <h2 className="section-title">{content.blog.conversionTitle}</h2>
              <p className="body-copy">{content.blog.conversionText}</p>
              <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
                {content.common.reserveNow}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
