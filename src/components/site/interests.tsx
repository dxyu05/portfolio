import { BookOpen, Camera, Coffee, Gamepad2, Music, Plane, Utensils, Users } from "lucide-react"

const interests = [
  {
    title: "Reading",
    icon: BookOpen,
    description: "I love diving into tech books, sci-fi novels, and industry publications. Currently reading about AI and machine learning applications.",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Photography",
    icon: Camera,
    description: "Capturing moments through the lens. I enjoy street photography and documenting my travels around the world.",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Coffee Culture",
    icon: Coffee,
    description: "A coffee enthusiast who appreciates the art of brewing. I love exploring local coffee shops and learning about different brewing methods.",
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Gaming helps me stay creative and problem-solve. I enjoy indie games, strategy games, and occasionally competitive titles.",
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
    description: "Exploring new places and cultures inspires my creativity. I've visited 15+ countries and counting.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Cooking",
    icon: Utensils,
    description: "Cooking is my creative outlet outside of coding. I love experimenting with new recipes and cuisines from around the world.",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Community",
    icon: Users,
    description: "Active in local tech communities and meetups. I believe in giving back and helping others grow in their tech journey.",
    color: "from-teal-500 to-teal-600"
  }
]

const currentInterests = [
  {
    title: "Learning Spanish",
    description: "Currently taking Spanish lessons to better connect with the global developer community.",
    progress: 60
  },
  {
    title: "Contributing to Open Source",
    description: "Actively contributing to various open-source projects and maintaining a few of my own.",
    progress: 80
  },
  {
    title: "Building a Smart Home",
    description: "Experimenting with IoT devices and home automation using Raspberry Pi and various sensors.",
    progress: 45
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
            Beyond coding, I have a variety of interests that keep me inspired and balanced. 
            These activities help me bring fresh perspectives to my work.
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

        {/* Current Interests */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Currently Working On
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              These are the personal projects and learning goals I'm actively pursuing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentInterests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {interest.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-gray-900 dark:text-white font-medium">{interest.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${interest.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              "I believe that great developers are not just skilled technicians, but well-rounded individuals 
              who draw inspiration from diverse experiences. My interests outside of coding help me think 
              creatively, solve problems from different angles, and build more human-centered solutions. 
              Whether it's through travel, music, or community involvement, I'm constantly learning and 
              growing both personally and professionally."
            </p>
          </div>
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
              { number: "15+", label: "Countries Visited" },
              { number: "100+", label: "Books Read" },
              { number: "50+", label: "Coffee Shops Explored" },
              { number: "24/7", label: "Music Playing" }
            ].map((fact, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
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

