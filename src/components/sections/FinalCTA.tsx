"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Calendar, Clock, Shield } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="enroll" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider mb-6">
            Limited Time Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Start Your Expert Journey Today
          </h2>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
            Join 20,000+ legal professionals who have transformed their careers with Lawctopus Law School.
          </p>
          <p className="text-amber-500 font-semibold text-lg mb-8">
            Enroll now at ₹24,999 (Original: ₹60,000) — Save 58%
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-amber-500 text-white font-semibold text-lg shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Enroll Now — Save 58%
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2 border-slate-600 text-white font-semibold text-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-200"
            >
              View Full Curriculum
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-green-400" />
              100% Money-Back Guarantee
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-amber-400" />
              Next Batch: July 1
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-400" />
              6 Months Duration
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
