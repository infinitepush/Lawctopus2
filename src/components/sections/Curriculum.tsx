"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ChevronDown, BookOpen, Video, FileText, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const months = [
  {
    month: "Month 1",
    title: "Essential Clauses & Contract Foundations",
    tag: "Core Fundamentals",
    color: "bg-blue-500",
    live: 4,
    recorded: 25,
    pages: 120,
    topics: [
      "What is a contract vs. agreement",
      "Pre-contractual instruments",
      "Definition & Identification clauses",
      "Recitals, Territory, Representations",
      "Indemnity, Confidentiality, Termination",
      "Force Majeure, IP, Dispute Resolution",
    ],
  },
  {
    month: "Month 2",
    title: "Execution Formalities & Basic Negotiation",
    tag: "Negotiation Skills",
    color: "bg-green-500",
    live: 4,
    recorded: 18,
    pages: 95,
    topics: [
      "Stamp Duty & Registration",
      "Employment Agreements",
      "Software Licensing & NDAs",
      "Core Negotiation Concepts",
      "Negotiation Techniques & Mindset",
      "Pre & Post-Negotiation Steps",
    ],
  },
  {
    month: "Month 3",
    title: "International Agreements & Advanced Negotiation",
    tag: "Global Reach",
    color: "bg-purple-500",
    live: 8,
    recorded: 15,
    pages: 110,
    topics: [
      "International commercial contracts",
      "Governing Law & Jurisdiction",
      "Arbitration clauses",
      "Loan Agreements",
      "Advanced Negotiation Mock Sessions",
      "Freelancing Session 1",
    ],
  },
  {
    month: "Month 4",
    title: "IP, Technology & Website Agreements",
    tag: "Digital Law",
    color: "bg-pink-500",
    live: 8,
    recorded: 13,
    pages: 140,
    topics: [
      "Trademark Licensing & Assignment",
      "Patent & Copyright Licensing",
      "SAAS Agreements",
      "Terms & Conditions for E-commerce",
      "Privacy Policy & Return Policies",
      "Freelancing Session 2",
    ],
  },
  {
    month: "Month 5",
    title: "Real Estate Agreements",
    tag: "Property Law",
    color: "bg-orange-500",
    live: 6,
    recorded: 4,
    pages: 85,
    topics: [
      "Sale Deed Drafting",
      "Power of Attorney",
      "Leave & License Agreements",
      "Franchisee Agreements",
      "Networking Session 4",
      "Freelancing Session 3",
    ],
  },
  {
    month: "Month 6",
    title: "Business & Commercial Agreements",
    tag: "Corporate Law",
    color: "bg-red-500",
    live: 6,
    recorded: 8,
    pages: 130,
    topics: [
      "Shareholders Agreement",
      "Share Purchase & Subscription",
      "Partnership Agreements",
      "Joint Venture Agreements",
      "Sports Sponsorship Agreements",
      "Business Transfer Agreements",
    ],
  },
];

export function Curriculum() {
  const [expandedMonth, setExpandedMonth] = useState<string | null>("Month 1");

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
            Curriculum
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            6 Months. 54 Live Sessions. 83+ Recorded Lectures. 800+ Pages.
          </h2>
          <p className="text-lg text-slate-600">
            A structured, month-by-month journey from contract fundamentals to expert-level business agreements.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-4">
          {months.map((item) => (
            <AnimatedSection key={item.month}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() =>
                    setExpandedMonth(expandedMonth === item.month ? null : item.month)
                  }
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className={`${item.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {item.month}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5" /> {item.live} Live</span>
                        <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {item.recorded} Recorded</span>
                        <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> {item.pages} Pages</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      expandedMonth === item.month ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedMonth === item.month && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100">
                        <div className="grid md:grid-cols-2 gap-3">
                          {item.topics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              <span className="text-slate-700 text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}