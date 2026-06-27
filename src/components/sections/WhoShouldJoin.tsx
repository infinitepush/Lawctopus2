"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GraduationCap, Briefcase, User, Rocket } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Law Students",
    description: "Gain practical skills that textbooks don't teach. Ace internships and stand out in campus placements.",
  },
  {
    icon: Briefcase,
    title: "Young Lawyers (0-4 Years)",
    description: "Start earning additional income through contract drafting freelancing while building your practice.",
  },
  {
    icon: User,
    title: "Academicians & Professionals",
    description: "Add contract drafting to your skill set and explore consulting opportunities.",
  },
  {
    icon: Rocket,
    title: "Freelancing Enthusiasts",
    description: "Launch a legal freelancing career with structured training and direct client opportunities.",
  },
];

export function WhoShouldJoin() {
  return (
    <section id="who" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Who Should Join
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Built for Aspiring Legal Professionals
          </h2>
          <p className="text-lg text-slate-300">
            Whether you're a student, a young lawyer, or a professional looking to pivot — this course is designed for you.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <StaggerItem key={audience.title}>
              <div className="bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700 hover:border-amber-500/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                  <audience.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {audience.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}