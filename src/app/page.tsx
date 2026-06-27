import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WhyCourse } from "@/components/sections/WhyCourse";
import { Outcomes } from "@/components/sections/Outcomes";
import { Skills } from "@/components/sections/Skills";
import { WhoShouldJoin } from "@/components/sections/WhoShouldJoin";
import { Mentors } from "@/components/sections/Mentors";
import { Curriculum } from "@/components/sections/Curriculum";
import { Career } from "@/components/sections/Career";
import { AISection } from "@/components/sections/AISection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <WhyCourse />
      <Outcomes />
      <Skills />
      <WhoShouldJoin />
      <Mentors />
      <Curriculum />
      <Career />
      <AISection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
