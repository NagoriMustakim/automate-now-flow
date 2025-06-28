
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, Database, Zap, Bot, Users, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#003049] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003049] via-[#0a4a6b] to-[#003049]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center">
                <Bot className="h-7 w-7 text-[#003049]" />
              </div>
              <span className="text-2xl font-bold">AutomateAI</span>
            </div>

            {/* Main headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Stop doing
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block">
                  repetitive work
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
                We automate your daily operations with AI-powered workflows. 
                Connect your tools, eliminate manual tasks, and focus on what matters most.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-0"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-300 text-blue-100 hover:bg-blue-800/50 hover:text-white px-8 py-4 text-lg font-medium rounded-xl hover:shadow-md transition-all duration-200 bg-transparent"
              >
                Let's Talk Automation
              </Button>
            </div>

            {/* Social proof / tools */}
            <div>
              <p className="text-sm text-blue-300 mb-6 uppercase tracking-wide font-medium">
                Powered by industry-leading tools
              </p>
              
              <div className="flex flex-wrap gap-6 opacity-80">
                <div className="flex items-center gap-2 text-blue-200">
                  <Zap className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">n8n</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">Google Calendar</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">WhatsApp API</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Database className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">Google Sheets</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-sm" />
                  <span className="font-medium">OpenAI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* 3D-style illustration */}
            <div className="relative w-full max-w-lg">
              {/* Central AI Agent */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  <Bot className="h-16 w-16 text-[#003049]" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-3xl blur-xl opacity-50 animate-pulse" />
              </div>

              {/* Floating task cards */}
              <div className="absolute top-8 left-8 z-10 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                  <Calendar className="h-6 w-6 text-blue-300 mb-2" />
                  <div className="text-sm text-blue-100">Calendar Sync</div>
                  <div className="w-16 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mt-2" />
                </div>
              </div>

              <div className="absolute top-16 right-8 z-10 transform hover:-translate-y-2 transition-transform duration-300 delay-100">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                  <MessageSquare className="h-6 w-6 text-cyan-300 mb-2" />
                  <div className="text-sm text-blue-100">Client Follow-ups</div>
                  <div className="w-20 h-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mt-2" />
                </div>
              </div>

              <div className="absolute bottom-20 left-4 z-10 transform hover:-translate-y-2 transition-transform duration-300 delay-200">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                  <Database className="h-6 w-6 text-blue-400 mb-2" />
                  <div className="text-sm text-blue-100">Data Processing</div>
                  <div className="w-14 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
                </div>
              </div>

              <div className="absolute bottom-8 right-12 z-10 transform hover:-translate-y-2 transition-transform duration-300 delay-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                  <BarChart3 className="h-6 w-6 text-cyan-400 mb-2" />
                  <div className="text-sm text-blue-100">Analytics</div>
                  <div className="w-18 h-2 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full mt-2" />
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path d="M200,200 L80,80" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                <path d="M200,200 L320,100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                <path d="M200,200 L60,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
                <path d="M200,200 L340,320" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1.5s'}} />
              </svg>

              {/* Additional floating elements */}
              <div className="absolute top-32 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
              <div className="absolute bottom-32 right-20 w-2 h-2 bg-cyan-300 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
              <div className="absolute top-48 right-16 w-4 h-4 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '1.5s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
