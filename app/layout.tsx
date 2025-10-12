import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAYURA - Premium Clothing Brand",
  description: "Discover SAYURA's exclusive collection of premium clothing. Experience luxury fashion with timeless elegance and exceptional craftsmanship.",
  keywords: ["SAYURA", "premium clothing", "luxury fashion", "designer wear", "high-end fashion"],
  authors: [{ name: "SAYURA" }],
  openGraph: {
    title: "SAYURA - Premium Clothing Brand",
    description: "Discover SAYURA's exclusive collection of premium clothing.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${bodoni.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
