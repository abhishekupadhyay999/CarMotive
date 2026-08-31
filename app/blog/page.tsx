import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/home-v2/Navbar";
import Footer from "@/components/home-v2/Footer";

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

  coverImage?: {
    asset?: {
      _ref: string;
    };

    alt?: string;
  };

  publishedAt: string;
}

const postsQuery = `
  *[_type == "post"]
    | order(publishedAt desc)
    {
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
    <main className="min-h-screen bg-white dark:bg-[#050505]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-gray-200
          bg-white
          px-6
          pb-6
          pt-6
          dark:border-white/10
          dark:bg-[#050505]
          lg:px-8
          lg:pb-8
          lg:pt-8
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-56
            w-56
            -translate-x-1/2
            rounded-full
            bg-[#E50914]/5
            blur-[80px]
            dark:bg-[#E50914]/10
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-4xl
            text-center
          "
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#E50914]/20
              bg-[#E50914]/5
              px-4
              py-1.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#E50914]
            "
          >
            Carmotive India
          </span>

          {/* Heading */}

          <h1
            className="
              mt-2
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-gray-900
              sm:text-4xl
              md:text-5xl
              dark:text-white
            "
          >
            Car News &amp;
            <span className="text-[#E50914]">
              {" "}Insights
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
              dark:text-gray-400
            "
          >
            Stay updated with the latest car launches, prices,
            features, specifications, offers and useful car
            buying information from Carmotive India.
          </p>
        </div>
      </section>

      {/* =====================================================
          ARTICLES
      ===================================================== */}

      <section
        className="
          bg-gray-50
          px-6
          py-6
          dark:bg-[#050505]
          lg:px-8
          lg:py-10
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}

          <div className="mb-5">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#E50914]
              "
            >
              Latest Articles
            </p>

            <h2
              className="
                mt-1
                text-2xl
                font-bold
                text-gray-900
                sm:text-3xl
                dark:text-white
              "
            >
              Latest from Carmotive
            </h2>

            <p
              className="
                mt-1
                max-w-2xl
                text-sm
                leading-6
                text-gray-600
                dark:text-gray-400
              "
            >
              Discover useful information about new cars,
              features, pricing, launches and car buying.
            </p>
          </div>

          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {posts.length === 0 ? (
            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-6
                py-12
                text-center
                shadow-sm
                dark:border-white/10
                dark:bg-[#111111]
                dark:shadow-none
              "
            >
              <h2
                className="
                  text-2xl
                  font-semibold
                  text-gray-900
                  dark:text-white
                "
              >
                No articles yet
              </h2>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md
                  text-sm
                  text-gray-600
                  dark:text-gray-400
                "
              >
                New car articles will appear here once they are
                published from the Carmotive Studio.
              </p>
            </div>
          ) : (
            /* =================================================
               ARTICLE GRID
            ================================================= */

            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {posts.map((post) => {
                const imageUrl = post.coverImage?.asset
                  ? urlFor(post.coverImage)
                      .width(900)
                      .height(560)
                      .fit("crop")
                      .url()
                  : null;

                return (
                  <article
                    key={post._id}
                    className="
                      group
                      overflow-hidden
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#E50914]/30
                      hover:shadow-lg

                      dark:border-white/10
                      dark:bg-[#111111]
                      dark:shadow-none
                    "
                  >

                    {/* =================================================
                        COVER IMAGE
                    ================================================= */}

                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="block"
                    >
                      <div
                        className="
                          relative
                          aspect-[16/10]
                          overflow-hidden
                          bg-gray-100

                          dark:bg-white
                        "
                      >
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={
                              post.coverImage?.alt ||
                              post.title
                            }
                            fill
                            sizes="
                              (max-width: 640px) 100vw,
                              (max-width: 1024px) 50vw,
                              33vw
                            "
                            className="
                              object-cover
                              transition-transform
                              duration-500
                              group-hover:scale-105
                            "
                          />
                        ) : (
                          <div
                            className="
                              flex
                              h-full
                              items-center
                              justify-center
                              text-sm
                              text-gray-500
                            "
                          >
                            No image available
                          </div>
                        )}

                        {/* Image Overlay */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/40
                            via-transparent
                            to-transparent
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        />
                      </div>
                    </Link>

                    {/* =================================================
                        CARD CONTENT
                    ================================================= */}

                    <div className="p-4">

                      {/* Brand / Model */}

                      <div
                        className="
                          mb-1.5
                          flex
                          flex-wrap
                          items-center
                          gap-2
                          text-xs
                        "
                      >
                        <span
                          className="
                            font-semibold
                            text-[#E50914]
                          "
                        >
                          {post.brand}
                        </span>

                        <span className="text-gray-400">
                          •
                        </span>

                        <span
                          className="
                            text-gray-500
                            dark:text-gray-400
                          "
                        >
                          {post.model}
                        </span>
                      </div>

                      {/* Title */}

                      <Link
                        href={`/blog/${post.slug.current}`}
                      >
                        <h2
                          className="
                            line-clamp-2
                            text-lg
                            font-bold
                            leading-6
                            text-gray-900
                            transition-colors
                            duration-300
                            group-hover:text-[#E50914]
                            dark:text-white
                          "
                        >
                          {post.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}

                      <p
                        className="
                          mt-1.5
                          line-clamp-3
                          text-sm
                          leading-5
                          text-gray-600
                          dark:text-gray-400
                        "
                      >
                        {post.excerpt}
                      </p>

                      {/* Bottom Row */}

                      <div
                        className="
                          mt-3
                          flex
                          items-center
                          justify-between
                          border-t
                          border-gray-100
                          pt-2.5
                          dark:border-white/10
                        "
                      >

                        <span
                          className="
                            text-[11px]
                            text-gray-500
                          "
                        >
                          {new Date(
                            post.publishedAt
                          ).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>

                        <Link
                          href={`/blog/${post.slug.current}`}
                          className="
                            text-xs
                            font-semibold
                            text-[#E50914]
                            transition-opacity
                            hover:opacity-70
                          "
                        >
                          Read More →
                        </Link>

                      </div>
                    </div>

                    {/* Bottom Accent */}

                    <div
                      className="
                        h-[2px]
                        w-0
                        bg-[#E50914]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}