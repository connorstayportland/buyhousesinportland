// PLACEHOLDER: Replace these with real testimonials before going live.

const testimonials = [
  {
    name: "Sarah M.",
    location: "Southeast Portland",
    stars: 5,
    text: "I was facing foreclosure and didn't know what to do. The team reached out within hours and made the whole process so easy. They found a buyer quickly and we closed fast. I walked away with what I needed. Highly recommend.",
    situation: "Foreclosure",
  },
  {
    name: "Robert T.",
    location: "Beaverton, OR",
    stars: 5,
    text: "Inherited my parents' house and it needed a ton of work. I didn't have the money or time to fix it up. These guys bought it as-is, no repairs, fair price. Couldn't be happier with how smooth it went.",
    situation: "Inherited Home",
  },
  {
    name: "Jennifer L.",
    location: "Gresham, OR",
    stars: 5,
    text: "Going through a divorce and needed to sell fast. They were professional, compassionate, and got the deal done in 11 days. The offer was fair and there were absolutely no hidden fees. Would use them again.",
    situation: "Divorce",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B45] mb-4">
            What Portland Sellers Are Saying
          </h2>
          <p className="text-gray-600">
            Real stories from real homeowners we&apos;ve helped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <StarRating count={t.stars} />
              <p className="text-gray-700 mt-4 mb-4 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-[#0D2B45]">{t.name}</p>
                <p className="text-sm text-gray-500">
                  {t.location} · {t.situation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note for site owner */}
        <p className="text-center text-xs text-gray-400 mt-6 italic">
          * Replace these placeholder testimonials with real reviews before launching.
          Collect reviews via Google Business Profile or direct follow-up calls.
        </p>
      </div>
    </section>
  );
}
