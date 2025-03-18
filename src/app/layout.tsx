import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletAdapterProvider } from "@/app/providers/WalletProvider"; // ✅ Import Wallet Provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P2P Energy Trading",
  description: "Trade renewable energy securely using Solana blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WalletAdapterProvider> {/* ✅ Wrap app inside WalletProvider */}
          {children}
        </WalletAdapterProvider>
      </body>
    </html>
  );
}
