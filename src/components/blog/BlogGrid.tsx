"use client";

import type { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-slate text-lg" style={{ color: "#64748B" }}>No posts found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <ScrollReveal key={post.slug} delay={index * 0.1}>
          <BlogCard post={post} />
        </ScrollReveal>
      ))}
    </div>
  );
}
