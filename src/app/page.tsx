import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustSignals } from "@/components/sections/trust-signals";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { Situations } from "@/components/sections/situations";
import { Testimonials } from "@/components/sections/testimonials";
import { NeighborhoodsSection } from "@/components/sections/neighborhoods";
import { FaqSection } from "@/components/sections/faq-section";
import { LeadForm } from "@/components/ui/lead-form";
import { faqs } from "@/lib/faq-data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sell My House Fast Portland OR | Cash Home Buyers",
  description:
    "Get a fair cash offer for your Portland home in 24–48 hours. No repairs, no commissions, close in 7–14 days. Trusted local cash buyer serving all Portland neighborhoods.",
  alternates: {
    canonical: "https://buyhousesinportland.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <TrustSignals />
      <HowItWorks />
      <ComparisonTable />
      <Situations />
      <Testimonials />
      <NeighborhoodsSection />

      {/* Second CTA form */}
      <section className="py-16 bg-[#0D2B45]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Your Cash Offer?
          </h2>
          <p className="text-gray-300 mb-8">
            Fill out the form below and we&apos;ll call you within 24 hours.
            No repairs. No fees. No obligation.
          </p>
          <div className="bg-white rounded-2xl p-6 lg:p-8">
            <LeadForm source="bottom-cta" />
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
