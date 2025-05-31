import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Download, Github, Calendar, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submission started', formData);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      console.log('Validation failed: Missing required fields');
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('Validation failed: Invalid email format', formData.email);
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Preparing email data');
      // Create mailto link with form data
      const subject = `New Contact Form Message from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:subhashmothukuri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      console.log('Opening email client with link:', mailtoLink);
      
      // Try to open email client
      const emailWindow = window.open(mailtoLink, '_blank');
      
      if (emailWindow === null) {
        throw new Error('Failed to open email client');
      }

      console.log('Email client opened successfully');
      toast({
        title: "Message prepared!",
        description: "Your default email client will open with the message. Please send it to complete the process.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error in form submission:', error);
      toast({
        title: "Failed to prepare message",
        description: "Please try again or contact me directly via email at subhashmothukuri@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log('Form field changed:', name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleResumeDownload = () => {
    // Using the correct path to the resume file from src directory
    const resumePath = '/src/resume/subhashmothukuruREsume.pdf';
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Subhash_Mothukuru_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScheduleMeeting = () => {
    // Open Calendly in a new tab
    window.open('https://calendly.com/subhashmothukuri', '_blank', 'noopener,noreferrer');
  };

  const handleMentorshipBooking = () => {
    // Open Calendly mentorship booking in a new tab
    window.open('https://calendly.com/event_types/user/me', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss AI innovation, quantum computing, or collaboration opportunities? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32"
                  placeholder="Tell me about your project or question..."
                  maxLength={500}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-600" />
                  <span className="text-gray-700">subhashmothukuri@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-600" />
                  <span className="text-gray-700">+1 (262) 825-8922</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left p-6 h-auto hover:bg-gray-50 transition-colors"
                  onClick={handleResumeDownload}
                >
                  <Download className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Download Resume</div>
                    <div className="text-sm text-gray-500">
                      Get my latest CV and portfolio
                    </div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left p-6 h-auto hover:bg-gray-50 transition-colors"
                  onClick={handleScheduleMeeting}
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Schedule a Meeting</div>
                    <div className="text-sm text-gray-500">
                      Book a time to chat via Calendly
                    </div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left p-6 h-auto hover:bg-gray-50 transition-colors"
                  onClick={handleMentorshipBooking}
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Book Mentorship Call</div>
                    <div className="text-sm text-gray-500">
                      Schedule a mentorship session for AI/Quantum Computing
                    </div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left p-6 h-auto hover:bg-gray-50 transition-colors"
                  onClick={() => window.open("https://linkedin.com/in/subhash-mothukuru", "_blank")}
                >
                  <div className="w-5 h-5 mr-3 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                    in
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-gray-500">
                      Professional network and updates
                    </div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-left p-6 h-auto hover:bg-gray-50 transition-colors"
                  onClick={() => window.open("https://github.com/SubhashMOthukuri", "_blank")}
                >
                  <Github className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-gray-500">
                      Code repositories and projects
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                Response Time
              </h4>
              <p className="text-gray-600">
                I typically respond within 24 hours. For urgent inquiries, 
                please mention "urgent" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
