import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { neighborhoods, getNeighborhoodBySlug } from "@/lib/neighborhoods";
import { LeadForm } from "@/components/ui/lead-form";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return neighborhoods.map((hood) => ({
    slug: hood.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hood = getNeighborhoodBySlug(slug);

  if (!hood) {
    return { title: "Area Not Found" };
  }

  return {
    title: `Sell My House Fast in ${hood.name} OR | Cash Home Buyers`,
    description: `We buy houses fast for cash in ${hood.name}, Oregon. Get a fair offer in 24 hours. No repairs, no commissions. Close in 7–14 days.`,
    alternates: {
      canonical: `https://buyhousesinportland.com/neighborhoods/${hood.slug}`,
    },
    openGraph: {
      title: `Sell My House Fast in ${hood.name} OR`,
      description: `Cash home buyers in ${hood.name}. Get a no-obligation offer in 24 hours.`,
    },
  };
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const hood = getNeighborhoodBySlug(slug);

  if (!hood) {
    notFound();
  }

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `Buy Houses in Portland — ${hood.name}`,
    description: `Cash home buyers serving ${hood.name}, Oregon. We buy houses fast, as-is, for cash.`,
    url: `https://buyhousesinportland.com/neighborhoods/${hood.slug}`,
    telephone: "503-927-2565",
    address: {
      "@type": "PostalAddress",
      addressLocality: hood.name,
      addressRegion: "OR",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hood.lat,
      longitude: hood.lng,
    },
    areaServed: {
      "@type": "Place",
      name: hood.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: hood.name,
        addressRegion: "OR",
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <Script
        id="neighborhood-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Page header */}
      <div className="bg-[#0D2B45] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {" › "}
            <Link href="/neighborhoods" className="hover:text-white transition-colors">Areas</Link>
            {" › "}
            <span className="text-gray-200">{hood.name}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">
            Sell My House Fast in {hood.name}
          </h1>
          <p className="text-xl text-gray-300">
            We buy houses for cash in {hood.name}, Oregon. Fair offer in 24 hours,
            close in as little as 7 days.
          </p>
        </div>
      </div>

      {/* Content + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: content */}
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-[#0D2B45] mb-4">
                We Buy Houses in {hood.name}, OR
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {hood.description} If you need to sell your {hood.name} home quickly —
                for any reason — we can help. We are local cash buyers who purchase homes
                in any condition, without requiring repairs, cleaning, or agent commissions.
              </p>

              <h3 className="text-lg font-bold text-[#0D2B45] mt-6 mb-3">
                Why {hood.name} Homeowners Choose Us
              </h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  `Cash offer for your ${hood.name} home in 24–48 hours`,
                  "No repairs, cleaning, or updates required",
                  "Zero agent commissions or fees",
                  "Close in 7–14 days or your timeline",
                  "No financing contingencies — guaranteed close",
                  "We handle all paperwork and closing costs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {hood.highlights && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#0D2B45] mb-3">
                    About {hood.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Key highlights:</p>
                  <ul className="flex flex-wrap gap-2">
                    {hood.highlights.map((h) => (
                      <li
                        key={h}
                        className="bg-amber-50 text-amber-800 text-sm px-3 py-1 rounded-full border border-amber-200"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 p-4 bg-[#F8FAFC] rounded-xl border border-gray-200">
                <h3 className="font-bold text-[#0D2B45] mb-2">Common Situations We Help With</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {["Foreclosure", "Inherited property", "Divorce", "Job relocation",
                    "Behind on payments", "Needs major repairs", "Tired landlord", "Downsizing"].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="text-amber-500">›</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-20 self-start">
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-[#0D2B45] mb-2">
                  Get Your {hood.name} Cash Offer
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                  Free, no-obligation offer. We&apos;ll call you within 24 hours.
                </p>
                <LeadForm source={`neighborhood-${hood.slug}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links to other neighborhoods */}
      <section className="py-12 bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-[#0D2B45] mb-4">
            Other Areas We Serve
          </h2>
          <div className="flex flex-wrap gap-2">
            {neighborhoods
              .filter((n) => n.slug !== hood.slug)
              .slice(0, 8)
              .map((n) => (
                <Link
                  key={n.slug}
                  href={`/neighborhoods/${n.slug}`}
                  className="text-sm bg-white border border-gray-200 hover:border-amber-400 px-3 py-1.5 rounded-lg transition-colors text-gray-600 hover:text-[#0D2B45]"
                >
                  {n.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
