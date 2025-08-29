import { Code, Database, Palette, Server, Smartphone, Globe } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 92 },
    ]
  },
  {
    name: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 80 },
    ]
  },
  {
    name: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
    ]
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 75 },
      { name: "Flutter", level: 60 },
      { name: "Mobile UI/UX", level: 80 },
      { name: "App Store Deployment", level: 70 },
    ]
  },
  {
    name: "Design & Tools",
    icon: Palette,
    skills: [
      { name: "Figma", level: 75 },
      { name: "Adobe XD", level: 70 },
      { name: "Git", level: 90 },
      { name: "Webpack", level: 80 },
      { name: "Jest", level: 85 },
      { name: "Storybook", level: 75 },
    ]
  },
  {
    name: "Other Technologies",
    icon: Globe,
    skills: [
      { name: "WordPress", level: 85 },
      { name: "Shopify", level: 70 },
      { name: "Stripe", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 85 },
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
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed a diverse set of skills through years of experience and continuous learning. 
            Here's what I bring to the table.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Additional Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Beyond technical skills, I also bring valuable soft skills and methodologies to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Agile Methodologies",
                description: "Scrum, Kanban, Sprint Planning"
              },
              {
                title: "Team Leadership",
                description: "Mentoring, Code Reviews, Technical Guidance"
              },
              {
                title: "Problem Solving",
                description: "Analytical thinking, Debugging, Optimization"
              },
              {
                title: "Communication",
                description: "Client interaction, Documentation, Presentations"
              }
            ].map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
              and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Machine Learning",
                "Blockchain Development",
                "Web3 Technologies",
                "Advanced TypeScript",
                "Performance Optimization",
                "Security Best Practices"
              ].map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

