import { Button } from "@/app/components/ui/button";
import {
  Search,
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  Star,
  Calendar,
  Mail,
  Trophy,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const words = useMemo(
    () => [
      "Perfect Talent",
      "Best Developer",
      "Top Designers",
      "Expert Manager",
    ],
    [],
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, words]);

  // Entrance animations only (no infinite floating)
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".hero-title",
        { y: 60, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.4",
      )
      .from(
        ".hero-subtitle",
        { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .from(
        ".hero-stats",
        { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
        "-=0.4",
      )
      .from(
        ".hero-buttons",
        { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3",
      )
      .from(
        ".hero-image",
        { scale: 0.8, opacity: 0, duration: 1.2, ease: "power3.out" },
        "-=0.8",
      )
      .from(
        ".hero-card",
        {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.6",
      );
  }, []);

  return (
    <>
      <HeroSlider />
      <section
        ref={heroRef}
        className="relative bg-white pt-24 pb-16 px-12 min-h-[90vh] flex items-center"
      >
        {/* BACKGROUND CONTENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="bg-blob absolute top-[10%] left-[10%] w-[30vw] h-[25vh] bg-gradient-to-br from-emerald-400/30 to-teal-400/20 rounded-full blur-3xl" />
          <div className="bg-blob absolute bottom-[10%] right-[10%] w-[25vw] h-[20vh] bg-gradient-to-tl from-teal-400/25 to-emerald-300/20 rounded-full blur-3xl" />
          <div className="bg-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[15vh] bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-2xl" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>

        {/* Uniform Padding Wrapper */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
              {/* LEFT COLUMN */}
              <div className="max-w-2xl space-y-6 md:space-y-8 relative z-10">
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-8">
                  Find the <br />
                  <span className="relative inline-block min-w-[280px] md:min-w-[350px] lg:min-w-[420px]">
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {typedText}
                    </span>
                  </span>
                  <br /> for your team
                </h1>

                <motion.p className="hero-subtitle text-base sm:text-md lg:text-lg text-gray-600 leading-relaxed">
                  Connect with top professionals and build your dream team
                  faster than ever.
                </motion.p>

                {/* STATS */}
                <div className="flex flex-wrap gap-6">
                  <div className="hero-stats flex items-center gap-2">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">98%</p>
                      <p className="text-xs text-gray-600">Success Rate</p>
                    </div>
                  </div>

                  <div className="hero-stats flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">24h</p>
                      <p className="text-xs text-gray-600">Avg. Hire Time</p>
                    </div>
                  </div>

                  <div className="hero-stats flex items-center gap-2">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">10K+</p>
                      <p className="text-xs text-gray-600">Active Talents</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="hero-buttons flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    onClick={() => {
                      window.location.href = "/employers";
                    }}
                    size="sm"
                    className="px-4 md:px-6 py-4 md:py-5 text-base md:text-md font-semibold 
             bg-linear-to-r from-emerald-600 to-teal-600 text-white 
             rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="relative flex justify-center lg:justify-end z-10 mt-10 lg:mt-0">
                <div className="relative w-full max-w-[400px] mx-auto">
                  <div className="relative w-full h-[450px] group">
                    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 bg-gradient-to-br from-gray-50 to-gray-100">
                      <motion.img
                        src="/a1-selector-next/candidate1.png"
                        alt="Professional"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* STAT CARD */}
                    <div className="absolute top-[8%] left-[-12%] bg-white/95 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-white/50 min-w-[150px] hero-card hidden sm:block">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900">
                            50K+
                          </div>
                          <div className="text-xs text-gray-600">
                            Successful Hires
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Trophy */}
                    <div className="absolute top-[12%] right-[-8%] w-16 h-16 bg-yellow-400 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white hero-card hidden sm:flex">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>

                    {/* Interview Card */}
                    <div className="absolute top-[40%] right-[-15%] bg-white/95 backdrop-blur-xl py-4 px-5 rounded-2xl shadow-2xl border hero-card hidden sm:block">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            Interview Scheduled
                          </div>
                          <div className="text-xs text-gray-600">
                            Senior Developer
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Briefcase */}
                    <div className="absolute bottom-[20%] left-[-18%] bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border min-w-[150px] hero-card hidden sm:block">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center">
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            New Application
                          </div>
                          <div className="text-xs text-gray-600">
                            React Developer
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reviews */}
                    <div className="absolute bottom-[12%] right-[-10%] bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border hero-card hidden sm:block">
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <span className="text-md font-bold text-gray-900">
                          4.9
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Perfect Match Rate
                      </div>
                    </div>

                    {/* Notification */}
                    <div className="absolute bottom-[-5%] left-[10%] bg-white/95 backdrop-blur-xl p-4 rounded-xl shadow-2xl border flex items-center gap-3 hero-card hidden sm:flex">
                      <div className="relative w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-md font-semibold text-gray-900">
                          New Messages
                        </div>
                        <div className="text-xs text-gray-600">
                          From HR Teams
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
