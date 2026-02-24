const stats = [
  { value: "500+", label: "Homes Purchased" },
  { value: "Since [FOUNDED_YEAR]", label: "Serving Portland" },
  { value: "7 Days", label: "Fastest Close" },
  { value: "100%", label: "No-Obligation Offers" },
];

export function TrustSignals() {
  return (
    <section className="bg-[#F8FAFC] py-10 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-2xl lg:text-3xl font-bold text-[#0D2B45] mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">🔒</span>
            <span>SSL Encrypted Form</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500 text-xl">🏛️</span>
            <span>Licensed Oregon Buyers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-xl">⭐</span>
            {/* Replace with actual BBB badge once registered */}
            <span>BBB Accredited Business <span className="text-xs">(pending)</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xl">📍</span>
            <span>Local Portland Company</span>
          </div>
        </div>
      </div>
    </section>
  );
}
