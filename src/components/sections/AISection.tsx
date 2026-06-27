"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Cpu, BookOpen, Sparkles, Lightbulb, FileText } from "lucide-react";

const aiFeatures = [
  {
    icon: Cpu,
    title: "LIVE AI Sessions",
    description: "Regular sessions by Indian Kanoon (Prism) and Jurisphere on AI tools in real legal work.",
  },
  {
    icon: BookOpen,
    title: "4-Hour AI Workshop",
    description: "Recorded sessions on AI for legal research, argumentation, contract drafting, and ethics.",
  },
  {
    icon: Sparkles,
    title: "1-Month Prism Access",
    description: "Complimentary access to Indian Kanoon's AI tool for faster research and smarter drafting.",
  },
  {
    icon: Lightbulb,
    title: "AI in Live Classes",
    description: "Faculty demonstrates how AI enhances corporate law, litigation, IPR, and career building.",
  },
  {
    icon: FileText,
    title: "31-Page AI Prompts eBook",
    description: "Curated prompts for contract drafting, legal research, litigation, and career development.",
  },
];

export function AISection() {
  return (
    <section id="ai" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold uppercase tracking-wider mb-4">
            AI-Ready Legal Careers
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Building the Future of Legal Practice
          </h2>
          <p className="text-lg text-slate-600">
            AI is no longer optional for lawyers. At Lawctopus Law School, we teach you to use AI responsibly and effectively to enhance your practice.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <StaggerContainer className="space-y-6">
            {aiFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection direction="left">
            <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-purple-400 font-semibold">AI-Enhanced Learning</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Every LLS Learner Gets:
                </h3>
                <ul className="space-y-3">
                  {[
                    "LIVE AI sessions by Indian Kanoon & Jurisphere",
                    "4-hour structured AI workshop for legal work",
                    "1-month complimentary access to Prism",
                    "Ongoing AI insights from faculty during classes",
                    "31-page AI Prompts Library eBook",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
