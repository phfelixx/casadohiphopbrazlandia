import type { Metadata, Viewport } from "next";
import { Anton, Bricolage_Grotesque, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Casa do Hip Hop de Brazlândia — Transformando vidas através da cultura",
    template: "%s · Casa do Hip Hop de Brazlândia",
  },
  description:
    "ONG cultural em Brazlândia/DF que oferece oficinas gratuitas de Graffiti, MC, Break, DJ, Capoeira, Teatro, Ballet e Artesanato. Cultura Hip Hop transformando vidas. Apoio do MINC.",
  keywords: [
    "Casa do Hip Hop",
    "Brazlândia",
    "Hip Hop",
    "oficinas gratuitas",
    "Graffiti",
    "Break",
    "MC",
    "DJ",
    "cultura",
    "ONG",
    "Distrito Federal",
  ],
  authors: [{ name: "Casa do Hip Hop de Brazlândia" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: "Casa do Hip Hop de Brazlândia",
    title: "Casa do Hip Hop de Brazlândia — Transformando vidas através da cultura",
    description:
      "Oficinas gratuitas de cultura Hip Hop em Brazlândia/DF: Graffiti, MC, Break, DJ, Capoeira, Teatro, Ballet e Artesanato.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa do Hip Hop de Brazlândia",
    description:
      "Oficinas gratuitas de cultura Hip Hop em Brazlândia/DF. Transformando vidas através da cultura.",
  },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${bricolage.variable} ${marker.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">{children}</body>
    </html>
  );
}
