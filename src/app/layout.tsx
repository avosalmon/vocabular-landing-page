import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vocabular",
  description: "All-in-one app to build your vocabulary with the power of AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`flex min-h-screen flex-col items-center justify-between ${inter.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
