import { useState, useEffect } from "react";
import { Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResumeDownload = () => {
    try {
      // Using the correct path to the resume file from public directory
      const resumePath = '/resume/subhashmothukuriREsume.pdf';
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'subhashmothukuriREsume.pdf';
      // Add link to document
      document.body.appendChild(link);
      // Trigger download
      link.click();
      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // You could add a toast notification here to show the error to the user
    }
  };

  const handleScheduleMeeting = () => {
    // Open Calendly in a new tab
    window.open('https://calendly.com/subhashmothukuri', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Subhash
              <br />
              <span className="text-gray-600">Mothukuru</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 font-light max-w-2xl">
              Data Scientist | ML Engineer | Quantum Researcher
            </h2>

            <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Building scalable, intelligent systems with AI, GenAI, and quantum principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleResumeDownload}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button
                onClick={handleScheduleMeeting}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/1685023d-1b39-4af8-800d-995452f9062a.png"
                  alt="Subhash Mothukuru"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 rounded-full opacity-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
