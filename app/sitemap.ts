import type { MetadataRoute } from "next";

import { getContent } from "@/lib/content";
import { locales } from "@/lib/i18n";

const baseUrl = "https://loftprainhaarraial.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/o-loft", "/prainha-arraial", "/blog", "/contato", "/loft-na-prainha-em-arraial-do-cabo"];
  const staticRoutes = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date("2026-04-12"),
    })),
  );

  const blogRoutes = locales.flatMap((locale) =>
    getContent(locale).blog.posts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date("2026-04-12"),
    })),
  );

  return [...staticRoutes, ...blogRoutes];
}
