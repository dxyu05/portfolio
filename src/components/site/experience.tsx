import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.",
    achievements: [
      "Led a team of 5 developers to deliver a customer portal that increased user engagement by 40%",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Optimized database queries resulting in 50% faster page load times",
      "Mentored 3 junior developers who were promoted within 12 months"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Built and maintained multiple web applications for a fast-growing startup. Collaborated with design and product teams to deliver user-centric solutions.",
    achievements: [
      "Developed a real-time collaboration tool used by 10,000+ users",
      "Reduced API response time by 70% through caching and optimization",
      "Implemented automated testing increasing code coverage to 85%",
      "Designed and built a mobile-responsive dashboard for analytics"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Socket.io", "Jest"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency ABC",
    location: "Austin, TX",
    period: "2018 - 2020",
    description: "Created responsive and interactive web experiences for various clients. Worked closely with designers to implement pixel-perfect designs.",
    achievements: [
      "Built 15+ client websites with 100% client satisfaction rate",
      "Improved website performance scores by 30% on average",
      "Developed reusable component library used across 20+ projects",
      "Collaborated with UX team to improve user conversion rates by 25%"
    ],
    technologies: ["JavaScript", "HTML/CSS", "WordPress", "jQuery", "SASS", "Webpack"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey has been filled with exciting challenges and opportunities 
            to grow as a developer and team member.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 lg:left-1/2 lg:transform lg:-translate-x-0.5" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg lg:left-1/2 lg:transform lg:-translate-x-2" />
                
                {/* Content */}
                <div className={`ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-8 lg:text-right' : 'lg:ml-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-200">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Want to see more details about my experience?
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}
