"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { FileText, Scale, Building, Globe, Laptop, Shield, Gavel, PenTool } from "lucide-react";

const skills = [
  { icon: FileText, label: "Contract Drafting Fundamentals" },
  { icon: Scale, label: "Negotiation Skills" },
  { icon: Building, label: "Real Estate Agreements" },
  { icon: Globe, label: "International Contracts" },
  { icon: Laptop, label: "Tech & IP Agreements" },
  { icon: Shield, label: "Privacy & Data Protection" },
  { icon: Gavel, label: "Dispute Resolution Clauses" },
  { icon: PenTool, label: "Website Terms & Policies" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
            Skills You'll Learn
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Master the Most In-Demand Legal Skills
          </h2>
          <p className="text-lg text-slate-600">
            From foundational drafting to advanced international agreements — every skill you need to thrive in today's legal market.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {skills.map((skill) => (
            <StaggerItem key={skill.label}>
              <div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:bg-amber-500 hover:border-amber-500 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-400 transition-colors">
                  <skill.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white transition-colors">
                  {skill.label}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
