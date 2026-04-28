import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SABS | Designer de Interiores",
  description:
    "Portfólio de design de interiores por Sabrina. Transformo ambientes em experiências únicas, onde cada detalhe reflete a essência de quem habita.",
  keywords: [
    "arquitetura",
    "design de interiores",
    "projetos residenciais",
    "decoração",
    "SABS",
  ],
  openGraph: {
    title: "SABS | Designer de Interiores",
    description:
      "Transformo ambientes em experiências únicas, onde cada detalhe reflete a essência de quem habita.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
