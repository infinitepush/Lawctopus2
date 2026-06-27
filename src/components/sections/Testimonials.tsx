"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "3rd Year Law Student, NLSIU",
    quote: "This course changed everything for me. I drafted my first real NDA in Week 2 and got my first Upwork client by Month 4. The live feedback on assignments is incredible.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Junior Associate, Delhi HC",
    quote: "I was struggling to find freelance work alongside my practice. The freelancing module taught me exactly how to position myself. Now I earn ₹40,000+ monthly from Upwork alone.",
    rating: 5,
  },
  {
    name: "Aditya Kumar",
    role: "Recent Graduate, NLU Delhi",
    quote: "The curriculum is intense but worth it. I went from knowing nothing about contract drafting to confidently handling M&A documents. The mentor support is exceptional.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
            Student Success Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Trusted by 20,000+ Legal Professionals
          </h2>
          <p className="text-lg text-slate-600">
            Hear from students who transformed their careers through Lawctopus Law School.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-500/30 mb-3" />
                <p className="text-slate-700 leading-relaxed mb-6 flex-1">{t.quote}</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
