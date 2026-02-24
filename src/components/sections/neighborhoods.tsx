import Link from "next/link";
import { neighborhoods } from "@/lib/neighborhoods";

export function NeighborhoodsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            We Buy Houses Throughout Greater Portland
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We purchase homes in Portland and all surrounding cities in Multnomah,
            Washington, and Clackamas counties.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {neighborhoods.map((hood) => (
            <Link
              key={hood.slug}
              href={`/neighborhoods/${hood.slug}`}
              className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 text-sm group"
            >
              <span className="text-amber-500 group-hover:scale-110 transition-transform">📍</span>
              <span className="text-gray-700 group-hover:text-[#0D2B45] font-medium">
                {hood.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Don&apos;t see your area?{" "}
            <a href="tel:503-927-2565" className="text-amber-600 font-semibold hover:underline">
              Call us at 503-927-2565
            </a>{" "}
            — we may still be able to help.
          </p>
        </div>
      </div>
    </section>
  );
}
