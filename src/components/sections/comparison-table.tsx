const features = [
  {
    feature: "Who Represents You",
    us: "Licensed agents — we work for you",
    agent: "Agent works for a commission",
    ibuyer: "No representation",
  },
  {
    feature: "Listed on MLS",
    us: "No — fully off-market",
    agent: "Yes — public listing",
    ibuyer: "No — but limited buyer pool",
  },
  {
    feature: "Repairs Required",
    us: "None — sold as-is",
    agent: "Negotiated or required",
    ibuyer: "Required or deducted",
  },
  {
    feature: "Showings & Open Houses",
    us: "None",
    agent: "Multiple showings required",
    ibuyer: "Inspection required",
  },
  {
    feature: "Closing Timeline",
    us: "Fast — cash, no bank delays",
    agent: "45–90 days typically",
    ibuyer: "14–45 days",
  },
  {
    feature: "Financing Contingencies",
    us: "None — all cash buyers",
    agent: "Common — deals fall through",
    ibuyer: "Rare, but offer may be revised",
  },
  {
    feature: "Your Net Proceeds",
    us: "You tell us your number",
    agent: "Market price minus 5–6%",
    ibuyer: "Market price minus 5–7%",
  },
];

const Check = () => (
  <svg className="w-4 h-4 text-green-500 inline mr-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const X = () => (
  <svg className="w-4 h-4 text-red-400 inline mr-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export function ComparisonTable() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            How We Compare
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine the speed of a cash sale with the protection of licensed representation —
            something a direct buyer or iBuyer can&apos;t offer.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-gray-600 font-semibold w-1/4">
                  Feature
                </th>
                <th className="py-4 px-6 bg-[#0D2B45] text-white font-bold text-center">
                  <div>
                    Buy Houses in Portland
                    <div className="text-amber-400 text-xs font-normal mt-0.5">Licensed Agents + Investor Network</div>
                  </div>
                </th>
                <th className="py-4 px-6 text-gray-600 font-semibold text-center">
                  Traditional Agent
                </th>
                <th className="py-4 px-6 text-gray-600 font-semibold text-center">
                  iBuyer (Opendoor, etc.)
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-4 px-6 font-medium text-gray-800">{row.feature}</td>
                  <td className="py-4 px-6 text-center text-green-700 font-semibold">
                    <Check />{row.us}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-500">
                    <X />{row.agent}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-500">
                    <X />{row.ibuyer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          * Comparison is approximate and varies by transaction. Agent/iBuyer fees are industry averages.
        </p>
      </div>
    </section>
  );
}
