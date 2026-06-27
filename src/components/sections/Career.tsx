"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Briefcase, MessageSquare, Users, Award } from "lucide-react";

const careerPoints = [
  {
    icon: Briefcase,
    title: "CV & LinkedIn Optimization",
    description: "Draft CVs that get noticed by legal recruiters. Build an excellent LinkedIn profile with live expert feedback.",
  },
  {
    icon: MessageSquare,
    title: "Cover Letter Mastery",
    description: "Learn to write winning cover letters that secure internships and jobs. Get personalized feedback on your drafts.",
  },
  {
    icon: Users,
    title: "Networking & Negotiation",
    description: "Master professional networking and negotiation skills for salary discussions, client deals, and career growth.",
  },
  {
    icon: Award,
    title: "Upwork & Fiverr Mastery",
    description: "Advanced tips for Upwork and Fiverr. Learn to write proposals that win projects and build a 5-star profile.",
  },
];

export function Career() {
  return (
    <section id="career" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Career & Freelancing
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Not Just Skills — A Complete Career Blueprint
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                We don't just teach you to draft contracts. We teach you how to build a career, find clients, and earn money doing what you love.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-6">
              {careerPoints.map((point) => (
                <StaggerItem key={point.title}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                      <point.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {point.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <AnimatedSection direction="left" className="relative">
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">
                Career Advancement Cell Support
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">1</div>
                  <span className="text-slate-300">22 Live career skill sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">2</div>
                  <span className="text-slate-300">Exclusive WhatsApp groups for opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">3</div>
                  <span className="text-slate-300">Profile sharing with partner organizations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">4</div>
                  <span className="text-slate-300">Bi-monthly 1-on-1 coaching with founders</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <p className="text-amber-400 font-semibold text-sm">
                  💡 Direct Upwork opportunities shared with students. Start earning while you learn.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}