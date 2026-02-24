import Link from "next/link";

const situations = [
  {
    title: "Facing Foreclosure",
    description:
      "When you're behind on payments, time matters. We move quickly and work with buyers who can close fast — giving you the best chance of walking away with something rather than losing the home to foreclosure.",
  },
  {
    title: "Inherited Property",
    description:
      "Inherited a home you don't want to maintain, renovate, or manage from a distance? We handle as-is sales and are experienced working with sellers navigating probate and estate situations.",
  },
  {
    title: "Going Through Divorce",
    description:
      "Selling a shared property during divorce benefits from a clean, professional process. We represent the seller, keep things moving efficiently, and work to close on a timeline that suits both parties.",
  },
  {
    title: "Property Needs Major Work",
    description:
      "Our buyer network purchases properties in any condition — foundation issues, fire damage, outdated systems, hoarder situations. You won't be asked to invest a dollar in the property before closing.",
  },
  {
    title: "Tired Landlord",
    description:
      "If you're done with tenants, maintenance calls, and the responsibilities of being a landlord, we can help you exit cleanly. We regularly work with landlords selling occupied rental properties.",
  },
  {
    title: "Relocating or Downsizing",
    description:
      "Whether you're moving for work or simplifying your life, an off-market cash sale removes the uncertainty of a traditional listing and lets you plan your next move with confidence.",
  },
];

export function Situations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            We Work With Sellers in All Situations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whatever is driving your decision to sell, we&apos;re here to listen and help
            you understand your options — with licensed representation and no pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {situations.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-gray-100 rounded-xl hover:shadow-md hover:border-amber-200 transition-all duration-200"
            >
              <div className="w-8 h-0.5 bg-amber-500 mb-4" />
              <h3 className="font-bold text-[#0D2B45] text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0D2B45] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Not Sure If We Can Help?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Give us a call or fill out the form. We&apos;re happy to have an honest conversation
            about your property and your options — no commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:503-927-2565"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Call 503-927-2565
            </a>
            <Link
              href="/#offer-form"
              className="border border-white hover:bg-white hover:text-[#0D2B45] text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Tell Us About Your Property
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
