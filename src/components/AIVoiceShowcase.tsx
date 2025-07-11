
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Car, Heart, ShoppingBag, Truck } from "lucide-react";
import { useEffect, useState } from "react";

const AIVoiceShowcase = () => {
  const [activeCard, setActiveCard] = useState(0);

  const industries = [
    {
      id: "01",
      name: "Automotive",
      icon: Car,
      description: "From booking service appointments to providing real-time roadside assistance, AI voice agents are making car ownership smoother than ever. Drivers can schedule maintenance checks effortlessly or get instant guidance during vehicle breakdowns. Imagine a driver stuck with a flat tire—an AI voice agent can instantly connect them to roadside services, reducing stress and delays.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&crop=center",
      cta: "Book a Demo"
    },
    {
      id: "02",
      name: "Healthcare",
      icon: Heart,
      description: "Reduce no-shows and improve patient care with AI agents managing appointment reminders, patient check-ins, and medication follow-ups. Healthcare providers can automate routine communications while ensuring patients never miss critical appointments or medication schedules. Free up your staff to focus on patient care while maintaining consistent, personalized communication.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
      cta: "Let's Talk"
    },
    {
      id: "03",
      name: "Retail",
      icon: ShoppingBag,
      description: "Enhance customer experience with AI agents providing real-time order updates, instant product lookups, and personalized recommendations. Transform customer inquiries into sales opportunities while reducing support workload. Customers get immediate answers about their orders, product availability, and personalized shopping suggestions 24/7.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
      cta: "Book a Demo"
    },
    {
      id: "04",
      name: "Logistics",
      icon: Truck,
      description: "Keep customers informed with AI agents that track shipments, send proactive delivery alerts, and update warehouse inventory automatically. Reduce support tickets while improving delivery transparency. Customers receive real-time updates about their packages, and warehouse operations become more efficient with automated inventory management.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310e?w=800&h=600&fit=crop&crop=center",
      cta: "Let's Talk"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('ai-showcase-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Only calculate when section is in view
      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        // Calculate progress through the section (0 to 1)
        const scrollProgress = Math.max(0, Math.min(1, -sectionTop / (sectionHeight - windowHeight)));
        
        // Determine which card should be active
        const cardIndex = Math.floor(scrollProgress * industries.length);
        const clampedIndex = Math.max(0, Math.min(industries.length - 1, cardIndex));
        
        setActiveCard(clampedIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [industries.length]);

  return (
    <section id="ai-showcase-section" className="relative bg-gradient-to-b from-[#003049] to-[#0a4a6b]" style={{ height: '300vh' }}>
      <div className="container mx-auto px-6">
        {/* Header - Sticky at top */}
        <div className="sticky top-0 z-10 py-20 bg-gradient-to-b from-[#003049] via-[#003049] to-transparent">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your AI companion is here to assist,
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block">
                automate, and enhance
              </span>
              your daily tasks.
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Hire an intelligent voice assistant to boost productivity and efficiency today.
            </p>
          </div>
        </div>

        {/* Sticky Card Container */}
        <div className="sticky top-1/2 transform -translate-y-1/2 z-20">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gray-900/90 backdrop-blur-sm border-gray-700/50 overflow-hidden transition-all duration-700 ease-in-out shadow-2xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                  {/* Left Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      {React.createElement(industries[activeCard].icon, { 
                        className: "h-8 w-8 text-blue-400" 
                      })}
                      <span className="text-gray-400 text-sm font-mono">{industries[activeCard].id}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-500">
                      {industries[activeCard].name}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8 transition-all duration-500">
                      {industries[activeCard].description}
                    </p>
                    
                    <Button 
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold w-fit px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                      size="lg"
                    >
                      {industries[activeCard].cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Right Image */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 md:p-12">
                    <div className="relative w-full h-full max-h-96 overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={industries[activeCard].image}
                        alt={industries[activeCard].name}
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {industries.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeCard ? 'bg-blue-400 scale-110' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceShowcase;
