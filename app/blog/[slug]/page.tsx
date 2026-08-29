import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  brand: string;
  model: string;
  excerpt: string;
  coverImage: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  publishedAt: string;
  body: any[];
}

const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    brand,
    model,
    excerpt,
    coverImage,
    publishedAt,
    body
  }
`;

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(postQuery, { slug });
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Carmotive India",
    };
  }

  return {
    title: `${post.title} | Carmotive India`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const imageUrl = urlFor(post.coverImage)
    .width(1200)
    .height(675)
    .fit("crop")
    .url();

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <article className="mx-auto max-w-5xl px-6 py-16 md:py-20">

        {/* Back to Articles */}
        <Link
          href="/blog"
          className="
            mb-10
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-gray-600
            transition-colors
            hover:text-[#E50914]
            dark:text-gray-400
          "
        >
          ← Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-10">

          {/* Brand / Model / Date */}
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-[#E50914]">
              {post.brand}
            </span>

            <span className="text-gray-400">•</span>

            <span className="text-gray-500 dark:text-gray-400">
              {post.model}
            </span>

            <span className="text-gray-400">•</span>

            <span className="text-gray-500 dark:text-gray-400">
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              text-gray-900
              md:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            {post.title}
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
          >
            {post.excerpt}
          </p>
        </header>

        {/* Cover Image */}
        <div
          className="
            relative
            mb-12
            aspect-[16/9]
            overflow-hidden
            rounded-2xl
            bg-white
          "
        >
          <Image
            src={imageUrl}
            alt={post.coverImage?.alt || post.title}
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="mx-auto max-w-3xl">
          <div
            className="
              text-base
              leading-8
              text-gray-700
              dark:text-gray-300

              [&_h2]:mb-4
              [&_h2]:mt-10
              [&_h2]:text-2xl
              [&_h2]:font-bold
              [&_h2]:leading-tight
              [&_h2]:text-gray-900
              dark:[&_h2]:text-white

              [&_h3]:mb-3
              [&_h3]:mt-8
              [&_h3]:text-xl
              [&_h3]:font-bold
              [&_h3]:text-gray-900
              dark:[&_h3]:text-white

              [&_p]:mb-6

              [&_strong]:font-semibold
              [&_strong]:text-gray-900
              dark:[&_strong]:text-white

              [&_ul]:mb-6
              [&_ul]:list-disc
              [&_ul]:pl-6

              [&_ol]:mb-6
              [&_ol]:list-decimal
              [&_ol]:pl-6

              [&_li]:mb-2

              [&_a]:font-semibold
              [&_a]:text-[#E50914]
              [&_a]:underline
            "
          >
            <PortableText value={post.body} />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
          className="
            mx-auto
            mt-16
            max-w-3xl
            border-t
            border-gray-200
            pt-8
            dark:border-white/10
          "
        >
          <Link
            href="/blog"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              px-5
              py-3
              text-sm
              font-semibold
              text-gray-800
              transition-all
              hover:border-[#E50914]
              hover:text-[#E50914]
              dark:border-white/10
              dark:text-white
            "
          >
            ← View All Articles
          </Link>
        </div>

      </article>
    </main>
  );
}