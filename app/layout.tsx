import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loft Prainha Arraial | Loft de frente para o mar em Arraial do Cabo",
  description:
    "Loft completo de frente para o mar na Prainha, em Arraial do Cabo. Vista incrível, conforto, praticidade e reserva rápida pelo WhatsApp.",
  openGraph: {
    title: "Loft Prainha Arraial | Loft de frente para o mar em Arraial do Cabo",
    description:
      "Loft completo de frente para o mar na Prainha, com vista incrível, conforto e reserva rápida pelo WhatsApp.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loft Prainha Arraial | Loft de frente para o mar em Arraial do Cabo",
    description:
      "Loft completo de frente para o mar na Prainha, em Arraial do Cabo. Vista incrível, conforto e reserva rápida pelo WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
