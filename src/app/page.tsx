import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustSignals } from "@/components/sections/trust-signals";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { Situations } from "@/components/sections/situations";
import { PhotoBreak } from "@/components/sections/photo-break";
import { Testimonials } from "@/components/sections/testimonials";
import { NeighborhoodsSection } from "@/components/sections/neighborhoods";
import { AgentBio } from "@/components/sections/agent-bio";
import { FaqSection } from "@/components/sections/faq-section";
import { LeadForm } from "@/components/ui/lead-form";
import { faqs } from "@/lib/faq-data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sell My House Fast Portland OR | We Buy Houses for Cash",
  description:
    "Sell your Portland house fast for cash — as-is, no repairs, no MLS listing. Licensed Oregon agents representing you to our network of cash home buyers. Close in as little as 7 days.",
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
      <AgentBio />
      <NeighborhoodsSection />

      {/* Second CTA form */}
      <section className="py-16 bg-[#0D2B45]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tell Us What You Need to Walk Away With
          </h2>
          <p className="text-gray-300 mb-8">
            Our team will be in touch within 24 hours. We&apos;ll listen to your situation,
            walk you through the numbers, and let you decide if this is the right path —
            no pressure, no obligation.
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
