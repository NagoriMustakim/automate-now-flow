
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Car, Heart, ShoppingBag, Truck } from "lucide-react";

const AIVoiceShowcase = () => {
  const industries = [
    {
      name: "Automotive",
      icon: Car,
      description: "Streamline customer service with AI agents that handle service appointments, provide breakdown support, and coordinate roadside assistance. Customers get instant responses 24/7, while your team focuses on repairs instead of phone calls.",
      image: "🚗",
      cta: "Book a Demo"
    },
    {
      name: "Healthcare",
      icon: Heart,
      description: "Reduce no-shows and improve patient care with AI agents managing appointment reminders, patient check-ins, and medication follow-ups. Free up your staff to focus on patient care while maintaining consistent communication.",
      image: "🏥",
      cta: "Let's Talk"
    },
    {
      name: "Retail",
      icon: ShoppingBag,
      description: "Enhance customer experience with AI agents providing real-time order updates, instant product lookups, and personalized recommendations. Turn inquiries into sales while reducing support workload.",
      image: "🛍️",
      cta: "Book a Demo"
    },
    {
      name: "Logistics",
      icon: Truck,
      description: "Keep customers informed with AI agents that track shipments, send proactive delivery alerts, and update warehouse inventory automatically. Reduce support tickets while improving delivery transparency.",
      image: "📦",
      cta: "Let's Talk"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#003049] to-[#0a4a6b]">
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

        {/* Desktop Carousel */}
        <div className="hidden md:block max-w-7xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {industries.map((industry, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <industry.icon className="h-8 w-8 text-blue-400" />
                        <div className="text-6xl opacity-20">{industry.image}</div>
                      </div>
                      <CardTitle className="text-2xl text-white font-bold">
                        {industry.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-blue-100 leading-relaxed text-base">
                        {industry.description}
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 w-full"
                        size="lg"
                      >
                        {industry.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="hidden lg:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="md:hidden space-y-6">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <industry.icon className="h-8 w-8 text-blue-400" />
                  <div className="text-4xl opacity-20">{industry.image}</div>
                </div>
                <CardTitle className="text-xl text-white font-bold">
                  {industry.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-100 leading-relaxed text-sm">
                  {industry.description}
                </p>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 w-full"
                  size="lg"
                >
                  {industry.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIVoiceShowcase;
