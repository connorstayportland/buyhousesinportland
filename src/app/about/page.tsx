import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Licensed Portland Real Estate Agents & Investors",
  description:
    "We are a Portland-based team of licensed real estate agents and investors, founded in 2025. We specialize in off-market sales to cash buyers — representing sellers every step of the way.",
  alternates: {
    canonical: "https://buyhousesinportland.com/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-[#0D2B45] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Team</h1>
          <p className="text-xl text-gray-300">
            Licensed Oregon agents and local investors helping Portland homeowners
            sell on their terms — off-market, fast, and without the uncertainty of a traditional listing.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#0D2B45] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We are a small, Portland-based team of licensed real estate agents and
                  active investors. We started in <strong>2025</strong> with a focus on
                  infill development — but we quickly found that a lot of sellers were
                  reaching out who needed something different from what the traditional
                  market could offer them.
                </p>
                <p>
                  Not everyone wants to list on the MLS, deal with showings, make repairs,
                  or wait months for a financed buyer to close. Some sellers just need a
                  clean, fast transaction with someone they can trust.
                </p>
                <p>
                  So we built a network of serious cash buyers and investors — and now
                  we represent sellers through that process. You get licensed agent
                  representation, a buyer from our vetted network, and a closing timeline
                  that actually works for you.
                </p>
              </div>
              <p className="text-xs text-amber-600 italic mt-4">
                * Add your personal story and team photos here before launching.
              </p>
            </div>

            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Buy Houses in Portland team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "We Represent You",
                desc: "As licensed agents, our job is to protect your interests — not push you into a deal that doesn't work for you.",
              },
              {
                title: "Transparent Process",
                desc: "We walk you through the numbers clearly. You'll understand exactly how the deal is structured before you decide anything.",
              },
              {
                title: "Local Knowledge",
                desc: "We know Portland neighborhoods, values, and the investor community here. We're not a national call center.",
              },
            ].map((val) => (
              <div key={val.title} className="p-6 bg-[#F8FAFC] rounded-xl border border-gray-100">
                <div className="w-8 h-0.5 bg-amber-500 mb-4" />
                <h3 className="font-bold text-[#0D2B45] mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/#offer-form"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Tell Us About Your Property
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
