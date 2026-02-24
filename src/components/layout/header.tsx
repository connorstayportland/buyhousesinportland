"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0D2B45] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect width="36" height="36" rx="6" fill="#F5A40C" />
              <path d="M18 6L30 16V30H22V22H14V30H6V16L18 6Z" fill="#0D2B45" />
            </svg>
            <span className="text-white font-bold text-lg leading-tight">
              Buy Houses<br />
              <span className="text-amber-400 text-sm font-semibold">in Portland</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/neighborhoods" className="text-gray-300 hover:text-white transition-colors">
              Areas We Buy
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <a
              href="tel:503-927-2565"
              className="text-amber-400 font-bold hover:text-amber-300 transition-colors"
            >
              📞 503-927-2565
            </a>
            <Link
              href="/#offer-form"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
              Get My Cash Offer
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {[
              { href: "/how-it-works", label: "How It Works" },
              { href: "/about", label: "About" },
              { href: "/neighborhoods", label: "Areas We Buy" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white py-2 px-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:503-927-2565"
              className="block text-amber-400 font-bold py-2 px-2"
            >
              📞 503-927-2565
            </a>
            <Link
              href="/#offer-form"
              className="block bg-amber-500 text-white font-bold py-3 px-4 rounded-lg text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get My Cash Offer
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
