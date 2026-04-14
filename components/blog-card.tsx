import Link from "next/link";

import type { BlogPost } from "@/lib/content";
import { getLocalePath, localizedRoutes, type Locale } from "@/lib/i18n";

type BlogCardProps = {
  locale: Locale;
  post: BlogPost;
  readLabel: string;
};

export function BlogCard({ locale, post, readLabel }: BlogCardProps) {
  return (
    <article className="surface-card article-card">
      <div
        className="gallery-item"
        style={{
          minHeight: 220,
          marginBottom: 18,
          background: `url("${post.cover}") center/cover no-repeat`,
        }}
      />
      <div className="article-meta">
        <span className="pill">{post.category}</span>
        <span className="pill">{post.readTime}</span>
      </div>
      <h3 className="card-title" style={{ fontSize: "1.7rem", marginBottom: 12 }}>
        <Link href={`${getLocalePath(locale, localizedRoutes.blog)}/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="body-copy">{post.excerpt}</p>
      <Link
        href={`${getLocalePath(locale, localizedRoutes.blog)}/${post.slug}`}
        className="button-secondary"
        style={{ marginTop: 18 }}
      >
        {readLabel}
      </Link>
    </article>
  );
}
