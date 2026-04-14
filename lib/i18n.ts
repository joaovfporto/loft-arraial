export const locales = ["pt", "es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  es: "ES",
  en: "EN",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalePath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

export const localizedRoutes = {
  home: "",
  loft: "/o-loft",
  destination: "/prainha-arraial",
  blog: "/blog",
  contact: "/contato",
  seoLanding: "/loft-na-prainha-em-arraial-do-cabo",
} as const;
