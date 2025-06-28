
import { Calendar, Clock, Code, Database, MessageSquare, Settings, TrendingUp, UserCheck, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-400" />,
      title: "Calendar to WhatsApp Voice Reminders",
      description: "Automatically send voice reminders via WhatsApp for upcoming meetings and appointments from your Google Calendar."
    },
    {
      icon: <Database className="h-8 w-8 text-cyan-400" />,
      title: "Sheets to CRM Sync",
      description: "Seamlessly synchronize data between Google Sheets and your CRM system with real-time updates."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-300" />,
      title: "LinkedIn Trend-Based Post Generator",
      description: "Generate engaging LinkedIn posts automatically based on current industry trends and your content preferences."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-cyan-300" />,
      title: "WhatsApp + GPT Follow-ups",
      description: "Intelligent client follow-up messages via WhatsApp powered by GPT for personalized communication."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Custom n8n Workflow Creation",
      description: "Fully tailored automation workflows built with n8n to match your specific business requirements."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Custom n8n Workflow Creation",
      description: "Fully tailored automation workflows built with n8n to match your specific business requirements."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: "Save Time",
      description: "Reclaim hours daily by automating repetitive tasks"
    },
    {
      icon: <UserCheck className="h-6 w-6 text-cyan-400" />,
      title: "Reduce Manual Work",
      description: "Eliminate human error with automated processes"
    },
    {
      icon: <Settings className="h-6 w-6 text-blue-300" />,
      title: "Fast Setup",
      description: "Get your automations running within days, not weeks"
    },
    {
      icon: <Code className="h-6 w-6 text-cyan-300" />,
      title: "No Coding Required",
      description: "We handle all technical implementation for you"
    }
  ];

  return (
    <section className="py-20 bg-[#003049]">
      <div className="container mx-auto px-6">
        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Automation
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block">
                Services
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your business operations with our specialized AI-powered automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-300/30 transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> AutomateAI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-300/30 transition-all duration-300 mb-4 group-hover:transform group-hover:-translate-y-1">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
