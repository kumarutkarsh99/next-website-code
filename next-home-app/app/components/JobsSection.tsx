"use client";

import React, { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, Users, Calendar, FileCheck, Briefcase, Target, Award, CheckCircle2 
} from 'lucide-react';

interface FlowNode {
  x: number;
  y: number;
  active: boolean;
}

const JobsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [chartData, setChartData] = useState<number[]>([20, 35, 25, 45, 30, 50, 40]);
  const [flowNodes, setFlowNodes] = useState<FlowNode[]>([
    { x: 20, y: 30, active: false },
    { x: 40, y: 50, active: false },
    { x: 60, y: 20, active: false },
    { x: 35, y: 70, active: false },
    { x: 75, y: 60, active: false }
  ]);

  const floatingDotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Update chart data every 3s
    const chartInterval = setInterval(() => {
      setChartData(prev => prev.map(() => Math.random() * 50 + 10));
    }, 3000);

    // Update flow nodes every 2s
    const flowInterval = setInterval(() => {
      setFlowNodes(prev => prev.map(node => ({
        ...node,
        active: Math.random() > 0.5
      })));
    }, 2000);

    // Animate floating dots
    floatingDotsRef.current.forEach((dot, idx) => {
      const duration = 3 + Math.random() * 2;
      const delay = idx * 0.3;
      dot.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });

    return () => {
      clearInterval(chartInterval);
      clearInterval(flowInterval);
    };
  }, []);

  const workflowSteps = [
    { title: 'Job Creation & Promotion', icon: TrendingUp, color: 'from-emerald-400 to-emerald-600', bgColor: 'bg-emerald-500', description: 'AI-powered descriptions, one-click multi-platform posting', iconBg: 'bg-emerald-100' },
    { title: 'Candidate Sourcing & Screening', icon: Users, color: 'from-cyan-400 to-cyan-600', bgColor: 'bg-cyan-500', description: 'Smart resume parsing, dual-status tracking, pipeline visualization', iconBg: 'bg-cyan-100' },
    { title: 'Collaborative Interviews', icon: Calendar, color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-500', description: 'Automated scheduling, structured feedback, team collaboration', iconBg: 'bg-blue-100' },
    { title: 'Offer & Onboarding', icon: FileCheck, color: 'from-teal-400 to-teal-600', bgColor: 'bg-teal-500', description: 'Digital offer letters, onboarding checklists', iconBg: 'bg-teal-100' }
  ];

  const features = [
    { icon: Briefcase, title: 'End-to-End Job Management', color: 'bg-blue-500' },
    { icon: Target, title: 'Intelligent Candidate Tracking', color: 'bg-purple-500' },
    { icon: Users, title: 'Integrated Client & Prospect CRM', color: 'bg-pink-500' },
    { icon: Calendar, title: 'Collaborative Interview Scheduling', color: 'bg-indigo-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-10px) translateX(-10px); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .workflow-card {
          animation: slide-in 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.15s);
          opacity: 0;
        }
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {[0, 1, 2].map((_, idx) => (
          <div
            key={idx}
            ref={el => { if (el) floatingDotsRef.current[idx] = el; }}
            className={`absolute w-${[4, 3, 5][idx]} h-${[4, 3, 5][idx]} rounded-full floating-dot opacity-${[60,50,40][idx]}`}
            style={{
              top: idx === 0 ? '2.5rem' : idx === 1 ? '8rem' : undefined,
              right: idx === 0 ? '5rem' : idx === 1 ? '10rem' : undefined,
              bottom: idx === 2 ? '5rem' : undefined,
              left: idx === 2 ? '8rem' : undefined,
              backgroundColor: idx === 2 ? '#06b6d4' : undefined
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Find the <span className="gradient-text">Top Designers</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              for your team
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Connect with top professionals and build your dream team faster than ever before. Join thousands of successful companies.
            </p>
          </div>

          {/* Right Content - Mock Interface */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                {/* Top Card */}
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-teal-500" />
                      </div>
                      <div>
                        <div className="font-bold">50K+</div>
                        <div className="text-teal-100 text-sm">Successful Hires</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="gradient-text">Features</span> at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600">Everything you need to streamline your hiring process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 transform transition-transform ${activeFeature === index ? 'rotate-12 scale-110' : ''}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">Streamline your workflow with intelligent automation and insights</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
