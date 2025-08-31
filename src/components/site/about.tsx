

export function About() {
  return (
    <section id="about" className="py-24 bg-violet-50 dark:bg-violet-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo Section */}
          <div className="relative lg:col-span-2">
            <div className="relative z-10">
              {/* Main Photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ height: '400px' }}>
                <div className="h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  {/* Placeholder for photo - replace with actual image */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">DY</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Photo placeholder - add your photo here
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl" />
            </div>
          </div>

          {/* Blurb Section */}
          <div className="space-y-6 lg:col-span-3">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Hello! I'm Daniel Yu, a junior at the University of Maryland, College Park studying Computer Science and Applied Mathematics.
                This past summer I had the opportunity to intern at Workday as a part of their Enterprise Identity Team, focusing on 
                Identity and Access Management. At school, I am involved with a club called Hack4Impact, where I help build software for non-profits.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Outside of my academic and career pursuits, I love keeping up with the latest advancements in technology, and working on personal projects
                where I can hone my skills and apply them to topics I like. In my free time,
                I love playing pickleball and going climbing. I also love following baseball and am a huge Orioles fan!
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Feel free to reach out if you have any questions or just want to say hi! Cheers!
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
