import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/TopLoader";
import ScrollToTopButton from "@/components/ui/scroll-to-top";
import { HeroHeader } from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Integr8 Website",
  description: "Description here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        id="home"
        className={`${geistSans.variable} ${geistMono.variable} relative selection:bg-yellow-500/50 antialiased`}
      >
        <TopLoader />
        <HeroHeader />
        {/* <Navbar /> */}
        <main>
          {children}
          <ScrollToTopButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
