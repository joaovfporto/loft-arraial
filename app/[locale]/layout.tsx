import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getContent } from "@/lib/content";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  const title = content.meta.title;
  const description = content.meta.description;
  const path = locale === "pt" ? "/pt" : `/${locale}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description:
        locale === "pt"
          ? "Loft completo de frente para o mar na Prainha, com vista incrível, conforto e reserva rápida pelo WhatsApp."
          : description,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        locale === "pt"
          ? "Loft completo de frente para o mar na Prainha, em Arraial do Cabo. Vista incrível, conforto e reserva rápida pelo WhatsApp."
          : description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);

  return (
    <>
      <SiteHeader locale={typedLocale} nav={content.nav} />
      {children}
      <SiteFooter locale={typedLocale} copy={content} />
    </>
  );
}
