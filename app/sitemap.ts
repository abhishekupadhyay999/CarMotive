import type { MetadataRoute } from "next";

import { client } from "@/sanity/lib/client";

const siteUrl = "https://carmotiveindia.com";

interface BlogPost {
  slug: {
    current: string;
  };

  publishedAt?: string;
}

const postsQuery = `
  *[
    _type == "post" &&
    defined(slug.current)
  ] {
    slug,
    publishedAt
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<BlogPost[]>(postsQuery);

  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/brands`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/cars`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/exchange`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/finance`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug.current}`,

    lastModified: post.publishedAt
      ? new Date(post.publishedAt)
      : lastModified,

    changeFrequency: "monthly",

    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...blogPages,
  ];
}