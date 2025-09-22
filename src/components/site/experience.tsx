import { Calendar, Building } from "lucide-react"

const experiences = [
  {
    title: "Microsoft Global Hackathon Participant",
    company: "Microsoft",
    period: "Sep 2025",
    description: "Participated in the Microsoft Global Hackathon as a member of Hack4Impact-UMD team. Worked on an ap for Rise DC which allows users to create accessible schedules for young.",
  },
  {
    title: "Cybersecurity Engineering Intern",
    company: "Workday",
    period: "May 2025 - Aug 2025",
    description: "Worked on the Enterprise Identity Team focusing on Identity and Access Management. Developed and maintained enterprise-level software solutions for identity management systems."
  },
  {
    title: "Software Engineer",
    company: "Hack4Impact",
    period: "Aug 2024 - Present",
    description: "Building software for non-profits as part of the University of Maryland chapter. Collaborating with team members to deliver impactful solutions for social good organizations. Was an engineer on Food For All DC and a project to revamp an internal application system."
  },
  {
    title: "Panda Programmer",
    company: "Teacher",
    period: "May 2022 - Aug 2023",
    description: "Taught coding to elementary to high school students in groups of 8 students at a time. Focused mainly on Scratch projects, but also tought basic object-oriented programming concepts in Python."
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative flex justify-center">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-0.5 bg-gray-200 dark:bg-gray-600 h-full transform -translate-x-1/2" />
          
          <div className="relative space-y-6">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start">
                {/* Content */}
                <div className="ml-8">
                  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-4 border border-gray-200 dark:border-gray-600 max-w-md">
                    {/* Header */}
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Building className="h-3 w-3 mr-1" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
