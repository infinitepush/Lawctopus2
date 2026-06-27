"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Target, Briefcase, DollarSign, Network, Award, BookOpen } from "lucide-react";

const outcomes = [
  {
    icon: Target,
    title: "Ace Law Firm Internships",
    description: "Stand out with real contract drafting skills that law firms actually value.",
  },
  {
    icon: DollarSign,
    title: "Earn Through Freelancing",
    description: "Get clients on Upwork, Fiverr & LinkedIn. Build a sustainable side income.",
  },
  {
    icon: Briefcase,
    title: "Corporate-Ready Skills",
    description: "Draft M&A docs, NDAs, Service Agreements at the level of top-tier firms.",
  },
  {
    icon: Network,
    title: "Professional Network",
    description: "Join LLS alumni groups for exclusive internships, jobs, and referrals.",
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Receive a verified completion certificate from Lawctopus Law School.",
  },
  {
    icon: BookOpen,
    title: "Lifetime Access",
    description: "All recordings, resources, and templates — yours forever.",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
            What You'll Achieve
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Course Outcomes That Transform Your Career
          </h2>
          <p className="text-lg text-slate-600">
            By the end of 6 months, you'll have the skills, portfolio, and confidence to excel in contract drafting and legal freelancing.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <AnimatedSection key={outcome.title} delay={index * 0.1}>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <outcome.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {outcome.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
