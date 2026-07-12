import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-theta-flame-45.vercel.app/"),
  title: "Bemnet Kibret | Fullstack Software Engineer",
  description: "Bemnet Kibret | Fullstack Software Engineer specializing in end-to-end SaaS platforms and high-performance backend systems. Expert in Node.js, PostgreSQL, React, and Next.js.",
  keywords: ["Bemnet Kibret", "Fullstack Software Engineer", "Portfolio", "React", "Next.js", "Node.js", "Web Development", "PostgreSQL", "SaaS"],
  authors: [{ name: "Bemnet Kibret" }],
  openGraph: {
    title: "Bemnet Kibret | Fullstack Software Engineer",
    description: "Bemnet Kibret | Fullstack Software Engineer specializing in end-to-end SaaS platforms and high-performance backend systems. Expert in Node.js, PostgreSQL, React, and Next.js.",
    url: "https://my-portfolio-theta-flame-45.vercel.app/",
    siteName: "Bemnet Kibret Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Bemnet Kibret | Fullstack Software Engineer",
    description: "Bemnet Kibret | Fullstack Software Engineer specializing in end-to-end SaaS platforms and high-performance backend systems. Expert in Node.js, PostgreSQL, React, and Next.js.",
    images: ["/og-image.png"],
  },
};

import StructuredData from "@/components/shared/StructuredData";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <GoogleAnalytics />
          <StructuredData />
          {children}
        </ThemeProvider>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
