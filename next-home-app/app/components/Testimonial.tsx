import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialType {
  id: number;
  message: string;
  author_name: string;
  author_designation: string;
  company?: string;
  avatar?: string;
}

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("http://72.61.229.100:3001/testimonials")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (!userPaused) {
              setIsAutoPlaying(true);
            }
          } else {
            setIsVisible(false);
            setIsAutoPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [userPaused]);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setUserPaused(true);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    const newState = !isAutoPlaying;
    setIsAutoPlaying(newState);
    setUserPaused(!newState);
  };

  if (testimonials.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-100 border-t-transparent"></div>
          <p className="mt-4 text-lg text-gray-600">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 overflow-hidden py-12 px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header with Animation */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3 px-5 py-1.5 bg-teal-100 rounded-full">
            <span className="text-sm font-semibold text-teal-700 tracking-wide uppercase">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by companies and professionals worldwide
          </p>
        </div>

        {/* Main Testimonial Card with Advanced Animation */}
        <div className="relative max-w-4xl mx-auto mb-8">
          {/* Navigation Buttons */}
          <button
            onClick={() => { handlePrev(); setUserPaused(true); setIsAutoPlaying(false); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white hover:bg-teal-600 text-gray-800 hover:text-white rounded-full p-2.5 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => { handleNext(); setUserPaused(true); setIsAutoPlaying(false); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white hover:bg-teal-600 text-gray-800 hover:text-white rounded-full p-2.5 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Cards Stack Effect */}
          <div className="relative">
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  style={{
                    transform: `translateX(${offset * (direction > 0 ? 100 : -100)}px) scale(${isActive ? 1 : 0.9})`,
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-lg bg-opacity-95 border border-gray-100 hover:shadow-teal-200 transition-shadow duration-300">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full p-3 shadow-lg">
                        <Quote className="w-6 h-6 text-white" fill="white" />
                      </div>
                    </div>

                    {/* Stars with Animation */}
                    <div className="flex justify-center mb-4 gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-125"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-lg md:text-xl text-gray-700 mb-6 text-center leading-relaxed font-light italic">
                      "{testimonial.message}"
                    </blockquote>

                    {/* Author Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-gray-200">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <img
                          src={testimonial.avatar || "/a1-selector-next/placeholder.svg?height=64&width=64"}
                          alt={testimonial.author_name}
                          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <p className="text-lg font-bold text-gray-900 mb-0.5">
                          {testimonial.author_name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.author_designation}
                          {testimonial.company && (
                            <span className="text-teal-600 font-semibold">
                              {" "}at {testimonial.company}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Spacer to maintain height */}
            <div className="opacity-0 pointer-events-none">
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <div className="h-72"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Dots Navigation */}
        <div className="flex justify-center items-center gap-2.5 flex-wrap mb-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`group relative transition-all duration-300 ${
                activeIndex === index ? "w-10" : "w-2.5"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center">
          <button
            onClick={toggleAutoPlay}
            className="px-5 py-1.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm font-medium text-gray-700 hover:text-teal-600"
          >
            {isAutoPlaying ? "⏸ Pause" : "▶ Play"} Auto-scroll
          </button>
        </div>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="mt-4 max-w-md mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full animate-progress"
                style={{
                  animation: 'progress 5s linear infinite'
                }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-progress {
          animation: progress 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;