import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Selling Your Portland Home for Cash",
  description:
    "Get answers to the most common questions about selling your Portland home fast for cash. No repairs, no commissions, close in 7–14 days.",
  alternates: {
    canonical: "https://buyhousesinportland.com/faq",
  },
};

export default function FaqPage() {
  return (
    <div>
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
            href="tel:[YOUR_PHONE]"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Call [YOUR_PHONE]
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
