
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
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&crop=center", // Modern car dashboard
      cta: "Book a Demo"
    },
    {
      id: "02",
      name: "Healthcare",
      icon: Heart,
      description: "Reduce no-shows and improve patient care with AI agents managing appointment reminders, patient check-ins, and medication follow-ups. Healthcare providers can automate routine communications while ensuring patients never miss critical appointments or medication schedules. Free up your staff to focus on patient care while maintaining consistent, personalized communication.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center", // Medical equipment/hospital
      cta: "Let's Talk"
    },
    {
      id: "03",
      name: "Retail",
      icon: ShoppingBag,
      description: "Enhance customer experience with AI agents providing real-time order updates, instant product lookups, and personalized recommendations. Transform customer inquiries into sales opportunities while reducing support workload. Customers get immediate answers about their orders, product availability, and personalized shopping suggestions 24/7.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center", // Modern retail store
      cta: "Book a Demo"
    },
    {
      id: "04",
      name: "Logistics",
      icon: Truck,
      description: "Keep customers informed with AI agents that track shipments, send proactive delivery alerts, and update warehouse inventory automatically. Reduce support tickets while improving delivery transparency. Customers receive real-time updates about their packages, and warehouse operations become more efficient with automated inventory management.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&crop=center", // Warehouse/logistics
      cta: "Let's Talk"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('ai-showcase-section');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which card should be active based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionTop + windowHeight / 2) / sectionHeight));
      const cardIndex = Math.floor(scrollProgress * industries.length);
      const clampedIndex = Math.max(0, Math.min(industries.length - 1, cardIndex));
      
      setActiveCard(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [industries.length]);

  return (
    <section id="ai-showcase-section" className="py-20 bg-gradient-to-b from-[#003049] to-[#0a4a6b] min-h-[400vh]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto sticky top-20 z-10 bg-gradient-to-b from-[#003049] to-transparent pb-8">
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

        {/* Sticky Card Container */}
        <div className="max-w-6xl mx-auto sticky top-1/2 transform -translate-y-1/2">
          <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 overflow-hidden transition-all duration-500 ease-in-out">
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
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {industries[activeCard].name}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8">
                    {industries[activeCard].description}
                  </p>
                  
                  <Button 
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold w-fit px-8 py-3 rounded-full"
                    size="lg"
                  >
                    {industries[activeCard].cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {/* Right Image */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 md:p-12">
                  <img 
                    src={industries[activeCard].image}
                    alt={industries[activeCard].name}
                    className="w-full h-full object-cover rounded-lg shadow-lg max-h-96"
                  />
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
                  index === activeCard ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceShowcase;
