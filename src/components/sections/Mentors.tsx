"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { BookOpen } from "lucide-react";

const mentors = [
  {
    name: "Shashank Sardesai",
    role: "Co-founder, EverTrust Legal",
    credentials: "Ex-Wadia Ghandy, HSA Advocates, Khaitan Legal Associates",
    bio: "Expert in partnership deeds, NDAs, lease deeds, and service agreements. Diploma in International Business Laws & Cyber Laws.",
    initials: "SS",
  },
  {
    name: "Akanksha Mishra",
    role: "Head of Lawctopus Law School",
    credentials: "Independent Litigator, Bombay High Court. Gold Medalist, LLM Constitutional Law",
    bio: "Taught 1500+ learners with a 96.5/100 average rating. Corporate counsel for startups, PSUs, and media companies.",
    initials: "AM",
  },
  {
    name: "Pranjal Doshi",
    role: "Associate, Walker Morris LLP, UK",
    credentials: "HNLU (2018), University of Cambridge (2019). Ex-Trilegal, Khaitan & Co",
    bio: "Specializes in M&A and private equity transactions. Extensive experience on investment documents and shareholder agreements.",
    initials: "PD",
  },
  {
    name: "Arunima Jha",
    role: "Head Legal Counsel, Omnicom Media Group",
    credentials: "Ex-BookMyShow, K Raheja Corp. LLM Business & Corporate Law, Mumbai University",
    bio: "10+ years in media law, privacy law, and corporate legal strategy. Guest lecturer at leading law institutes.",
    initials: "AJ",
  },
  {
    name: "Gourav Mohanty",
    role: "Advocate, Bombay High Court",
    credentials: "Ex-Senior Associate, Shardul Amarchand Mangaldas. Gold Medalist, SLS Pune",
    bio: "Ram Jethmalani Scholar & Chancellor's Award winner. 2nd Prize in Linklaters NSLR Contract Drafting Competition.",
    initials: "GM",
  },
];

export function Mentors() {
  return (
    <section id="mentors" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
            Meet Your Mentors
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Learn from India's Best Legal Minds
          </h2>
          <p className="text-lg text-slate-600">
            Our faculty has worked at Trilegal, Khaitan & Co, Shardul Amarchand, and top international firms. They bring real-world expertise to every session.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <StaggerItem key={mentor.name}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-lg">
                    {mentor.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{mentor.name}</h3>
                    <p className="text-sm text-amber-600 font-medium">{mentor.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 font-medium mb-3">{mentor.credentials}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{mentor.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Plus guest lectures from Bhumesh Verma (Ex-Partner, Khaitan & Co, 25+ years), Anup Menon V (Top-Rated Upwork Freelancer), Tanuj Kalia (Founding CEO, Lawctopus), and more.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
