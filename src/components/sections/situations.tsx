import Link from "next/link";

const situations = [
  {
    icon: "⚠️",
    title: "Facing Foreclosure",
    description:
      "Missed mortgage payments putting your home at risk? We can close quickly to stop foreclosure, protect your credit, and put cash in your pocket.",
  },
  {
    icon: "🏚️",
    title: "Inherited Property",
    description:
      "Inherited a home you don't want to manage or can't afford to fix up? We handle probate situations and buy as-is, so you can move on.",
  },
  {
    icon: "💔",
    title: "Going Through Divorce",
    description:
      "A fast, fair sale eliminates the stress of a shared property during divorce. We work with both parties and close on your schedule.",
  },
  {
    icon: "🔨",
    title: "Needs Major Repairs",
    description:
      "Fire damage, foundation issues, mold, hoarder homes — we've seen it all. We buy in any condition so you don't pay a cent for repairs.",
  },
  {
    icon: "🏘️",
    title: "Tired Landlord",
    description:
      "Done with problem tenants, maintenance calls, and vacancies? We buy rental properties with tenants in place and close without hassle.",
  },
  {
    icon: "✈️",
    title: "Relocating for Work",
    description:
      "Moving to a new city and need to sell fast? We can close in days, not months — so you can start your next chapter without looking back.",
  },
];

export function Situations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            We Buy Houses in Any Situation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whatever your reason for selling, we&apos;re here to help. No judgment —
            just a fair cash offer and a smooth closing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {situations.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-gray-100 rounded-xl hover:shadow-md hover:border-amber-200 transition-all duration-200 group"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#0D2B45] text-lg mb-2 group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0D2B45] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Don&apos;t See Your Situation?</h3>
          <p className="text-gray-300 mb-6">
            Call us or fill out the form. We work with all types of sellers and properties.
            There&apos;s no situation we haven&apos;t helped with.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:[YOUR_PHONE]"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Call [YOUR_PHONE]
            </a>
            <Link
              href="/#offer-form"
              className="border border-white hover:bg-white hover:text-[#0D2B45] text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Get My Cash Offer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
