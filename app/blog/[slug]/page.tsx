import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

/* =========================================================
   TYPES
========================================================= */

interface Post {
  _id: string;

  title: string;

  slug: {
    current: string;
  };

  brand: string;

  model: string;

  excerpt: string;

  coverImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };

  publishedAt: string;

  body: any[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   SANITY QUERY
========================================================= */

const postQuery = `
  *[
    _type == "post" &&
    slug.current == $slug
  ][0] {
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

/* =========================================================
   DYNAMIC RENDERING
========================================================= */

export const dynamic = "force-dynamic";

export const revalidate = 0;

/* =========================================================
   GET BLOG POST
========================================================= */

async function getPost(
  slug: string
): Promise<Post | null> {
  try {
    const post = await client.fetch<Post | null>(
      postQuery,
      { slug }
    );

    return post;
  } catch (error) {
    console.error(
      "Failed to fetch blog post from Sanity:",
      error
    );

    return null;
  }
}

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Carmotive India",

      description:
        "The requested article could not be found on Carmotive India.",
    };
  }

  const imageUrl = post.coverImage
    ? urlFor(post.coverImage)
        .width(1200)
        .height(675)
        .fit("crop")
        .url()
    : undefined;

  return {
    title: `${post.title} | Carmotive India`,

    description:
      post.excerpt ||
      `Read the latest car news, insights and buying information from Carmotive India.`,

    openGraph: {
      title: `${post.title} | Carmotive India`,

      description:
        post.excerpt ||
        `Read the latest car news and insights from Carmotive India.`,

      type: "article",

      publishedTime: post.publishedAt,

      ...(imageUrl && {
        images: [
          {
            url: imageUrl,

            width: 1200,

            height: 675,

            alt:
              post.coverImage?.alt ||
              post.title,
          },
        ],
      }),
    },
  };
}

/* =========================================================
   BLOG POST PAGE
========================================================= */

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  /* =======================================================
     POST NOT FOUND
  ======================================================= */

  if (!post) {
    notFound();
  }

  /* =======================================================
     DATE
  ======================================================= */

  const formattedDate = post.publishedAt
    ? new Date(
        post.publishedAt
      ).toLocaleDateString("en-IN", {
        day: "numeric",

        month: "long",

        year: "numeric",
      })
    : "";

  /* =======================================================
     COVER IMAGE
  ======================================================= */

  const imageUrl = post.coverImage
    ? urlFor(post.coverImage)
        .width(1200)
        .height(675)
        .fit("crop")
        .url()
    : null;

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main
      className="
        min-h-screen
        bg-white
        text-gray-900
        dark:bg-[#050505]
        dark:text-white
      "
    >
      <article
        className="
          mx-auto
          max-w-5xl
          px-6
          pb-16
          pt-10
          md:pb-20
          md:pt-12
        "
      >

        {/* =================================================
            BACK TO ARTICLES
        ================================================= */}

        <Link
          href="/blog"
          className="
            mb-8
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-gray-600
            transition-colors
            duration-300
            hover:text-[#E50914]
            dark:text-gray-400
          "
        >
          ← Back to Articles
        </Link>

        {/* =================================================
            ARTICLE HEADER
        ================================================= */}

        <header className="mb-8">

          {/* Brand / Model / Date */}

          <div
            className="
              mb-4
              flex
              flex-wrap
              items-center
              gap-2
              text-sm
            "
          >

            {post.brand && (
              <>
                <span
                  className="
                    font-semibold
                    text-[#E50914]
                  "
                >
                  {post.brand}
                </span>

                {post.model && (
                  <span className="text-gray-400">
                    •
                  </span>
                )}
              </>
            )}

            {post.model && (
              <>
                <span
                  className="
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {post.model}
                </span>

                {formattedDate && (
                  <span className="text-gray-400">
                    •
                  </span>
                )}
              </>
            )}

            {formattedDate && (
              <span
                className="
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {formattedDate}
              </span>
            )}

          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className="
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-gray-900
              md:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            {post.title}
          </h1>

          {/* =================================================
              EXCERPT
          ================================================= */}

          {post.excerpt && (
            <p
              className="
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-gray-600
                dark:text-gray-400
              "
            >
              {post.excerpt}
            </p>
          )}

        </header>

        {/* =================================================
            COVER IMAGE
        ================================================= */}

        {imageUrl && (
          <div
            className="
              relative
              mb-10
              aspect-[16/9]
              overflow-hidden
              rounded-2xl
              bg-gray-100
              dark:bg-[#111111]
            "
          >
            <Image
              src={imageUrl}
              alt={
                post.coverImage?.alt ||
                post.title
              }
              fill
              priority
              unoptimized
              sizes="
                (max-width: 768px) 100vw,
                1200px
              "
              className="
                object-cover
              "
            />
          </div>
        )}

        {/* =================================================
            ARTICLE CONTENT
        ================================================= */}

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
            <PortableText
              value={post.body || []}
            />
          </div>

        </div>

        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <div
          className="
            mx-auto
            mt-12
            max-w-3xl
            border-t
            border-gray-200
            pt-6
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
              duration-300
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