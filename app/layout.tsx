import type { Metadata } from "next";
import { Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://www.beltraosantoseng.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Beltrão Santos Engenharia | Engenharia Estrutural em Belo Horizonte",
  description:
    "Projetos estruturais, fundações, contenções, laudos técnicos, reforços estruturais e consultoria em engenharia estrutural. Beltrão Santos Engenharia, desde 1991.",
  keywords: [
    "engenharia estrutural",
    "engenharia estrutural belo horizonte",
    "projeto estrutural",
    "projeto concreto armado",
    "projeto de fundação",
    "projeto de contenção",
    "laudo estrutural",
    "reforço estrutural",
    "engenheiro estrutural",
    "Belo Horizonte",
    "Minas Gerais",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Beltrão Santos Engenharia",
    title: "Beltrão Santos Engenharia | Engenharia Estrutural em Belo Horizonte",
    description:
      "Projetos estruturais, fundações, contenções, laudos técnicos, reforços estruturais e consultoria em engenharia estrutural. Desde 1991.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beltrão Santos Engenharia | Engenharia Estrutural",
    description:
      "Projetos estruturais, fundações, contenções, laudos técnicos e consultoria em engenharia estrutural. Desde 1991.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
