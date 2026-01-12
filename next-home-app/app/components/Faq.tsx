"use client";

import { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Clock,
  Award,
  DollarSign,
  Briefcase,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  icon: React.ElementType;
  color: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does the recruitment process take?",
      answer:
        "Our average time to hire is 18 days, but this can vary depending on the role complexity and your specific requirements.",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in technology, finance, healthcare, and consulting, with deep expertise in technical roles and executive positions.",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
    },
    {
      question: "Do you offer any guarantees?",
      answer:
        "Yes, we offer a 90-day replacement guarantee. If a placed candidate doesn't work out within 90 days, we'll find a replacement at no additional cost.",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing varies by service type and role level. Contact us for a customized quote based on your specific needs.",
      icon: DollarSign,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-amber-50/30 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/50 mb-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium text-gray-700">
              Got Questions?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-gray-600 text-sm mt-2">
            Everything you need to know about our recruitment services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`group relative bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gray-300 shadow-xl"
                    : "border-gray-100 hover:border-gray-200 shadow-lg"
                }`}
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${faq.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-start gap-3 relative z-10"
                >
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${faq.color} flex items-center justify-center shadow ${
                      isOpen ? "scale-110" : "group-hover:scale-105"
                    } transition-transform`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-180 bg-gray-200" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-4 sm:px-5 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed pl-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:scale-105 transition-all shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
