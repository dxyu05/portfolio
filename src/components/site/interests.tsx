import { BookOpen, Coffee, Gamepad2, Music, Plane, Users, Circle } from "lucide-react"

const interests = [
  {
    title: "Reading",
    icon: BookOpen,
    description: "I love reading fantasy and sci-fi books. My favorite series of all time is probably Mistborn by Brandon Sanderson.",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Pickleball",
    icon: Circle,
    description: "I love playing pickleball! I just got into it and it's a great way to stay active, socialize, and challenge myself with a fun racquet sport.",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Cafes",
    icon: Coffee,
    description: "I recently discovered the joy of visiting cafes. Pastries and coffee are a great way to start the day.",
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Gaming helps me stay creative and problem-solve. I enjoy playing competitive games such as League of Legends, but also casual games such as Minecraft and Pokemon (I love Gen 5).",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Music",
    icon: Music,
    description: "Music is my constant companion while coding. I listen to everything from classical to electronic, jazz to rock.",
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Travel",
    icon: Plane,
    description: "Exploring new places and cultures inspires my creativity. I've visited 4 countries outside the US and hope to travel more in the future.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Watching Sports",
    icon: Users,
    description: "I'm a big sports fan! I love watching and following baseball and football. I also love watching League of Legends and Osu Esports!",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Community",
    icon: Users,
    description: "Active in local tech communities and meetups. I believe in giving back and helping others grow in their tech journey.",
    color: "from-teal-500 to-teal-600"
  }
]



export function Interests() {
  return (
    <section id="interests" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interests & Hobbies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Beyond coding, I have a variety of interests that keep me active and engaged.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${interest.color} mb-4`}>
                <interest.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {interest.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Fun Facts About Me
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "4", label: "Countries Visited", color: "text-purple-600 dark:text-purple-400" },
              { number: "Orioles", label: "Favorite Sports Team", color: "text-orange-600 dark:text-orange-400" },
              { number: "Yorushika", label: "Favorite Musical Artist", color: "text-purple-600 dark:text-purple-400" },
              { number: "24/7", label: "Music Playing", color: "text-purple-600 dark:text-purple-400" }
            ].map((fact, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className={`text-3xl font-bold mb-2 ${fact.color}`}>
                  {fact.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

