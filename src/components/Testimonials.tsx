
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Operations Manager",
      company: "TechFlow Solutions",
      content: "AutomateAI transformed our client follow-up process completely. What used to take our team 3 hours daily is now handled automatically through WhatsApp and GPT integration. We've reduced response time by 80% and our client satisfaction scores have never been higher.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "Marketing Director", 
      company: "GrowthLab",
      content: "The LinkedIn post automation has been a game-changer for our content strategy. We're now publishing consistent, trend-based content without the manual research and writing. Our engagement increased by 150% while freeing up 10 hours per week for strategic work.",
      rating: 5
    },
    {
      name: "Emily Thompson",
      title: "CEO",
      company: "DataSync Pro", 
      content: "Our Google Sheets to CRM sync was a nightmare before AutomateAI stepped in. The custom n8n workflow they built eliminated data entry errors and saved us 15 hours weekly. The ROI was evident within the first month – absolutely worth the investment.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#003049]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real results from businesses that transformed their operations with AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-300/30 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-blue-100 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-semibold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-blue-300 text-sm">
                  {testimonial.title}
                </p>
                <p className="text-cyan-400 text-sm font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
