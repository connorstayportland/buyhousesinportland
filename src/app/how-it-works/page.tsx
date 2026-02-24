import type { Metadata } from "next";
import { HowItWorks } from "@/components/sections/how-it-works";
import { LeadForm } from "@/components/ui/lead-form";

export const metadata: Metadata = {
  title: "How It Works — Sell Your Portland Home for Cash in 3 Steps",
  description:
    "Our simple 3-step process: request your offer, review it, and close in as little as 7 days. No repairs, no fees, no hassle.",
  alternates: {
    canonical: "https://buyhousesinportland.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-[#0D2B45] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">How Our Cash Home Buying Process Works</h1>
          <p className="text-xl text-gray-300">
            Three simple steps. No repairs, no commissions, no stress.
          </p>
        </div>
      </div>

      <HowItWorks />

      {/* What to expect timeline */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0D2B45] mb-8 text-center">
            Your Typical Timeline
          </h2>
          <div className="space-y-4">
            {[
              { day: "Day 1", title: "Submit Your Info", desc: "Fill out our form or call us. Tell us about your property and your situation." },
              { day: "Within 24 hrs", title: "We Reach Out", desc: "A member of our team contacts you to learn more and discuss your options — no pressure, no commitment." },
              { day: "Days 2–7", title: "Review Your Options", desc: "We'll present a direct offer or identify the right buyer from our network. Take all the time you need." },
              { day: "Your Timeline", title: "Close & Get Paid", desc: "We coordinate with a local title company for a smooth cash closing. No financing delays." },
            ].map((step) => (
              <div key={step.day} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100">
                <div className="flex-shrink-0 w-20 text-center">
                  <span className="text-amber-600 font-bold text-sm">{step.day}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0D2B45]">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0D2B45] mb-6 text-center">
            Ready to Get Started?
          </h2>
          <LeadForm source="how-it-works-page" />
        </div>
      </section>
    </div>
  );
}
