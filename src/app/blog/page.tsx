import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Buy Houses in Portland",
  description:
    "Practical guides for Portland homeowners — foreclosure help, selling inherited homes, as-is sales, cash buyers, and more.",
  alternates: {
    canonical: "https://buyhousesinportland.com/blog",
  },
  openGraph: {
    title: "Blog | Buy Houses in Portland",
    description:
      "Practical guides for Portland homeowners — foreclosure help, selling inherited homes, as-is sales, cash buyers, and more.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://buyhousesinportland.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://buyhousesinportland.com/blog",
      },
    ],
  };

  // Static schema data from our own codebase, safe from injection
  const breadcrumbJson = JSON.stringify(breadcrumbSchema);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
      />

      {/* Page header */}
      <div className="bg-[#0D2B45] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {" › "}
            <span className="text-gray-200">Blog</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-300">
            Practical guides for Portland homeowners navigating tough real estate
            situations.
          </p>
        </div>
      </div>

      {/* Post grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[#F8FAFC] rounded-xl border border-gray-200 hover:border-amber-400 p-6 transition-colors"
              >
                <h2 className="text-lg font-bold text-[#0D2B45] group-hover:text-amber-600 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-amber-500 text-sm font-medium group-hover:text-amber-600 transition-colors">
                    Read more ›
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
