export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/secondimage.jpeg"
                alt="Subhash Mothukuru"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm pursuing a Master of Science in Computer Science (GPA 3.7/4.0) 
                at Concordia University Wisconsin (2023–2025), specializing in AI/ML, 
                Quantum Computing, and scalable software systems.
              </p>
              
              <p>
                My expertise spans developing machine learning models, quantum-secure 
                communication systems, and full-stack applications. I'm passionate about 
                innovating at the intersection of AI and Quantum to solve tomorrow's problems.
              </p>
              
              <p>
                I believe in building intelligent systems that are not only powerful 
                but also secure and scalable. Whether it's deploying ML pipelines with 
                Docker or developing quantum algorithms with Qiskit, I focus on creating 
                solutions that make a real impact.
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-900">
              <p className="text-lg text-gray-700 italic">
                "Innovating at the intersection of AI and Quantum to solve tomorrow's problems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
