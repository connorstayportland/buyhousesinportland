import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
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
  email: "claverty@kellyright.com",
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
  areaServed: [
    { "@type": "City", name: "Portland", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Beaverton", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Gresham", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Lake Oswego", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Hillsboro", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Tigard", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Tualatin", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Milwaukie", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Happy Valley", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Oregon City", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Clackamas", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Aloha", containedInPlace: { "@type": "State", name: "Oregon" } },
  ],
  knowsAbout: [
    "Off-market home sales",
    "Cash home buyers Portland Oregon",
    "Sell house as-is Portland",
    "Oregon real estate investment",
    "Portland infill development",
    "Distressed property sales",
    "Estate home sales",
    "Seller representation",
    "Off-market real estate transactions",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Off-Market Home Sale Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Off-Market Home Sale Representation",
          description:
            "Licensed Oregon agent representation for sellers who want to sell their Portland-area home off-market to cash buyers and investors. No MLS, no repairs, no open houses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direct Cash Purchase",
          description:
            "We purchase select properties directly when they fit our investment criteria, providing sellers with an immediate cash offer and fast closing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Property Consultation",
          description:
            "No-obligation consultation to assess your property and walk you through realistic cash offer numbers within 24 hours.",
        },
      },
    ],
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
