import React, { useState, useEffect } from "react";
import { BarChart3, Zap, Clock } from "lucide-react";

const XBeesHireWorkflowShort = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { icon: Clock, value: "67%", label: "Time Saved", color: "text-cyan-400" },
    {
      icon: BarChart3,
      value: "3.2x",
      label: "ROI Increase",
      color: "text-emerald-400",
    },
    {
      icon: Zap,
      value: "94%",
      label: "Automation Rate",
      color: "text-blue-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <div className="min-h-[1000px] bg-slate-50 flex items-center justify-center py-20 px-16">
      <style>{`
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }
        .gradient-text {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Uniform Padding Wrapper */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Centered Main Heading */}
          <div className="text-center mb-12 animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-1">
              Our <span className="gradient-text">Streamlined</span> Workflow
            </h1>
            <p className="text-md text-slate-500">
              Automate every step from job post to hire.
            </p>
          </div>

          {/* First Section: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Efficient <span className="gradient-text">Recruitment</span>{" "}
                Process
              </h2>
              <p className="text-md text-slate-600 leading-relaxed">
                Our streamlined workflow automates candidate sourcing,
                screening, and matching. We leverage advanced technology to
                identify the perfect candidates for your organization, reducing
                time-to-hire and improving quality of hire.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Automated candidate sourcing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-700">
                    AI-powered skill matching
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Streamlined interview process
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="/a1-selector-next/recruitmentJourney.jpg"
                alt="Recruitment Journey Process"
                className="w-full h-[300px] lg:h-[350px] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Second Section: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-8 order-2 lg:order-1">
              <img
                src="/a1-selector-next/image3.png"
                alt="Contract Hiring Professional"
                className="w-full h-[300px] lg:h-[350px] object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Professional <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-md text-slate-600 leading-relaxed">
                Automate essential tasks to attract top talent with increased
                recruiter productivity
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Set up automated actions with pre-built templates to speed
                    up hiring velocity
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Bring agility and focus with dedicated interfaces for
                    recruiters, candidates, vendors, and employees
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Simplify the hiring processes streamlined with approvals,
                    auto alerts, and reminders for all stakeholders
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center mt-16">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Strategic <span className="gradient-text">Talent</span>{" "}
                Assessment
              </h2>
              <p className="text-md text-slate-600 leading-relaxed">
                Our comprehensive talent assessment process ensures we match the
                right skills with the right opportunities. Through rigorous
                evaluation and strategic planning, we deliver candidates who
                exceed expectations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Comprehensive skill evaluation and technical assessments
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Cultural fit analysis to ensure long-term success
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Strategic workforce planning and talent pipeline development
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="/a1-selector-next/image2.png"
                alt="Strategic Talent Assessment Process"
                className="w-full h-[300px] lg:h-[350px] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Fourth Section: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-8 order-2 lg:order-1">
              <img
                src="/a1-selector-next/image4.jpg"
                alt="End-to-End Recruitment Solutions"
                className="w-full h-[300px] lg:h-[350px] object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Complete <span className="gradient-text">Solutions</span>{" "}
                Delivery
              </h2>
              <p className="text-md text-slate-600 leading-relaxed">
                From initial consultation to successful placement, we provide
                end-to-end recruitment solutions that transform your hiring
                process and drive organizational growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Full-cycle recruitment from job analysis to onboarding
                    support
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Post-placement follow-up and relationship management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-700">
                    Continuous improvement through data-driven insights and
                    feedback
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XBeesHireWorkflowShort;
