const features = [
  {
    feature: "Commissions / Fees",
    cash: "None",
    agent: "5–6% of sale price",
    ibuyer: "5–7% of sale price",
    cashGood: true,
  },
  {
    feature: "Closing Timeline",
    cash: "7–14 days",
    agent: "45–90 days",
    ibuyer: "14–45 days",
    cashGood: true,
  },
  {
    feature: "Repairs Required",
    cash: "None",
    agent: "Negotiated or required",
    ibuyer: "Required or deducted",
    cashGood: true,
  },
  {
    feature: "Showings / Open Houses",
    cash: "None",
    agent: "Multiple showings",
    ibuyer: "May require inspection",
    cashGood: true,
  },
  {
    feature: "Offer Certainty",
    cash: "Guaranteed cash offer",
    agent: "Subject to financing",
    ibuyer: "May be revised",
    cashGood: true,
  },
  {
    feature: "Closing Costs",
    cash: "We pay them",
    agent: "Seller pays 1–3%",
    ibuyer: "Seller pays 1–2%",
    cashGood: true,
  },
  {
    feature: "Contingencies",
    cash: "None",
    agent: "Inspection, financing, appraisal",
    ibuyer: "Inspection",
    cashGood: true,
  },
];

const Check = () => (
  <span className="text-green-500 text-xl" aria-label="Yes">✓</span>
);
const X = () => (
  <span className="text-red-400 text-xl" aria-label="No">✗</span>
);

export function ComparisonTable() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            Why Sell to a Cash Buyer?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare your options side by side. Cash buyers like us offer speed, certainty,
            and savings on fees.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-gray-600 font-semibold w-1/4">
                  Feature
                </th>
                <th className="py-4 px-6 bg-amber-500 text-white font-bold text-center">
                  <div className="flex items-center justify-center gap-1">
                    🏠 Cash Buyer
                    <span className="text-xs bg-white text-amber-600 px-1 rounded ml-1">US</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-gray-600 font-semibold text-center">
                  Traditional Agent
                </th>
                <th className="py-4 px-6 text-gray-600 font-semibold text-center">
                  iBuyer (Opendoor etc.)
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-4 px-6 font-medium text-gray-800">{row.feature}</td>
                  <td className="py-4 px-6 text-center text-green-700 font-semibold">
                    <Check /> {row.cash}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    <X /> {row.agent}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    <X /> {row.ibuyer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          * Comparison is approximate and varies by market conditions. Agent/iBuyer fees are industry averages.
        </p>
      </div>
    </section>
  );
}
