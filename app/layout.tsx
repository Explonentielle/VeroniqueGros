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
  title: "Véronique Gros - Podologue Carnot - Services de Podologie",
  description: "Découvrez les services complets de podologie au cabinet Podologue Carnot, incluant la posturologie, la podologie du sport et les soins de pédicurie. Bénéficiant de l'expertise de Véronique Gros, notre clinique se spécialise dans les soins du pied sur mesure pour répondre à vos besoins.",
  keywords: "podologue Armentières, soins du pied Armentières, Appareillage Armentières, podologue Sailly-sur-la-Lys, podologie Armentières, Appareillage Sailly-sur-la-Lys, soins du pied Sailly-sur-la-Lys, podologie Sailly-sur-la-Lys, podologue Nord, soins du pied Nord, podologie Nord, Véronique Gros, Véronique Hourdry, cabinet podologie Carnot, posturologie Armentières, podologie du sport Armentières, pédicurie Armentières, soins orthopédiques Nord, santé du pied Armentières, spécialiste du pied Nord, 59280, 62840, ",
  robots: "index, follow",
  alternates: {
    canonical: "https://veronique-gros.vercel.app/",
  },
  other: {
    "google-site-verification": "7HwvouvbIjXOtewjqrtCmSq0B_J5goy2E4ihR-VL0Q0",

  },
  openGraph: {
    title: "Podologue Carnot - Services de Podologie",
    description: "Découvrez les services de podologie offerts par Podologue Carnot, spécialisés en soins du pied.",
    url: "https://veronique-gros.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="fr" className="h-full ">
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
