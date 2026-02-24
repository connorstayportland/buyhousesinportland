import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Local Portland Cash Home Buyers",
  description:
    "Learn about our team and why Portland homeowners trust us to buy their homes fast. Local buyers, fair offers, and a hassle-free process since [FOUNDED_YEAR].",
  alternates: {
    canonical: "https://buyhousesinportland.com/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[#0D2B45] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Buy Houses in Portland</h1>
          <p className="text-xl text-gray-300">
            We&apos;re local Portland investors who are passionate about helping homeowners
            sell quickly and stress-free.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#0D2B45] mb-6">
                Why We Started Buying Houses in Portland
              </h2>
              {/* PLACEHOLDER: Replace with your real story */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My name is <strong>[YOUR_NAME]</strong>, and I started buying houses in Portland in
                  <strong> [FOUNDED_YEAR]</strong> because I saw how stressful the traditional home
                  selling process was for people going through difficult situations.
                </p>
                <p>
                  Whether it was a family facing foreclosure, someone who inherited a property
                  they couldn&apos;t manage, or a landlord tired of problem tenants — these sellers
                  deserved a better option. So I created one.
                </p>
                <p>
                  Today, we&apos;ve helped hundreds of Portland-area homeowners sell quickly and
                  move on with their lives. We&apos;re not a big corporation — we&apos;re your neighbors,
                  and we care about the outcome as much as you do.
                </p>
              </div>
              <p className="text-xs text-amber-600 italic mt-4">
                * Replace this section with your real story before launching.
              </p>
            </div>

            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Local Portland real estate investor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "🤝",
                title: "Honesty First",
                desc: "We tell you the truth about our offer and why we arrived at that number. No bait-and-switch.",
              },
              {
                icon: "⚡",
                title: "Move at Your Pace",
                desc: "We can close in 7 days or wait 90 — whatever timeline works for you.",
              },
              {
                icon: "🏠",
                title: "Local Expertise",
                desc: "We know Portland neighborhoods intimately. We're not a national call center.",
              },
            ].map((val) => (
              <div key={val.title} className="text-center p-6 bg-[#F8FAFC] rounded-xl">
                <div className="text-3xl mb-3">{val.icon}</div>
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
              Get Your Free Cash Offer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
