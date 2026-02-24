import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2B45] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <rect width="36" height="36" rx="6" fill="#F5A40C" />
                <path d="M18 6L30 16V30H22V22H14V30H6V16L18 6Z" fill="#0D2B45" />
              </svg>
              <span className="text-white font-bold">Buy Houses in Portland</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              We are local Portland cash home buyers. We buy houses in any condition,
              any situation — no repairs, no commissions, no hassle.
            </p>
            <div className="text-sm space-y-1">
              <p>📞 <a href="tel:[YOUR_PHONE]" className="hover:text-amber-400 transition-colors">[YOUR_PHONE]</a></p>
              <p>📍 [YOUR_ADDRESS], Portland, OR</p>
              <p>✉️ <a href="mailto:info@buyhousesinportland.com" className="hover:text-amber-400 transition-colors">info@buyhousesinportland.com</a></p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/about", label: "About Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/neighborhoods", label: "Areas We Buy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-bold mb-4">Areas We Serve</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Southeast Portland",
                "Northeast Portland",
                "Northwest Portland",
                "Beaverton",
                "Gresham",
                "Lake Oswego",
                "Tigard",
                "Hillsboro",
              ].map((area) => (
                <li key={area}>
                  <Link
                    href={`/neighborhoods/${area.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-600 border-opacity-50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} Buy Houses in Portland. All rights reserved.
          </p>
          <p>
            We are not real estate agents. We are professional home buyers.
            buyhousesinportland.com is a direct buyer, not an MLS listing service.
          </p>
        </div>
      </div>
    </footer>
  );
}
