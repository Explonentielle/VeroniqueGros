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
  title: "Podologue Carnot - Services de Podologie",
  description: "Découvrez les services de podologie offerts par Podologue Carnot, spécialisés en soins du pied.",
  keywords: "podologue, soins du pied, podologie, podologue Carnot",
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
