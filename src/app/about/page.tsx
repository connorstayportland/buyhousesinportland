import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Licensed Portland Real Estate Agents & Investors",
  description:
    "We are a Portland-based team of licensed real estate agents and active developers. We specialize in off-market sales — representing sellers and connecting them with serious cash buyers.",
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
            Licensed Oregon agents and active Portland developers — we know this market
            from the inside, and we use that to get sellers a better outcome.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#0D2B45] mb-6">
                Why We Built This
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our team has been active in Portland real estate development since 2025,
                  focused primarily on infill projects — acquiring underutilized properties
                  and building housing the city actually needs.
                </p>
                <p>
                  That work taught us something: the best deals rarely show up on the MLS.
                  They come from sellers who have a real reason to move quickly and don&apos;t
                  want to go through the friction of a traditional listing.
                </p>
                <p>
                  We also noticed that a lot of those sellers were getting a raw deal —
                  either accepting too little from an unsophisticated cash buyer, or burning
                  months and thousands of dollars trying to list a property that wasn&apos;t
                  right for the retail market.
                </p>
                <p>
                  So we built a better option. We represent sellers as licensed agents,
                  take their property directly to our network of serious buyers and investors,
                  and structure the deal around what the seller actually needs to walk away with.
                  Fast, clean, and with someone in their corner the whole time.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg mb-4">
                <Image
                  src="/connor-headshot.jpg"
                  alt="Connor — Licensed Oregon Real Estate Agent"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="font-bold text-[#0D2B45] text-lg">Connor</p>
              <p className="text-gray-500 text-sm">Licensed Oregon Real Estate Agent</p>
              <p className="text-gray-500 text-sm">Portland Developer &amp; Investor</p>
              <a
                href="tel:503-927-2565"
                className="mt-4 text-amber-600 font-semibold hover:underline text-sm"
              >
                503-927-2565
              </a>
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
                desc: "We're active Portland developers. We know neighborhoods, values, and the buyer community here better than most.",
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
