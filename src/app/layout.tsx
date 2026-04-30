import type { Metadata } from "next";
import localFont from "next/font/local";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const bauhaus = localFont({
  src: "../../public/fontes/bauhaus-93/Bauhaus 93 Regular.ttf",
  variable: "--font-display",
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabrina Lisia | Arquiteta & Interiores",
  description:
    "Portfólio de arquitetura e design de interiores por Sabrina Lisia. Transformo ambientes em experiências únicas, onde cada detalhe reflete a essência de quem habita.",
  keywords: [
    "arquitetura",
    "design de interiores",
    "projetos residenciais",
    "decoração",
    "Sabrina Lisia",
  ],
  openGraph: {
    title: "Sabrina Lisia | Arquiteta & Interiores",
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
    <html lang="pt-BR" className={`${bauhaus.variable} ${comfortaa.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
