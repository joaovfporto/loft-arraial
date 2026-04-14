import { notFound } from "next/navigation";

import { contact, getContent, reservationLink } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function LocalizedContactPage({
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
            <span className="eyebrow">{content.contactPage.eyebrow}</span>
            <h1 className="section-title">{content.contactPage.title}</h1>
            <p className="section-copy">{content.contactPage.text}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell section-grid grid-2">
          <div className="surface-card info-card">
            <span className="eyebrow">WhatsApp</span>
            <h2 className="section-title">{content.contactPage.whatsappTitle}</h2>
            <p className="body-copy">{content.contactPage.whatsappText}</p>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="button-primary">
              {content.common.callWhatsapp}
            </a>
          </div>
          <div className="surface-card info-card">
            <span className="eyebrow">Instagram</span>
            <h2 className="section-title">{content.contactPage.instagramTitle}</h2>
            <p className="body-copy">{content.contactPage.instagramText}</p>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="button-secondary">
              {content.common.viewInstagram}
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-shell section-grid grid-2">
          <div className="surface-card info-card">
            <span className="eyebrow">{content.contactPage.mapTitle}</span>
            <h2 className="section-title">{content.contactPage.mapTitle}</h2>
            <p className="body-copy">{contact.address}</p>
            <p className="body-copy">{content.contactPage.mapText}</p>
            <iframe
              src={contact.mapEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="mini-map"
              title="Mapa da Prainha em Arraial do Cabo"
            />
          </div>
          <div className="surface-card info-card">
            <span className="eyebrow">{content.contactPage.reserveTitle}</span>
            <h2 className="section-title">{content.contactPage.reserveTitle}</h2>
            <p className="body-copy">{content.contactPage.reserveText}</p>
            <a href={reservationLink} target="_blank" rel="noreferrer" className="button-primary">
              {content.common.reserveExternal}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
