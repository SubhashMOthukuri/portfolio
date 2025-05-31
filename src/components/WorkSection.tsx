
import { Card, CardContent } from "@/components/ui/card";

export const WorkSection = () => {
  const projects = [
    {
      title: "E-Commerce Product Recommendation System",
      role: "ML Engineer",
      description: "Built RNN-powered recommendation engine with 90% accuracy, deployed using Flask and Docker for scalable e-commerce solutions.",
      tags: ["Machine Learning", "Flask", "Docker", "RNN"],
    },
    {
      title: "Quantum-Secure Messaging Platform",
      role: "Quantum Computing Researcher",
      description: "Developed secure communication platform using Qiskit and BB84 protocol with real-time eavesdropper detection capabilities.",
      tags: ["Quantum Computing", "Qiskit", "BB84", "Python"],
    },
    {
      title: "AR/VR Unity Application with CNN",
      role: "Research Assistant",
      description: "Created AR/VR application with Unity integrated with PyTorch CNN models for real-time object recognition and tracking.",
      tags: ["AR/VR", "Unity", "PyTorch", "CNN"],
    },
    {
      title: "Spring Boot Web Application",
      role: "Software Engineer",
      description: "Full-stack web application with Java Spring Boot backend, ReactJS frontend, and CI/CD pipeline implementation.",
      tags: ["Spring Boot", "ReactJS", "CI/CD", "Microservices"],
    },
  ];

  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions spanning AI/ML, Quantum Computing, and Software Engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border-0"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{project.role}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
