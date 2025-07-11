
import Hero from "@/components/Hero";
import AIVoiceShowcase from "@/components/AIVoiceShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#003049]">
      <Hero />
      <AIVoiceShowcase />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
