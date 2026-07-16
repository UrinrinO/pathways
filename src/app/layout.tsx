import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// Single clean, modern sans-serif for the whole site (display + body)
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pathways — Creativity linked to tech",
  description:
    "Pathways is a creative tech hub for young people aged 16–25 in Cardiff. Turn ideas, interests and existing skills into clearer direction, stronger digital knowledge and real opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
