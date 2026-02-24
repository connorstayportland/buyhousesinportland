import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Property & What You Need",
    description:
      "Fill out our short form or call us directly. Let us know the property address, its condition, and — most importantly — what you need to walk away with. There's no obligation and no pressure.",
  },
  {
    number: "02",
    title: "We Find the Right Buyer for Your Number",
    description:
      "As your licensed agents, we take your property to our network of serious cash buyers and investors. We structure the deal so your number is met — our fee is built into what the buyer pays, not deducted from your proceeds.",
  },
  {
    number: "03",
    title: "Cash Closing on Your Timeline",
    description:
      "Once you accept an offer, we handle all the paperwork and coordinate with a local title company. Cash transactions mean no bank delays or financing contingencies. You close and receive your funds on a timeline that works for you.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A straightforward off-market process. No showings, no repairs, no MLS listing,
            and no waiting on bank approvals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-amber-200 z-0" />
              )}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0D2B45] text-amber-400 text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#0D2B45] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/#offer-form"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Get Started — Tell Us What You Need
          </Link>
          <p className="text-gray-500 text-sm mt-3">
            Free consultation. No obligation. We respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
