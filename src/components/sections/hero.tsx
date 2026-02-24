import Image from "next/image";
import { LeadForm } from "@/components/ui/lead-form";

export function Hero() {
  return (
    <section className="relative bg-[#0D2B45] text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80"
          alt="Portland Oregon skyline"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline + value props */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-6">
              🏠 Local Portland Cash Buyers
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Sell Your Portland Home Fast for Cash
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get a fair cash offer within 24 hours. We buy houses in any condition —
              no repairs, no commissions, no showings. Close in as little as 7 days.
            </p>

            {/* Value props */}
            <ul className="space-y-3 mb-8">
              {[
                "✅ Fair cash offer in 24–48 hours",
                "✅ No repairs or cleaning required",
                "✅ Zero commissions or fees",
                "✅ Close in 7–14 days or on your timeline",
                "✅ No obligation — completely free",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-200">
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>🏡 500+ homes purchased</span>
              <span>⭐ 4.9/5 seller satisfaction</span>
              <span>📍 Portland &amp; surrounding areas</span>
            </div>
          </div>

          {/* Right: Lead form */}
          <div id="offer-form" className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-[#0D2B45] mb-2">
              Get Your Free Cash Offer
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Fill out the form and we&apos;ll call you within 24 hours with a fair, no-obligation offer.
            </p>
            <LeadForm source="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
