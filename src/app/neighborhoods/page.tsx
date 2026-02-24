import type { Metadata } from "next";
import Link from "next/link";
import { neighborhoods } from "@/lib/neighborhoods";

export const metadata: Metadata = {
  title: "Areas We Buy Houses — Portland & Surrounding Cities",
  description:
    "We buy houses throughout the Portland metro area including Beaverton, Gresham, Lake Oswego, Hillsboro, Tigard, and more. Get a cash offer today.",
  alternates: {
    canonical: "https://buyhousesinportland.com/neighborhoods",
  },
};

export default function NeighborhoodsPage() {
  return (
    <div>
      <div className="bg-[#0D2B45] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Areas We Buy Houses</h1>
          <p className="text-xl text-gray-300">
            We purchase homes throughout the Portland metro area.
            Click your neighborhood to learn more.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((hood) => (
              <Link
                key={hood.slug}
                href={`/neighborhoods/${hood.slug}`}
                className="p-5 border border-gray-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-amber-500 text-xl">📍</span>
                  <h2 className="font-bold text-[#0D2B45] group-hover:text-amber-600 transition-colors">
                    {hood.name}
                  </h2>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2">{hood.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-[#F8FAFC] rounded-2xl">
            <h2 className="text-2xl font-bold text-[#0D2B45] mb-3">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-gray-600 mb-6">
              We may still be able to help. Call us to discuss your property.
            </p>
            <a
              href="tel:503-927-2565"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Call 503-927-2565
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
