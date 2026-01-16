"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Clock,
  Globe,
  Users,
  Sparkles,
  ArrowRight,
  Target,
  Award,
} from "lucide-react";

const WhyChooseTalentBridge = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Shield,
      title: "Verified Talent",
      description:
        "Every candidate is thoroughly vetted through our rigorous screening process",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Clock,
      title: "Fast Placement",
      description:
        "Average placement time of 10 days compared to industry standard of 45 days",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Access to talent pool across 50+ countries and multiple time zones",
      color: "from-emerald-600 to-green-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Dedicated recruitment specialists for personalized hiring solutions",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
  ];

  const stats = [
    { number: "98%", label: "Success Rate", icon: Target },
    { number: "10k+", label: "Placements", icon: Award },
    { number: "500+", label: "Companies", icon: Users },
    { number: "50+", label: "Countries", icon: Globe },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-linear-to-br from-white to-emerald-50 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900">
            The <span className="text-emerald-600">TalentBridge</span> Advantage
          </h2>

          <p className="text-md text-gray-600 mt-4 max-w-3xl mx-auto">
            Experience recruitment excellence with our proven track record and
            innovative approach
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-4 text-center shadow border"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl text-black font-bold">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${feature.bgColor} rounded-2xl p-6 shadow-sm`}
              >
                <div
                  className={`w-8 h-8 mb-4 flex items-center justify-center rounded-xl bg-linear-to-r ${feature.color}`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-semibold
              bg-gradient-to-r from-emerald-600 to-teal-600
              hover:from-emerald-700 hover:to-teal-700
              text-white rounded-xl shadow-lg transition-all"
            >
              <span className="mr-2">Start Your Success Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseTalentBridge;
