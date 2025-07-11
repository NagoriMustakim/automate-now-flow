
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Car, Heart, ShoppingBag, Truck } from "lucide-react";

const AIVoiceShowcase = () => {
  const industries = [
    {
      id: "01",
      name: "Automotive",
      icon: Car,
      description: "From booking service appointments to providing real-time roadside assistance, AI voice agents are making car ownership smoother than ever. Drivers can schedule maintenance checks effortlessly or get instant guidance during vehicle breakdowns. Imagine a driver stuck with a flat tire—an AI voice agent can instantly connect them to roadside services, reducing stress and delays.",
      image: "🚗",
      cta: "Book a Demo"
    },
    {
      id: "02",
      name: "Healthcare",
      icon: Heart,
      description: "Reduce no-shows and improve patient care with AI agents managing appointment reminders, patient check-ins, and medication follow-ups. Healthcare providers can automate routine communications while ensuring patients never miss critical appointments or medication schedules. Free up your staff to focus on patient care while maintaining consistent, personalized communication.",
      image: "🏥",
      cta: "Let's Talk"
    },
    {
      id: "03",
      name: "Retail",
      icon: ShoppingBag,
      description: "Enhance customer experience with AI agents providing real-time order updates, instant product lookups, and personalized recommendations. Transform customer inquiries into sales opportunities while reducing support workload. Customers get immediate answers about their orders, product availability, and personalized shopping suggestions 24/7.",
      image: "🛍️",
      cta: "Book a Demo"
    },
    {
      id: "04",
      name: "Logistics",
      icon: Truck,
      description: "Keep customers informed with AI agents that track shipments, send proactive delivery alerts, and update warehouse inventory automatically. Reduce support tickets while improving delivery transparency. Customers receive real-time updates about their packages, and warehouse operations become more efficient with automated inventory management.",
      image: "📦",
      cta: "Let's Talk"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#003049] to-[#0a4a6b] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
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

        {/* Vertical Scrolling Cards */}
        <div className="max-w-6xl mx-auto">
          <ScrollArea className="h-[600px] w-full">
            <div className="space-y-8 pr-4">
              {industries.map((industry, index) => (
                <Card key={index} className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
                      {/* Left Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                          <industry.icon className="h-8 w-8 text-blue-400" />
                          <span className="text-gray-400 text-sm font-mono">{industry.id}</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                          {industry.name}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8">
                          {industry.description}
                        </p>
                        
                        <Button 
                          className="bg-white text-gray-900 hover:bg-gray-100 font-semibold w-fit px-8 py-3 rounded-full"
                          size="lg"
                        >
                          {industry.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Right Image/Visual */}
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 md:p-12">
                        <div className="text-8xl md:text-9xl opacity-60">
                          {industry.image}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceShowcase;
