import Image from "next/image";
import Link from "next/link";

export function AgentBio() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo + credentials */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-xl mb-6">
              <Image
                src="/connor-headshot.jpg"
                alt="Connor Laverty — Licensed Oregon Real Estate Agent"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, 256px"
              />
            </div>
            <p className="font-bold text-[#0D2B45] text-xl">Connor Laverty</p>
            <p className="text-gray-500 text-sm mt-1">Licensed Oregon Real Estate Agent</p>
            <p className="text-gray-400 text-xs mt-0.5">Kelly Right Real Estate</p>
            <a
              href="tel:503-927-2565"
              className="mt-4 inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              503-927-2565
            </a>
          </div>

          {/* Bio text */}
          <div>
            <div className="w-12 h-0.5 bg-amber-500 mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] leading-tight mb-6">
              You&apos;ll have a licensed agent in your corner — not just a buyer making an offer.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m Connor Laverty, a licensed Oregon real estate agent based in Portland.
                I work with sellers who want to move their property quickly and cleanly —
                without listing on the MLS, making repairs, or dealing with months of uncertainty.
              </p>
              <p>
                My background is in Portland development and investment. I know the neighborhoods,
                I know the buyers, and I know how to structure a deal that actually works for both sides.
                When you work with me, I represent <em>you</em> — not the buyer.
              </p>
              <p>
                Tell me what you need to walk away with, and I&apos;ll tell you honestly
                whether we can make it happen.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#offer-form"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200 text-center"
              >
                Tell Us About Your Property
              </Link>
              <Link
                href="/about"
                className="inline-block border border-[#0D2B45] text-[#0D2B45] hover:bg-[#0D2B45] hover:text-white font-semibold py-3 px-7 rounded-lg transition-colors duration-200 text-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
