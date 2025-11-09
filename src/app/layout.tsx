import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Giang Anh Vu",
  description: "Giang Anh Vu's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <link rel="icon" href="https://ext.same-assets.com/728248024/664734907.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Header />
          {children}
          <ScrollToTop />
        </ClientBody>
      </body>
    </html>
  );
}
