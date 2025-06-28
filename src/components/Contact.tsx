
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Clock, Zap, DollarSign, Settings } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      icon: <Clock className="h-5 w-5 text-blue-400" />,
      question: "How long does setup take?",
      answer: "Most automations are up and running within 3-7 days, depending on complexity."
    },
    {
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
      question: "What systems do you integrate with?",
      answer: "We work with Google Workspace, WhatsApp API, CRMs, LinkedIn, and 500+ other platforms via n8n."
    },
    {
      icon: <DollarSign className="h-5 w-5 text-blue-300" />,
      question: "What's the pricing structure?",
      answer: "We offer custom pricing based on your specific needs. Most projects start at $500 for basic automations."
    },
    {
      icon: <Settings className="h-5 w-5 text-cyan-300" />,
      question: "Can you customize existing workflows?",
      answer: "Absolutely! We can modify and enhance your current processes or build completely new ones from scratch."
    }
  ];

  return (
    <section className="py-20 bg-[#003049]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Automate?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours to discuss your automation needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Mail className="h-6 w-6 text-blue-400" />
                  Start Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-blue-100">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-blue-100">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-blue-100">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-blue-100">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                        placeholder="Tell us about the processes you'd like to automate..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-white text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-blue-100">
                      Thank you for your interest. We'll review your message and send you a detailed response via email within 24 hours.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* FAQs */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {faq.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-blue-100 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl p-8 border border-blue-300/30">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Automate Your Business
              </h3>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Stop wasting time on repetitive tasks. Join hundreds of businesses already saving hours daily with AI automation.
              </p>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-8 py-3 text-lg"
                onClick={() => document.getElementById('name')?.focus()}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
