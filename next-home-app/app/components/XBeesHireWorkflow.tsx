import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Calendar, FileCheck, Network, Target, CheckCircle2, Zap, BarChart3, Clock, ArrowRight } from 'lucide-react';

const XBeesHireWorkflow = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [flowNodes, setFlowNodes] = useState([
    { x: 20, y: 50, active: true, label: 'Start' },
    { x: 40, y: 30, active: false, label: 'Screen' },
    { x: 60, y: 70, active: false, label: 'Review' },
    { x: 80, y: 50, active: false, label: 'Hire' }
  ]);
  const [chartData, setChartData] = useState([45, 70, 55, 85, 65, 90, 75]);
  const [activeMetric, setActiveMetric] = useState(0);
  const containerRef = useRef(null);

  const workflowSteps = [
    {
      title: "Job Creation & Promotion",
      description: "AI-powered descriptions, one-click multi-platform posting",
      icon: TrendingUp,
      color: "from-emerald-500 via-emerald-600 to-teal-600",
      iconBg: "bg-emerald-600",
    },
    {
      title: "Sourcing & Screening",
      description: "Smart resume parsing, status tracking, pipeline visualization",
      icon: Users,
      color: "from-cyan-500 via-cyan-600 to-blue-500",
      iconBg: "bg-cyan-600",
    },
    {
      title: "Collaborative Interviews",
      description: "Automated scheduling, structured feedback, team collaboration",
      icon: Calendar,
      color: "from-blue-500 via-blue-600 to-indigo-600",
      iconBg: "bg-blue-600",
    },
    {
      title: "Offer & Onboarding",
      description: "Digital offer letters, onboarding checklists, document management",
      icon: FileCheck,
      color: "from-teal-500 via-teal-600 to-cyan-600",
      iconBg: "bg-teal-600",
    }
  ];

  const metrics = [
    { icon: Clock, value: "67%", label: "Time Saved", color: "cyan" },
    { icon: BarChart3, value: "3.2x", label: "ROI Increase", color: "emerald" },
    { icon: Zap, value: "94%", label: "Automation", color: "blue" }
  ];

  // Animate flow nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowNodes(prev => {
        const activeIndex = prev.findIndex(node => node.active);
        const nextIndex = (activeIndex + 1) % prev.length;
        return prev.map((node, idx) => ({
          ...node,
          active: idx === nextIndex
        }));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animate chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => prev.map(() => Math.random() * 70 + 30));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-0 flex items-center">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes pulse-ring { 0% { transform: scale(0.95); } 50% { transform: scale(1.05); } 100% { transform: scale(0.95); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes slide-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { 0%, 100% { filter: drop-shadow(0 0 6px rgba(6, 182, 212, 0.4)); } 50% { filter: drop-shadow(0 0 12px rgba(6, 182, 212, 0.6)); } }
        .floating-dot { animation: float 6s ease-in-out infinite; }
        .workflow-card { animation: slide-in 0.6s ease-out forwards; animation-delay: calc(var(--index) * 0.15s); opacity: 0; }
        .gradient-text { background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #14b8a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .node-pulse { animation: pulse-ring 2s ease-in-out infinite; }
        .shimmer-effect { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); background-size: 1000px 100%; animation: shimmer 3s infinite; }
        .metric-card { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .metric-card:hover { transform: translateY(-8px) scale(1.02); }
        .glow-effect { animation: glow 3s ease-in-out infinite; }
      `}</style>

      {/* Main Container with reduced vertical padding */}
      <div className="max-w-7xl w-full mx-auto px-4 py-8" ref={containerRef}>
        
       

        {/* Automation & Insights Section with reduced padding and margins */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-10 left-20 w-3 h-3 bg-purple-400 rounded-full floating-dot opacity-60"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800">
            Intelligent <span className="gradient-text">Automation</span> & Insights
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Smart Workflow Engine with reduced size */}
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-6 relative overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl group">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-400 rounded-xl p-3 mr-4"><Network className="w-8 h-8 text-white" strokeWidth={2} /></div>
                  <div><h3 className="text-xl font-bold text-white">Smart Workflow Engine</h3><p className="text-indigo-200 text-sm">Automate tasks and customize pipelines</p></div>
                </div>
                <div className="bg-indigo-900 bg-opacity-40 rounded-xl p-4 mb-4 backdrop-blur-sm">
                  {/* Reduced height SVG */}
                  <svg className="w-full h-24" viewBox="0 0 400 100">
                    <defs><linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#059669" /></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
                    {flowNodes.map((node, idx) => (idx < flowNodes.length - 1) && <line key={`line-${idx}`} x1={node.x * 3.5 + 50} y1={50} x2={flowNodes[idx + 1].x * 3.5 + 50} y2={50} stroke="#34d399" strokeWidth="2" opacity="0.6" strokeDasharray="4,4"><animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" /></line>)}
                    {flowNodes.map((node, idx) => (<g key={`node-${idx}`}><circle cx={node.x * 3.5 + 50} cy={50} r="10" fill="url(#nodeGradient)" filter={node.active ? "url(#glow)" : "none"} className={node.active ? 'node-pulse' : ''} />{node.active && <circle cx={node.x * 3.5 + 50} cy={50} r="15" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.5"><animate attributeName="r" from="10" to="20" dur="2s" repeatCount="indefinite" /><animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" /></circle>}<text x={node.x * 3.5 + 50} y={80} textAnchor="middle" fill="#e0e7ff" fontSize="11" fontWeight="600">{node.label}</text></g>))}
                    <ArrowRight x="360" y="43" className="text-emerald-400" strokeWidth={2} width={14} height={14} />
                  </svg>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-indigo-100 bg-indigo-800 bg-opacity-40 text-sm rounded-lg p-2.5 backdrop-blur-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />Configurable Stages</div>
                  <div className="flex items-center text-indigo-100 bg-indigo-800 bg-opacity-40 text-sm rounded-lg p-2.5 backdrop-blur-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />Automated Task Management</div>
               
                  <div className="flex items-center text-indigo-100 bg-indigo-800 bg-opacity-40 text-sm rounded-lg p-2.5 backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                    <span>Custom Triggers & Actions</span>
                  </div>
                   </div>
              </div>
            </div>

            {/* Data-Driven Analytics with reduced size */}
            <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl p-6 relative overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl group">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-400 rounded-xl p-3 mr-4"><Target className="w-8 h-8 text-white" strokeWidth={2} /></div>
                  <div><h3 className="text-xl font-bold text-white">Data-Driven Analytics</h3><p className="text-slate-300 text-sm">Real-time insights and intelligence</p></div>
                </div>
                <div className="bg-slate-800 bg-opacity-60 rounded-xl p-4 mb-4 backdrop-blur-sm">
                  {/* Reduced height chart */}
                  <div className="relative h-36">
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3].map((i) => <div key={i} className="border-b border-slate-700 border-opacity-30"></div>)}
                    </div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 140" preserveAspectRatio="none">
                      <defs><linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5"/><stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05"/></linearGradient><filter id="chartGlow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
                      <path d={`M 0 ${140 - chartData[0] * 1.4} ${chartData.map((val, idx) => `L ${(idx * 40) + 20} ${140 - val * 1.4}`).join(' ')} L 260 140 L 0 140 Z`} fill="url(#chartGradient)" />
                      <path d={`M 0 ${140 - chartData[0] * 1.4} ${chartData.map((val, idx) => `L ${(idx * 40) + 20} ${140 - val * 1.4}`).join(' ')}`} fill="none" stroke="#22d3ee" strokeWidth="2.5" filter="url(#chartGlow)" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 font-medium px-2 mt-1">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-100 bg-slate-800 bg-opacity-60 text-sm rounded-lg p-2.5 backdrop-blur-sm"><CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />Real-time Reports & Dashboards</div>
                  <div className="flex items-center text-slate-100 bg-slate-800 bg-opacity-60 text-sm rounded-lg p-2.5 backdrop-blur-sm"><CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />Performance Metrics & KPIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XBeesHireWorkflow;