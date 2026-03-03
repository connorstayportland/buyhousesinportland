import type { Metadata } from "next";
import Script from "next/script";
import { FaqSection } from "@/components/sections/faq-section";
import { faqs } from "@/lib/faq-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Sell My House Fast Portland | Cash Home Buyer Questions",
  description:
    "Answers to common questions about selling your Portland house fast for cash. How it works, what we pay, timelines, fees, and what types of houses we buy.",
  alternates: {
    canonical: "https://buyhousesinportland.com/faq",
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

export default function FaqPage() {
  return (
    <div>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-[#0D2B45] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about selling your Portland home for cash.
          </p>
        </div>
      </div>

      <FaqSection />

      <div className="py-12 bg-[#F8FAFC] text-center">
        <h2 className="text-2xl font-bold text-[#0D2B45] mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6">
          Our team is happy to answer any questions, no obligation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:971-258-1093"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Call (971) 258-1093
          </a>
          <Link
            href="/contact"
            className="border border-[#0D2B45] hover:bg-[#0D2B45] hover:text-white text-[#0D2B45] font-bold py-3 px-6 rounded-lg transition-all"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </div>
  );
}
