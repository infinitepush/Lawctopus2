"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { CheckCircle2, FileText, Users, Globe, Shield, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: FileText,
    title: "24+ Complex Contracts",
    description:
      "Draft NDAs, Shareholders Agreements, Joint Ventures, IP Licensing, Real Estate deeds, and International contracts with hands-on guidance.",
  },
  {
    icon: Globe,
    title: "International Contracts",
    description:
      "Learn governing law, jurisdiction, arbitration clauses, and cross-border agreements to serve global clients.",
  },
  {
    icon: TrendingUp,
    title: "Freelancing Mastery",
    description:
      "Build your Upwork, Fiverr & LinkedIn profiles. Write winning proposals. Get direct opportunities and handle clients confidently.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Learn from lawyers who've worked at Trilegal, Khaitan & Co, Shardul Amarchand, and Cambridge-educated corporate specialists.",
  },
  {
    icon: Shield,
    title: "100% Money-Back Guarantee",
    description:
      "Complete the course sincerely. If you don't see career value, get a full refund — no questions asked.",
  },
  {
    icon: CheckCircle2,
    title: "Save 4 Years of Career",
    description:
      "What a lawyer learns in 4-5 years of practice, you'll master in 6 months with structured live training.",
  },
];

export function WhyCourse() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
            Why This Course
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Become an Expert Contract Drafter & Freelancer
          </h2>
          <p className="text-lg text-slate-600">
            This isn't just another certificate course. It's a complete career transformation program designed by industry experts.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="group bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
