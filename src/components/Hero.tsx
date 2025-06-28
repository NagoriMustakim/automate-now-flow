
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, Database, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main headline */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Stop doing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> repetitive work</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We automate your daily operations with AI-powered workflows. 
            Connect your tools, eliminate manual tasks, and focus on what matters most.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-medium rounded-xl hover:shadow-md transition-all duration-200"
          >
            Let's Talk Automation
          </Button>
        </div>

        {/* Social proof / tools */}
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-slate-500 mb-6 uppercase tracking-wide font-medium">
            Powered by industry-leading tools
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2 text-slate-600">
              <Zap className="h-5 w-5" />
              <span className="font-medium">n8n</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Google Calendar</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">WhatsApp API</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Database className="h-5 w-5" />
              <span className="font-medium">Google Sheets</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-sm" />
              <span className="font-medium">OpenAI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full blur-xl animate-pulse delay-300" />
    </section>
  );
};

export default Hero;
