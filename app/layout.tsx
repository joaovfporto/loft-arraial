import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loft Prainha Arraial",
  description: "Site multilíngue para divulgação do Loft Prainha Arraial.",
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
