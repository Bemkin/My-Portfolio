import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/shared/StructuredData";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_URL, profile } from "@/lib/site";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
});

const title = `${profile.name} | ${profile.role}`;
const description =
  "Founding Full-Stack & AI Engineer building zero-to-production SaaS platforms, agentic AI systems and cloud infrastructure with TypeScript, React, Next.js, Node.js, PostgreSQL and Supabase.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  keywords: ["Bemnet Kibret", "Founding Full-Stack Engineer", "AI Engineer", "Agentic AI", "Portfolio", "Next.js", "TypeScript", "Python", "Supabase", "PostgreSQL", "SaaS"],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

// Runs before paint so returning visitors never see a flash of the preloader.
const preloaderGate = `try{if(sessionStorage.getItem('bk_preloader_seen'))document.documentElement.classList.add('no-preloader')}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interTight.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderGate }} />
      </head>
      <body>
        <GoogleAnalytics />
        <StructuredData />
        <SmoothScroll />
        <Preloader />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
