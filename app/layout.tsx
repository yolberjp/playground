import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playground",
  description: "Experimental place for tiny components",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed w-full text-xs text-gray-400 text-center md:text-right bg-white/30 backdrop-blur-sm p-4">
          made with the cora <br /> by <a href="https://www.linkedin.com/in/yolberjp/" className="text-yellow-700 hover:text-yellow-800 transition-colors">@yolberjp</a>
        </header>
        <main className="max-w-6xl m-auto px-2 md:px-5">
          {children}
        </main>
      </body>
    </html>
  );
}
