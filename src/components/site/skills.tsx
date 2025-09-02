import { Code, Database, Palette, Server, Smartphone, Globe, Languages } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend Development",
    icon: Code,
    skills: [
      "React", 
      "Next.js",
      "HTML/CSS",
      "Tailwind CSS",
    ]
  },
  {
    name: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "Spring Boot",
      "REST APIs",
    ]
  },
  {
    name: "Programming Languages",
    icon: Languages,
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
    ]
  },
  {
    name: "Database & Cloud",
    icon: Database,
    skills: [
      "MongoDB",
      "AWS",
      "Firebase",
    ]
  },
  {
    name: "Tools & Platforms",
    icon: Globe,
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "Okta"
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of the languages, tools, and technologies I have worked with over the years.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        
          
      </div>
    </section>
  )
}

