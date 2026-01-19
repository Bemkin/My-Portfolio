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
  title: "Bemnet Kibret | Full Stack Web Developer & Professional DJ",
  description: "Bemnet Kibret | Full Stack Developer & DJ. Specialist in React, Next.js, and Node.js. Creator of Senselet, Trainer CRM, and AI-powered FormCheck.",
  keywords: ["Bemnet Kibret", "Full Stack Developer", "Portfolio", "React", "Next.js", "Node.js", "Web Development"],
  authors: [{ name: "Bemnet Kibret" }],
  openGraph: {
    title: "Bemnet Kibret | Full Stack Web Developer & Professional DJ",
    description: "Bemnet Kibret | Full Stack Developer & DJ. Specialist in React, Next.js, and Node.js. Creator of Senselet, Trainer CRM, and AI-powered FormCheck.",
    url: "https://my-portfolio-theta-flame-45.vercel.app/",
    siteName: "Bemnet Kibret Portfolio",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Bemnet Kibret | Full Stack Web Developer & Professional DJ",
    description: "Bemnet Kibret | Full Stack Developer & DJ. Specialist in React, Next.js, and Node.js. Creator of Senselet, Trainer CRM, and AI-powered FormCheck.",
    images: ["/images/og-banner.png"],
  },
};

import StructuredData from "@/components/shared/StructuredData";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <GoogleAnalytics />
        <StructuredData />
        {children}
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
