"use client";

import Link from "next/link";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        {/* Image area */}
        <div className="relative overflow-hidden">
          <div className="aspect-[16/9] bg-gradient-to-br from-healing-teal/20 to-deep-teal/40 group-hover:scale-105 transition-transform duration-500" />
          <span className="absolute top-3 left-3 bg-healing-teal text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ color: "#FFFFFF" }}>
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-healing-teal transition-colors duration-300 mb-2" style={{ color: "#1E293B" }}>
            {post.title}
          </h3>
          <p className="text-slate text-sm line-clamp-2 mb-4 flex-1" style={{ color: "#64748B" }}>
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-slate border-t border-gray-100 pt-3" style={{ color: "#64748B" }}>
            <time dateTime={post.date}>{formattedDate}</time>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
