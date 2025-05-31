export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "SQL", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "ML & AI",
      skills: [
        "scikit-learn", 
        "PyTorch", 
        "TensorFlow", 
        "CNN", 
        "RNN", 
        "LSTM", 
        "Transformers", 
        "Generative AI", 
        "LLMs", 
        "Prompt Engineering",
        "Fine-tuning",
        "RAG",
        "Agentic AI",
        "LangChain",
        "LangGraph",
        "Hugging Face",
        "Azure AI"
      ]
    },
    {
      title: "Quantum Computing",
      skills: ["Qiskit", "BB84 Protocol", "Shor's Algorithm", "Grover's Algorithm"]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Flask", 
        "FastAPI",
        "Docker", 
        "Kubernetes", 
        "Jenkins", 
        "Git", 
        "Spring Boot", 
        "Spring Security", 
        "MongoDB", 
        "MariaDB",
        "n8n"
      ]
    },
    {
      title: "Data Science",
      skills: ["NumPy", "pandas", "Matplotlib", "Seaborn", "Data Visualization"]
    },
    {
      title: "Specialized",
      skills: [
        "AR/VR (Unity)", 
        "RESTful APIs", 
        "Microservices", 
        "CI/CD",
        "AI Agents",
        "LLM Applications"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical expertise across AI, Quantum Computing, and Software Engineering
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group px-4 py-2 bg-gray-50 rounded-lg text-center transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 cursor-pointer"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI & Quantum Applications
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Advanced AI Solutions
                </h4>
                <p className="text-gray-600">
                  RAG systems, Agentic AI, and LLM applications using LangChain and Azure AI services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Quantum-Secure Messaging
                </h4>
                <p className="text-gray-600">
                  Python + Qiskit platform using BB84 protocol for secure communication with eavesdropper detection.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  AR/VR + ML Integration
                </h4>
                <p className="text-gray-600">
                  AR/VR with Unity + CNN for real-time object recognition in immersive environments.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Student Mentorship</h3>
            <p className="text-gray-300 mb-6">
              Aspiring AI or Quantum Computing student? Let's connect and build your future.
            </p>
            <button 
              onClick={() => window.open('https://calendly.com/event_types/user/me', '_blank')}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Book Mentorship Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
