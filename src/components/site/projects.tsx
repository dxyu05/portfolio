import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Goal Streaks!",
    description: "Currently working on a tool to track daily goals, but also provide features to help with motivation and accountability. Main selling point is having friends and streaks!",
    image: "/project1.jpg",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Java", "Spring Boot"],
    github: "https://github.com",
  },
  {
    title: "Canvas Helper",
    description: "Currently working on a tool to sync Canvas assignments with Google Calendar.",
    image: "/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Canvas API", "Google Calendar API"],
    github: "https://github.com",
  },
  {
    title: "MLB Stats Tracker",
    description: "A website designed for lookup of a player's career stats. Utilizes a RESTful Flask API to fetch and format data from the MLB API.",
    image: "/project2.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Flask", "Python"],
    github: "https://github.com",
  },
  {
    title: "Reddit Student Sentiment",
    description: "A data analysis project examining correlations between student political views and opinions on Reddit posts using Python, Pandas, and visualization tools.",
    image: "/project3.jpg",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Google Colab"],
    github: "https://github.com",
  },
  {
    title: "White House Reel Generator",
    description: "A tool that generates reels on the latest news from the White House. Scrapes whitehouse.gov to get the latest news from the administration and uses gen ai along with other tools to generate fun and engaging reels.",
    image: "/project4.jpg",
    technologies: ["Python", "Selenium", "Google Generative AI",  "MoviePy"],
    github: "https://github.com/yourusername/portfolio",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on and am currently working on!
            </p>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 h-96 flex flex-col"
              >
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Project Image</span>
                  </div>
                </div>
                
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
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

