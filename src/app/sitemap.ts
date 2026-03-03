import type { MetadataRoute } from "next";
import { neighborhoods } from "@/lib/neighborhoods";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://buyhousesinportland.com";
const LAST_UPDATED = "2026-03-02";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/neighborhoods`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoods.map((hood) => ({
    url: `${BASE_URL}/neighborhoods/${hood.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogListingPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...neighborhoodPages, ...blogListingPage, ...blogPostPages];
}
