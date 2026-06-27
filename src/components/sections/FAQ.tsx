"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ChevronDown, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who is this course for?",
    answer: "This course is designed for law students, young lawyers (0-4 years experience), academicians, and anyone interested in legal freelancing. Whether you're a beginner or looking to specialize in contract drafting, this course has you covered.",
  },
  {
    question: "What is the time commitment required?",
    answer: "For professionals: 5-6 hours per week. For law students: 6-7 hours per week. This includes live sessions, recorded lectures, assignments, and reading material. Sessions are scheduled keeping working professionals in mind.",
  },
  {
    question: "Are the sessions live or recorded?",
    answer: "The first 2 months have weekly live sessions. The next 4 months have 7-8 live sessions per month. All live sessions are recorded and available for lifetime access. You also get 32+ hours of pre-recorded lectures by industry experts.",
  },
  {
    question: "What contracts will I learn to draft?",
    answer: "You'll draft 24+ contracts including NDAs, Employment Agreements, Software Licensing, Trademark/Patent/Copyright Licensing, Shareholders Agreements, Joint Ventures, Sale Deeds, Franchisee Agreements, SAAS Agreements, Website Terms, Privacy Policies, and more.",
  },
  {
    question: "How does the freelancing module work?",
    answer: "You'll learn to build profiles on Upwork and Fiverr, write winning proposals, and get direct opportunities shared in exclusive WhatsApp groups. We also provide CV optimization, LinkedIn branding, and bi-monthly 1-on-1 coaching.",
  },
  {
    question: "What is the money-back guarantee?",
    answer: "If you attend at least 66% of live classes (with video ON), submit all assignments with passing grades, and still feel the course didn't add value — email us within 10 days of course completion for a 100% refund. No questions asked.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! Lawctopus Law School issues completion certificates to all students who finish the course. Merit certificates are awarded to top-performing learners. These certificates are recognized by law firms and corporate legal departments.",
  },
  {
    question: "What AI tools are included?",
    answer: "You get 1-month complimentary access to Indian Kanoon's AI tool (Prism), a 4-hour recorded AI workshop, LIVE AI sessions by legal-tech platforms, and a 31-page AI Prompts Library eBook curated for lawyers.",
  },
  {
    question: "Can I pay in installments?",
    answer: "Yes, we offer flexible payment options. Contact courses@lawctopus.com to discuss installment plans that work for you.",
  },
  {
    question: "How do I get my doubts clarified?",
    answer: "You get a dedicated Learning Manager, access to online discussion forums, WhatsApp group support, and email support at courses@lawctopus.com with a 24-hour response guarantee.",
  },
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know before enrolling.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a
            href="mailto:courses@lawctopus.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email us at courses@lawctopus.com
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
