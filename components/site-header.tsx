import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import type { LocalizedContent } from "@/lib/content";
import { getLocalePath, localizedRoutes, type Locale } from "@/lib/i18n";
import { reservationLink } from "@/lib/content";

type SiteHeaderProps = {
  locale: Locale;
  nav: LocalizedContent["nav"];
};

export function SiteHeader({ locale, nav }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href={getLocalePath(locale)} className="brand" aria-label="Loft Prainha Arraial">
          <span className="brand-mark" />
          <span>
            <span className="brand-name">Loft Prainha Arraial</span>
            <span className="brand-tagline">{nav.brandTagline}</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href={getLocalePath(locale, localizedRoutes.home)} className="nav-link">
            {nav.home}
          </Link>
          <Link href={getLocalePath(locale, localizedRoutes.loft)} className="nav-link">
            {nav.loft}
          </Link>
          <Link href={getLocalePath(locale, localizedRoutes.destination)} className="nav-link">
            {nav.destination}
          </Link>
          <Link href={getLocalePath(locale, localizedRoutes.blog)} className="nav-link">
            {nav.blog}
          </Link>
          <Link href={getLocalePath(locale, localizedRoutes.contact)} className="nav-link">
            {nav.contact}
          </Link>
          <LanguageSwitcher locale={locale} />
          <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
            {nav.reserve}
          </a>
        </nav>
      </div>
    </header>
  );
}
