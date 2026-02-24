import type { Metadata } from "next";
import { LeadForm } from "@/components/ui/lead-form";

export const metadata: Metadata = {
  title: "Contact Us — Portland Cash Home Buyers",
  description:
    "Contact Buy Houses in Portland. Call, email, or fill out our form to get your free no-obligation cash offer.",
  alternates: {
    canonical: "https://buyhousesinportland.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-[#0D2B45] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Ready to sell? Have questions? We&apos;re here to help — no pressure, no obligation.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0D2B45] mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-bold text-[#0D2B45]">Call or Text</h3>
                    <a
                      href="tel:503-927-2565"
                      className="text-amber-600 font-semibold hover:underline text-lg"
                    >
                      503-927-2565
                    </a>
                    <p className="text-gray-500 text-sm">Mon–Fri 8am–6pm, Sat 9am–3pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="font-bold text-[#0D2B45]">Email</h3>
                    <a
                      href="mailto:info@buyhousesinportland.com"
                      className="text-amber-600 hover:underline"
                    >
                      info@buyhousesinportland.com
                    </a>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-bold text-[#0D2B45]">Service Area</h3>
                    <p className="text-gray-600 text-sm">
                      Portland metro area including all neighborhoods in Multnomah,
                      Washington, and Clackamas counties.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm font-medium">
                  ⚡ Fastest Response: Call or text us directly for same-day answers.
                  Form submissions are answered within 24 hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#0D2B45] mb-6">
                Request Your Free Cash Offer
              </h2>
              <LeadForm source="contact-page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
