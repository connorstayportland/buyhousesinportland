import Image from "next/image";
import { LeadForm } from "@/components/ui/lead-form";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const valueProps = [
  "Licensed Oregon agents representing you, the seller",
  "We find the right buyer from our investor network — off-market",
  "Tell us what you need to walk away with. We structure the deal around that.",
  "Cash closings — no bank financing, no contingencies",
  "No MLS listing, no showings, no repairs required",
];

export function Hero() {
  return (
    <section className="relative bg-[#0D2B45] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-mF6l5m02e0U?w=1600&q=80"
          alt="Portland Oregon skyline and Steel Bridge"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B45] via-[#0D2B45]/95 to-[#0D2B45]/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              Licensed Oregon Real Estate Agents
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              Sell Your Portland Home Off-Market — We Represent You
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We are a Portland-based team of licensed agents and investors. Tell us what
              you need to walk away with — we&apos;ll find the right cash buyer from our
              investor network and structure the deal around your number. No MLS,
              no repairs, no uncertainty.
            </p>

            <ul className="space-y-3 mb-10">
              {valueProps.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-200">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400 border-t border-white/10 pt-6">
              <div>
                <span className="block text-white font-bold text-lg">24 Hours</span>
                We&apos;ll Be In Touch
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="block text-white font-bold text-lg">All Cash</span>
                No Financing Contingencies
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="block text-white font-bold text-lg">Off-Market</span>
                No MLS Required
              </div>
            </div>
          </div>

          <div id="offer-form" className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-[#0D2B45] mb-2">
              Tell Us About Your Property
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Our team will be in touch within 24 hours to discuss your situation and what you need from the sale.
            </p>
            <LeadForm source="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
