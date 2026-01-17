// src/components/TrustedCompanies.tsx
import React from "react";

const companies = [
  {
    name: "TechCorp",
    colors: "from-blue-500 to-cyan-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect
          x="4"
          y="4"
          width="14"
          height="14"
          rx="3"
          className="fill-blue-500"
        />
        <rect
          x="22"
          y="4"
          width="14"
          height="14"
          rx="3"
          className="fill-cyan-400"
        />
        <rect
          x="4"
          y="22"
          width="14"
          height="14"
          rx="3"
          className="fill-cyan-400"
        />
        <rect
          x="22"
          y="22"
          width="14"
          height="14"
          rx="3"
          className="fill-blue-500"
        />
      </svg>
    ),
  },
  {
    name: "StartupXYZ",
    colors: "from-purple-500 to-pink-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L30 15L20 26L10 15L20 4Z" className="fill-purple-500" />
        <path d="M20 14L30 25L20 36L10 25L20 14Z" className="fill-pink-400" />
      </svg>
    ),
  },
  {
    name: "Enterprise Inc",
    colors: "from-emerald-500 to-teal-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" className="fill-emerald-500" />
        <circle cx="20" cy="20" r="10" className="fill-teal-400" />
        <circle cx="20" cy="20" r="4" className="fill-emerald-600" />
      </svg>
    ),
  },
  {
    name: "Innovation Labs",
    colors: "from-orange-500 to-amber-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <path d="M20 6L28 14L20 22L12 14L20 6Z" className="fill-orange-500" />
        <path d="M6 20L14 28L22 20L14 12L6 20Z" className="fill-amber-400" />
        <path d="M18 18L26 26L34 18L26 10L18 18Z" className="fill-orange-400" />
      </svg>
    ),
  },
  {
    name: "Design Studio",
    colors: "from-rose-500 to-pink-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect
          x="8"
          y="8"
          width="24"
          height="24"
          rx="6"
          className="fill-rose-500"
        />
        <circle cx="20" cy="20" r="8" className="fill-white" />
        <circle cx="20" cy="20" r="4" className="fill-pink-400" />
      </svg>
    ),
  },
  {
    name: "Cloud Solutions",
    colors: "from-sky-500 to-blue-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="18" rx="12" ry="8" className="fill-sky-400" />
        <ellipse cx="14" cy="24" rx="8" ry="6" className="fill-blue-500" />
        <ellipse cx="26" cy="24" rx="8" ry="6" className="fill-sky-500" />
      </svg>
    ),
  },
  {
    name: "Data Systems",
    colors: "from-indigo-500 to-purple-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect
          x="6"
          y="6"
          width="8"
          height="28"
          rx="2"
          className="fill-indigo-500"
        />
        <rect
          x="16"
          y="12"
          width="8"
          height="22"
          rx="2"
          className="fill-purple-400"
        />
        <rect
          x="26"
          y="8"
          width="8"
          height="26"
          rx="2"
          className="fill-indigo-400"
        />
      </svg>
    ),
  },
  {
    name: "Growth Corp",
    colors: "from-green-500 to-emerald-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <path
          d="M8 28L16 20L24 24L32 12"
          stroke="currentColor"
          strokeWidth="3"
          className="text-green-500"
          fill="none"
        />
        <circle cx="32" cy="12" r="4" className="fill-emerald-500" />
        <path d="M32 8V12L28 12" className="fill-green-500" />
      </svg>
    ),
  },
  {
    name: "Future Tech",
    colors: "from-violet-500 to-fuchsia-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <path d="M20 8L26 14L20 20L14 14L20 8Z" className="fill-violet-500" />
        <path d="M8 20L14 26L20 20L14 14L8 20Z" className="fill-fuchsia-400" />
        <path d="M32 20L26 26L20 20L26 14L32 20Z" className="fill-violet-400" />
        <path
          d="M20 20L26 26L20 32L14 26L20 20Z"
          className="fill-fuchsia-500"
        />
      </svg>
    ),
  },
  {
    name: "Digital Works",
    colors: "from-cyan-500 to-blue-500",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect
          x="8"
          y="12"
          width="24"
          height="16"
          rx="2"
          className="fill-cyan-500"
        />
        <rect
          x="12"
          y="16"
          width="6"
          height="8"
          rx="1"
          className="fill-white"
        />
        <rect
          x="22"
          y="16"
          width="6"
          height="8"
          rx="1"
          className="fill-blue-400"
        />
      </svg>
    ),
  },
];

const TrustedCompanies: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      {/* Uniform Padding Wrapper */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Trusted by Leading Companies
            </h2>
          </div>

          {/* Scrolling Wrapper */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
              {/* Repeat the list twice for infinite scroll effect */}
              {[...companies, ...companies].map((company, idx) => (
                <div
                  key={idx}
                  className="shrink-0 mx-6 my-3 group cursor-pointer"
                >
                  <div
                    className={`
                    relative flex items-center gap-3 px-4 py-2 rounded-2xl
                    bg-white/80
                    border border-gray-200
                    shadow-sm hover:shadow-xl
                    transition-all duration-500 ease-out
                    hover:scale-110 hover:-translate-y-1
                    backdrop-blur-sm
                  `}
                  >
                    {/* Animated gradient background */}
                    <div
                      className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                      bg-gradient-to-br ${company.colors}
                      transition-opacity duration-500
                    `}
                    ></div>

                    {/* Icon with rotation animation */}
                    <div className="transform group-hover:rotate-12 transition-transform duration-500 relative z-10">
                      {company.icon}
                    </div>

                    {/* Company name */}
                    <span
                      className={`
                      text-sm font-bold bg-gradient-to-r ${company.colors} 
                      bg-clip-text text-transparent
                      group-hover:scale-105 transition-transform duration-300
                      whitespace-nowrap relative z-10
                    `}
                    >
                      {company.name}
                    </span>

                    {/* Shine effect */}
                    <div
                      className="
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30
                      bg-gradient-to-r from-transparent via-white to-transparent
                      transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%]
                      transition-transform duration-1000 pointer-events-none
                    "
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedCompanies;
