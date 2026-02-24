import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buyhousesinportland.com"),
  title: {
    default: "Sell Your Portland Home Off-Market | Licensed Agents & Investor Network",
    template: "%s | Buy Houses in Portland",
  },
  description:
    "Licensed Oregon agents specializing in off-market sales to cash buyers and investors. Tell us what you need — we structure the deal around your number. No MLS, no repairs, no uncertainty.",
  keywords: [
    "sell my house fast Portland",
    "off market home sale Portland",
    "cash home buyers Portland OR",
    "sell house as-is Portland",
    "Portland real estate investor",
    "sell house without listing Portland",
    "cash for houses Portland Oregon",
  ],
  authors: [{ name: "Buy Houses in Portland" }],
  creator: "Buy Houses in Portland",
  publisher: "Buy Houses in Portland",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buyhousesinportland.com",
    siteName: "Buy Houses in Portland",
    title: "Sell My House Fast Portland OR | Cash Home Buyers",
    description:
      "Get a fair cash offer for your Portland home in 24–48 hours. No repairs, no commissions, close in 7–14 days.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Buy Houses in Portland — Sell Fast for Cash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell My House Fast Portland OR | Cash Home Buyers",
    description:
      "Get a fair cash offer for your Portland home in 24–48 hours. No repairs, no commissions, close in 7–14 days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://buyhousesinportland.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Buy Houses in Portland",
  description:
    "Licensed Oregon real estate agents specializing in off-market sales to cash buyers and investors. We represent sellers, structure deals around your number, and close fast — no MLS, no repairs.",
  url: "https://buyhousesinportland.com",
  telephone: "503-927-2565",
  email: "info@buyhousesinportland.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portland",
    addressRegion: "OR",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5051,
    longitude: -122.6750,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.5051,
      longitude: -122.6750,
    },
    geoRadius: "50000",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  priceRange: "Free",
  sameAs: [
    "https://www.facebook.com/buyhousesinportland",
    "https://www.google.com/maps/search/buy+houses+in+portland",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Buy Houses in Portland",
  url: "https://buyhousesinportland.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://buyhousesinportland.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
