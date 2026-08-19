import Image from "next/image";
import Link from "next/link";
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
}

const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    brand,
    model,
    excerpt,
    coverImage,
    publishedAt
  }
`;

async function getPosts(): Promise<Post[]> {
  return client.fetch(postsQuery);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-white px-6 py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#E50914]">
            Carmotive India
          </p>

          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Car News &amp; Insights
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
            Explore the latest car launches, prices, features,
            specifications and useful car buying information.
          </p>
        </div>

        {/* Empty State */}
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-20 text-center dark:border-white/10 dark:bg-[#111111]">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              No articles yet
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              New car articles will appear here once they are published.
            </p>
          </div>
        ) : (
          /* Articles */
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post._id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E50914]/30 hover:shadow-xl dark:border-white/10 dark:bg-[#111111] dark:shadow-none"
              >
                {/* Image */}
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white">
                    <Image
                      src={urlFor(post.coverImage)
                        .width(900)
                        .height(560)
                        .fit("crop")
                        .url()}
                      alt={post.coverImage?.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">

                  {/* Brand / Model */}
                  <div className="mb-3 flex items-center gap-2 text-sm">
                    <span className="font-semibold text-[#E50914]">
                      {post.brand}
                    </span>

                    <span className="text-gray-400">•</span>

                    <span className="text-gray-500 dark:text-gray-400">
                      {post.model}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="line-clamp-2 text-xl font-bold leading-7 text-gray-900 transition-colors group-hover:text-[#E50914] dark:text-white">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>

                  {/* Date + Read More */}
                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-white/10">
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>

                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="text-sm font-semibold text-[#E50914] transition-opacity hover:opacity-70"
                    >
                      Read More →
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}