"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels, locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="language-switcher" aria-label="Language switcher">
      {locales.map((targetLocale) => {
        const targetPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

        return (
          <Link
            key={targetLocale}
            href={targetPath}
            className={targetLocale === locale ? "language-pill active" : "language-pill"}
          >
            {localeLabels[targetLocale]}
          </Link>
        );
      })}
    </div>
  );
}
