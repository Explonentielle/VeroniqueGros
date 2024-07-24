import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Suspense } from "react";
import Loading from "./Loading";
import { cn } from "@/src/lib/utils";
import { Header } from "@/src/features/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Véronique Gros - Podologue Carnot | Expert en Podologie et Soins des Pieds",
  description: "Explorez les services spécialisés de podologie au cabinet Podologue Carnot à Armentières, offrant posturologie, podologie du sport et soins de pédicurie. Profitez de l'expertise de Véronique Gros pour des soins personnalisés.",
  keywords: "podologue Armentières, soins des pieds Armentières, appareillage Armentières, podologue Sailly-sur-la-Lys, podologie Armentières, appareillage Sailly-sur-la-Lys, soins des pieds Sailly-sur-la-Lys, podologie Sailly-sur-la-Lys, podologue Nord, soins des pieds Nord, podologie Nord, Véronique Gros, Véronique Hourdry, cabinet podologie Carnot, posturologie Armentières, podologie du sport Armentières, pédicurie Armentières, soins orthopédiques Nord, santé des pieds Armentières, spécialiste du pied Nord, 59280, 62840",
  robots: "index, follow",
  alternates: {
    canonical: "https://veronique-gros.vercel.app/",
  },
  other: {
    "google-site-verification": "7HwvouvbIjXOtewjqrtCmSq0B_J5goy2E4ihR-VL0Q0",
  },
  openGraph: {
    title: "Podologue Carnot - Services de Podologie à Armentières",
    description: "Découvrez les services de podologie offerts par Podologue Carnot, spécialisés en soins du pied personnalisés.",
    url: "https://veronique-gros.vercel.app/",
    type: "website",
    locale: "fr_FR",
    siteName: "Podologue Carnot",
    images: [
      {
        url: "https://veronique-gros.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Podologue Carnot - Services de Podologie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PodologueCarnot",
    title: "Véronique Gros - Podologue Carnot | Expert en Podologie",
    description: "Services spécialisés de podologie, incluant posturologie et soins de pédicurie à Armentières.",
    images: {
      url: "https://veronique-gros.vercel.app/logo.png",
      width: 1200,
      height: 630,
      alt: "Podologue Carnot - Vue d'ensemble du cabinet",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="fr" className="h-full ">
      <head>
        <link rel="icon" href="https://veronique-gros.vercel.app/logo.png" type="image/png" />
      </head>
      <body cz-shortcut-listen="true" className={cn(inter.className, 'h-full')}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
