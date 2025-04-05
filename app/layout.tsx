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
        <div className="fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 text-xs text-gray-400 text-center md:text-right">
          made with the cora <br /> by <a href="https://www.linkedin.com/in/yolberjp/" className="text-amber-700 hover:text-amber-800 transition-colors">@yolberjp</a>
        </div>
        <main className="max-w-6xl m-auto px-5">
          {children}
        </main>
      </body>
    </html>
  );
}
