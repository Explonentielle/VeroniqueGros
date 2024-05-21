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
  title: "",
  description: "",
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
