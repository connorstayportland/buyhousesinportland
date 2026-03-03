import { ImageResponse } from "next/og";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-posts";

export const alt = "Buy Houses in Portland — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  const title = post?.title ?? "Blog";
  const description = post?.description ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0D2B45",
          fontFamily: "system-ui, sans-serif",
          padding: "60px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 40,
            }}
          >
            <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
              <path d="M2 16L18 3L34 16" stroke="#F5A40C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 16V30H30V16" stroke="#F5A40C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 30V23H22V30" stroke="#F5A40C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 22, color: "#F5A40C", fontWeight: 700 }}>
              Buy Houses in Portland
            </span>
          </div>
          <h1
            style={{
              fontSize: title.length > 60 ? 40 : 48,
              fontWeight: 800,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontSize: 22,
                color: "#94a3b8",
                margin: "20px 0 0",
                lineHeight: 1.4,
                maxWidth: 800,
                overflow: "hidden",
              }}
            >
              {description.length > 140 ? description.slice(0, 140) + "..." : description}
            </p>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 18, color: "#64748b" }}>
            buyhousesinportland.com/blog
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
