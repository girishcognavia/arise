"use client";

import { useState } from "react";
import type { BlogPost } from "@/types/blog";
import CategoryFilter from "./CategoryFilter";
import BlogGrid from "./BlogGrid";

interface BlogListingClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogListingClient({
  posts,
  categories,
}: BlogListingClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      <div className="mb-10">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <BlogGrid posts={filteredPosts} />
    </>
  );
}
