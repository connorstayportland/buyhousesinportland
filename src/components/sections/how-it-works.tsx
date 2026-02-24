import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Request Your Offer",
    description:
      "Fill out our simple form or give us a call. Tell us about your property — address, condition, and your timeline. No need to clean or repair anything.",
  },
  {
    number: "02",
    icon: "💰",
    title: "Review Your Cash Offer",
    description:
      "We'll call you within 24 hours with a fair, all-cash offer based on the current market. There's zero obligation to accept — take your time.",
  },
  {
    number: "03",
    icon: "🎉",
    title: "Close & Get Paid",
    description:
      "Pick your closing date — as fast as 7 days or on your schedule. We handle all the paperwork. You get cash in hand with no fees or commissions deducted.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            How It Works — 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selling your Portland home for cash has never been easier.
            No showings, no repairs, no waiting for bank approvals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-amber-200 z-0" />
              )}

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500 text-white text-3xl mb-4 shadow-lg">
                  {step.icon}
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
            Start the Process — Get My Cash Offer
          </Link>
          <p className="text-gray-500 text-sm mt-3">
            Free, no obligation. We call you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
