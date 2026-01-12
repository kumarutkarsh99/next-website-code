"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/footer";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Eye, 
  MessageCircle, 
  ChevronRight, 
  Bookmark, 
  Download 
} from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);

  const categories = ["All", "Career Tips", "HR Insights", "Industry News", "Tech Trends", "Leadership", "Remote Work"];

  const articles = [
    {
      id: 1,
      title: "Mastering Remote Work",
      description: "Strategies for thriving in remote work environments...",
      image: "/a1-selector-next/blog1.png",
      badge: "Remote Work",
      date: "Dec 12, 2023",
      author: "Michael Chen",
      readTime: "8 min read",
      views: "1.8K",
      comments: 32,
    },
    {
      id: 2,
      title: "Building Inclusive Teams",
      description: "How diverse hiring drives innovation...",
      image: "/a1-selector-next/blog2.png",
      badge: "HR Insights",
      date: "Dec 10, 2023",
      author: "Emily Rodriguez",
      readTime: "7 min read",
      views: "2.1K",
      comments: 45,
    },
    // Add more articles here...
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.badge === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const loadMore = () => setVisiblePosts(prev => prev + 3);

  // Scroll reveal using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach(el => {
      el.classList.remove("visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredArticles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/30">
      <Navigation />

      {/* Categories Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 border border-gray-200 hover:border-emerald-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/95 border border-emerald-200 shadow-xl focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, visiblePosts).map(article => (
              <Card key={article.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white scroll-reveal">
                <div className="relative overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-2 py-1 text-xs">{article.badge}</Badge>
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-emerald-500 hover:text-white">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</div>
                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{article.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{article.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">{article.author}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1"><Eye className="w-3 h-3" />{article.views}</div>
                      <div className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{article.comments}</div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {filteredArticles.length > visiblePosts && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} size="lg" variant="outline" className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 px-8 py-4 transition-all duration-300 group">
                <Download className="mr-2 w-5 h-5" /> Load More <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .scroll-reveal { opacity: 0; transform: translateY(50px); transition: all 0.8s cubic-bezier(0.4,0,0.2,1); }
        .scroll-reveal.visible { opacity: 1; transform: translateY(0); }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default Blog;
