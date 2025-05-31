export const CareerTimeline = () => {
  const experiences = [
    {
      period: "2023 - 2025",
      title: "Graduate Student",
      company: "Concordia University Wisconsin",
      achievements: [
        "Pursuing Master of Science in Computer Science with 3.7/4.0 GPA",
        "Specializing in AI/ML, Quantum Computing, and scalable software systems",
        "Researching quantum-secure communication protocols and AI applications"
      ]
    },
    {
      period: "2022 - 2023",
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      achievements: [
        "Developed full-stack applications using Spring Boot and React",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Collaborated on microservices architecture design and implementation"
      ]
    },
    {
      period: "2020 - 2022",
      title: "Data Science Intern",
      company: "AI Research Lab",
      achievements: [
        "Built machine learning models achieving 90% accuracy in predictions",
        "Processed and analyzed large datasets using Python and pandas",
        "Created data visualization dashboards for business insights"
      ]
    },
    {
      period: "Aug 2019 - Sep 2020",
      title: "Junior Interior Designer",
      company: "Glamerhomz",
      achievements: [
        "Conducted site measurements and created precise 2D blueprints using AutoCAD",
        "Designed furniture layouts optimized for available spaces",
        "Developed detailed 3D models using 3ds Max",
        "Managed project timelines and ensured timely completion of tasks",
        "Applied expertise in spatial planning, technical drawing, and furniture design"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Career Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in building innovative AI and software solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="text-sm text-gray-500 font-medium mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-gray-600 font-medium mb-4">
                    {exp.company}
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
