"use client";

import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import {
  Code,
  DollarSign,
  Users,
  ChevronDown,
  ArrowRight,
  Heart,
  Briefcase,
  Workflow,
  Handshake,
  CalendarDays,
  LayoutDashboard,
  Cog,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Specialization {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  count: string;
}

interface Solution {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const SolutionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const specializations: Specialization[] = [
    {
      icon: Code,
      title: "Tech Hiring",
      description: "Engineers & IT pros",
      count: "2.5K+",
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Financial experts",
      count: "1.8K+",
    },
    {
      icon: Users,
      title: "Non-Tech",
      description: "Marketing & Ops",
      count: "3.2K+",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical specialists",
      count: "1.2K+",
    },
  ];

  const solutions: Solution[] = [
    {
      icon: Briefcase,
      title: "End-to-End Job Management",
      description:
        "Automate the entire job lifecycle, from creation with AI-powered templates to multi-channel publishing. Track job status in real-time and manage approvals seamlessly.",
    },
    {
      icon: Workflow,
      title: "Intelligent Candidate Tracking",
      description:
        "Utilize our innovative dual-status system to track candidate progress from both recruiter and candidate perspectives. Visualize the entire pipeline with customizable stages.",
    },
    {
      icon: Handshake,
      title: "Integrated Client & Prospect CRM",
      description:
        "Manage your entire client pipeline from prospect to active partner. Centralize communication, track job requirements, and monitor performance analytics.",
    },
    {
      icon: CalendarDays,
      title: "Collaborative Interview Scheduling",
      description:
        "Simplify interview logistics with integrated scheduling tools. Collect structured feedback from interviewers and enable hiring managers to make collaborative, data-driven decisions.",
    },
    {
      icon: LayoutDashboard,
      title: "Data-Driven Recruitment Analytics",
      description:
        "Gain actionable insights with a comprehensive dashboard. Track key metrics like time-to-hire, cost-per-hire, and source effectiveness to optimize your recruitment strategy.",
    },
    {
      icon: Cog,
      title: "Customizable Workflow Automation",
      description:
        "Tailor the ATS to your unique process. Configure custom statuses, email templates, and automated workflows that intelligently route candidates and tasks, boosting efficiency.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 px-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-sm font-semibold tracking-wide uppercase text-teal-600">
                OUR EXPERTISE
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Driving Digital Excellence &<br />
              Specialized Recruitment
            </h2>

            <p className="text-gray-600 mb-10 text-md">
              Connecting top talent with innovative companies, powered by
              cutting-edge knowledge.
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {specializations.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <motion.div key={index} variants={cardVariants}>
                    <Card className="p-5 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-gray-900 mb-0.5">
                              {spec.title}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {spec.description}
                            </p>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-bold text-emerald-700 whitespace-nowrap px-2 py-1 rounded-lg bg-emerald-50">
                            {spec.count}
                          </span>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-emerald-600 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300"
                      >
                        View Roles
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-base">
              View All Industries
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right Side: Solutions Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 mt-2"
          >
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isOpen = openAccordion === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                >
                  <Card className="bg-gray-50/70 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden rounded-xl">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-5 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shadow-sm">
                          <IconComponent className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="text-md font-semibold text-gray-800">
                          {solution.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {solution.description}
                        </p>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-5"
            >
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
              >
                Schedule a Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
