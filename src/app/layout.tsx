import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Poppins } from "next/font/google"
import Header from "./template/Header";
import Footer from "./template/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "700"]
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} flex flex-col min-h-screen antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
