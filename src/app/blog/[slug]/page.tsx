import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Calendar, Clock, User } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Sukrithi Family Health Centre" };
  }

  return {
    title: `${post.title} | Sukrithi Family Health Centre`,
    description: post.excerpt,
    keywords: [post.category, "sukrithi health", "Dr Premlal", "diabetes"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Sukrithi Family Health Centre",
      locale: "en_IN",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Convert markdown-style content to simple HTML paragraphs
  const contentHtml = post.content
    .split("\n\n")
    .filter((block) => block.trim())
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return `<h2>${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        return `<h3>${trimmed.slice(4)}</h3>`;
      }
      return `<p>${trimmed}</p>`;
    })
    .join("\n");

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <Container>
          <nav className="flex items-center gap-1 text-sm text-slate mb-6">
            <Link href="/" className="hover:text-healing-teal transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-healing-teal transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>

          <span className="inline-block bg-healing-teal text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <Container>
          <article
            className="max-w-3xl mx-auto prose-article"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Back to Blog */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-healing-teal font-medium hover:text-deep-teal transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
