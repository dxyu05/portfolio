import Image from "next/image"

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
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative lg:col-span-2">
            <div className="relative z-10">
              {/* Main Photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ height: '400px' }}>
                <Image
                  src="/image.jpg" 
                  alt="Daniel Yu" 
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
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
                Hello! I&apos;m Daniel Yu, a junior at the University of Maryland, College Park studying Computer Science and Applied Mathematics.
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
