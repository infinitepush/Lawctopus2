"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Check, X, ArrowRight, Shield } from "lucide-react";

const comparisonFeatures = [
  { feature: "Duration", basic: "2 Months", expert: "6 Months" },
  { feature: "Live Classes", basic: "8", expert: "54" },
  { feature: "Recorded Lectures", basic: "8.5 hrs", expert: "32+ hrs" },
  { feature: "Contracts Covered", basic: "Core contracts", expert: "24+ complex contracts" },
  { feature: "Freelancing Training", basic: false, expert: true },
  { feature: "Networking Sessions", basic: false, expert: true },
  { feature: "Career Coaching", basic: false, expert: true },
  { feature: "Assignments + Feedback", basic: "2", expert: "17" },
  { feature: "Reading Material", basic: "202 pages", expert: "800+ pages" },
  { feature: "AI Workshop + Tools", basic: false, expert: true },
  { feature: "Money-Back Guarantee", basic: true, expert: true },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
            Investment
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Path to Legal Excellence
          </h2>
          <p className="text-lg text-slate-600">
            Invest in skills that pay dividends throughout your career. Both courses come with our 100% money-back guarantee.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Course */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Contract Drafting Fundamentals
                </h3>
                <p className="text-slate-500 text-sm">2-Month Certificate Course</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">₹7,999</span>
                <span className="text-slate-500 ml-2">one-time</span>
              </div>
              <a
                href="#enroll"
                className="block w-full text-center px-6 py-3 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors mb-6"
              >
                Get Started
              </a>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> 8 live sessions
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> 8+ hours recorded
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> 2 assignments with feedback
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> 202 pages of reading material
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-green-500" /> Money-back guarantee
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <X className="w-4 h-4" /> No freelancing training
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <X className="w-4 h-4" /> No networking sessions
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Expert Course */}
          <AnimatedSection delay={0.2}>
            <div className="relative bg-slate-900 rounded-2xl p-8 border border-amber-500/30 shadow-xl shadow-amber-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-amber-500 text-white text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="mb-6 pt-2">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Mastering Contract Drafting & Freelancing
                </h3>
                <p className="text-slate-400 text-sm">6-Month Expert Course</p>
              </div>
              <div className="mb-2">
                <span className="text-slate-400 line-through text-lg">₹60,000</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-amber-500">₹24,999</span>
                <span className="text-slate-400 ml-2">one-time</span>
                <span className="ml-2 text-sm text-green-400 font-medium">Save 58%</span>
              </div>
              <a
                href="#enroll"
                className="block w-full text-center px-6 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 shadow-lg shadow-amber-500/25 transition-all duration-200 mb-6"
              >
                Enroll Now — Save 58%
                <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> 54 live sessions
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> 32+ hours recorded lectures
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> 17 assignments with personalized feedback
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> 800+ pages of reading material
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> Freelancing on Upwork, Fiverr, LinkedIn
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> 4 networking sessions + 2 negotiation sessions
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> AI workshop + 1-month Prism access
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> Bi-monthly 1-on-1 career coaching
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> Lifetime access to all materials
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-amber-500" /> 100% money-back guarantee
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Money-back guarantee */}
        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full border border-green-200">
            <Shield className="w-5 h-5" />
            <span className="font-medium">
              100% Money-Back Guarantee: Complete the course sincerely. If you don't see value, we refund every rupee.
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
