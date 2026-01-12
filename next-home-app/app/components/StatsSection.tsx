import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { Users, Trophy, Building2, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = useMemo(() => [
    {
      finalNumber: 10000,
      label: "Active Candidates",
      description: "Skilled professionals ready for opportunities",
      icon: Users,
      color: "from-emerald-500 to-teal-500"
    },
    {
      finalNumber: 2500,
      label: "Jobs Placed",
      description: "Successful placements across industries",
      icon: Trophy,
      color: "from-emerald-500 to-green-500"
    },
    {
      finalNumber: 500,
      label: "Partner Companies",
      description: "Trusted employers across worldwide",
      icon: Building2,
      color: "from-teal-500 to-cyan-500"
    },
    {
      finalNumber: 98,
      label: "Success Rate",
      description: "Client satisfaction and retention",
      icon: TrendingUp,
      color: "from-emerald-600 to-teal-600"
    }
  ], []);

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.finalNumber / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.finalNumber) {
            current = stat.finalNumber;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [isInView, stats]);

  return (
    <section ref={sectionRef} className="py-12 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200/30 rounded-full blur-xl"></div>
      </div>

      {/* Uniform Padding Wrapper */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by thousands of professionals and companies worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                      {index === 3 ? `${counts[index]}%` : `${counts[index].toLocaleString()}+`}
                    </div>

                    <div className="text-xl font-semibold text-gray-800 mb-3">
                      {stat.label}
                    </div>

                    <div className="text-gray-600 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;