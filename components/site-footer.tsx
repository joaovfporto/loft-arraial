import Link from "next/link";

import type { LocalizedContent } from "@/lib/content";
import { contact, reservationLink } from "@/lib/content";
import { getLocalePath, localizedRoutes, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
  copy: LocalizedContent;
};

export function SiteFooter({ locale, copy }: SiteFooterProps) {
  return (
    <footer className="footer">
      <div className="site-shell footer-inner">
        <div>
          <div className="brand-name">Loft Prainha Arraial</div>
          <p className="footer-note">{copy.meta.description}</p>
        </div>

        <div className="section-grid">
          <Link href={getLocalePath(locale, localizedRoutes.blog)}>{copy.nav.blog}</Link>
          <Link href={getLocalePath(locale, localizedRoutes.contact)}>{copy.nav.contact}</Link>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={reservationLink} target="_blank" rel="noreferrer">
            {copy.common.reserveExternal}
          </a>
        </div>
      </div>
    </footer>
  );
}
