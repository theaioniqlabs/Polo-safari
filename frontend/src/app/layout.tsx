import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Polo Safari — Experiences at Polo Forest, Gujarat",
    template: "%s | Polo Safari",
  },
  description:
    "Heritage, educational, corporate, family, and adventure experiences at Polo Forest, Idar, Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
