import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

import MainHeader from "@/components/main-header/main-header";

import "./globals.css";
import { FavoritesProvider } from "@/shared/favorite-context";

export const metadata: Metadata = {
  title: "ZARA Web Challenge",
  description: "A simple web page for showing Marvel characters",
};

const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <FavoritesProvider>
          <MainHeader />
          <main className="container">{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
