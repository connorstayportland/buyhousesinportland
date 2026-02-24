"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export { faqs };

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0D2B45] pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100">
          <div className="pt-4">{answer}</div>
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Have more questions?{" "}
            <a href="tel:[YOUR_PHONE]" className="text-amber-600 font-semibold hover:underline">
              Call us at [YOUR_PHONE]
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
