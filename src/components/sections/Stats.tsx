"use client";

import { AnimatedSection, CountUp } from "@/components/AnimatedSection";

const stats = [
  { value: 20000, suffix: "+", label: "Students Trained", icon: "👨‍🎓" },
  { value: 93, suffix: "/100", label: "Average Rating", icon: "⭐" },
  { value: 54, suffix: "", label: "Live Sessions", icon: "🎥" },
  { value: 24, suffix: "+", label: "Contracts Drafted", icon: "📄" },
];

export function Stats() {
  return (
    <section id="stats" className="relative z-10 -mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-slate-900">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
