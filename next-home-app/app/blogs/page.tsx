"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/footer";
import { Search } from "lucide-react";

const API_BASE = "http://72.61.229.100:3001";

interface Blog {
  id: number;
  title: string;
  author: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  description: string;
  badge: string | null;
  link: string | null;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Career Tips",
    "HR Insights",
    "Industry News",
    "Tech Trends",
    "Remote Work",
    "General",
  ];

  useEffect(() => {
    fetch(`${API_BASE}/blogs`)
      .then((res) => res.json())
      .then((data) => data.status && setBlogs(data.result))
      .finally(() => setLoading(false));
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || (blog.badge ?? "General") === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Gradient blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-teal-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Header */}
        <section className="pt-28 pb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Insights & Articles
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore expert perspectives on careers, hiring, technology, and the
            future of work.
          </p>
        </section>

        {/* Categories */}
        <section className="pb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-emerald-600 text-white shadow-md scale-105"
                    : "bg-white/80 backdrop-blur border text-gray-600 hover:bg-emerald-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Search */}
        <section className="pb-14">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="placeholder:text-gray-400 w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
        </section>

        {/* Blogs */}
        <section className="pb-24 px-10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading &&
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white rounded-2xl h-90"
                />
              ))}

            {!loading &&
              filteredBlogs.map((blog) => {
                const imageSrc = blog.image_url
                  ? `${API_BASE}${blog.image_url}`
                  : "/a1-selector-next/blog1.png";

                return (
                  <a
                    key={blog.id}
                    href={blog.link || `/blogs/${blog.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
                        {blog.badge ?? "General"}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-xs text-gray-400 mb-2">
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                        {blog.description.replace(/<[^>]*>/g, "")}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center font-semibold text-emerald-700">
                          {blog.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {blog.author}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>

          {!loading && filteredBlogs.length === 0 && (
            <p className="text-center text-gray-500 mt-12">
              No articles match your search.
            </p>
          )}
        </section>

        <Footer />
      </div>
    </div>
  );
}
