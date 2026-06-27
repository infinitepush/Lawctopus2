"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, FileText, Users, Award, Clock } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
                <Award className="w-4 h-4" />
                6-Month Expert-Level Program
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Master{" "}
              <span className="text-amber-500">Contract Drafting</span>
              <br />
              &amp; Start Earning as a
              <br />
              <span className="text-amber-500">Freelancer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl"
            >
              54 live sessions. 24+ complex contracts. Freelancing on Upwork,
              Fiverr &amp; LinkedIn. Join 20,000+ learners who transformed their
              legal careers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#enroll"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-semibold text-lg shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Enroll Now — Save 58%
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-600 text-white font-semibold text-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                Explore Curriculum
              </a>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Users className="w-4 h-4 text-amber-500" />
                <span>20,000+ Alumni</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <FileText className="w-4 h-4 text-amber-500" />
                <span>24+ Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>54 Live Sessions</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
                {/* Contract document illustration */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Service Agreement</div>
                      <div className="text-slate-400 text-sm">Contract Drafting Exercise</div>
                    </div>
                  </div>

                  {/* Contract lines */}
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-700 rounded-full w-full" />
                    <div className="h-2 bg-slate-700 rounded-full w-[90%]" />
                    <div className="h-2 bg-slate-700 rounded-full w-[95%]" />
                    <div className="h-2 bg-amber-500/40 rounded-full w-[80%]" />
                    <div className="h-2 bg-slate-700 rounded-full w-[85%]" />
                  </div>

                  {/* Clause tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["Indemnity", "Termination", "IP Rights", "Governing Law"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl px-4 py-2"
                >
                  <span className="text-green-400 text-sm font-medium">✓ Drafted</span>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl px-4 py-2"
                >
                  <span className="text-blue-400 text-sm font-medium">$1,200 Earned</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
