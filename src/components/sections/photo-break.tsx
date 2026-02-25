import Image from "next/image";
import Link from "next/link";

export function PhotoBreak() {
  return (
    <section className="relative overflow-hidden" style={{ height: 400 }}>
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-UVG1K4ejdB8?w=1600&q=80"
        alt="Portland Oregon skyline"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark + amber gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B45]/95 via-[#0D2B45]/80 to-[#0D2B45]/60" />
      <div className="absolute inset-0 bg-amber-900/20" />

      {/* Amber accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="w-12 h-0.5 bg-amber-500 mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Portland homeowners deserve a better option.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Off-market. Represented by a licensed agent. Structured around your number.
            </p>
            <Link
              href="/#offer-form"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Tell Us About Your Property
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
