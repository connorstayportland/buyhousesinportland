import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts";
import { LeadForm } from "@/components/ui/lead-form";
import type { BlogSection } from "@/lib/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Buy Houses in Portland`,
    description: post.description,
    alternates: {
      canonical: `https://buyhousesinportland.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="text-xl font-bold text-[#0D2B45] mt-8 mb-3"
        >
          {section.content}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-4">
          {section.content}
        </p>
      );
    case "list":
      return (
        <div key={index} className="mb-4">
          {section.content && (
            <p className="text-gray-600 mb-2">{section.content}</p>
          )}
          <ul className="space-y-2 text-gray-600">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5 shrink-0">&#8250;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "callout":
      return (
        <div
          key={index}
          className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl"
        >
          <p className="text-[#0D2B45] font-medium leading-relaxed">
            {section.content}
          </p>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Connor Laverty",
      jobTitle: "Licensed Oregon Real Estate Agent",
    },
    publisher: {
      "@type": "Organization",
      name: "Buy Houses in Portland",
      url: "https://buyhousesinportland.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://buyhousesinportland.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://buyhousesinportland.com/blog/${post.slug}`,
      },
    ],
  };

  // JSON-LD uses static data from blog-posts.ts, safe from injection
  const blogPostingJson = JSON.stringify(blogPostingSchema);
  const breadcrumbJson = JSON.stringify(breadcrumbSchema);

  return (
    <>
      <Script
        id="blog-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: blogPostingJson }}
      />
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
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            {" › "}
            <span className="text-gray-200">{post.title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-400 text-sm">
            Published {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {post.sections.map((section, i) => renderSection(section, i))}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-20 self-start">
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-[#0D2B45] mb-2">
                  Get a Free Cash Offer
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                  No obligation, no repairs needed. We&apos;ll be in touch
                  within 24 hours.
                </p>
                <LeadForm source={`blog-${post.slug}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-12 bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-[#0D2B45] mb-4">
            More Articles
          </h2>
          <div className="flex flex-wrap gap-2">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="text-sm bg-white border border-gray-200 hover:border-amber-400 px-3 py-1.5 rounded-lg transition-colors text-gray-600 hover:text-[#0D2B45]"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
