import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Falling Leaves - Light Mode */}
        <div className="absolute inset-0 dark:hidden">
          {[...Array(20)].map((_, i) => {
            const leafColors = [
              "fill-amber-500/60",
              "fill-orange-500/60", 
              "fill-red-500/60",
              "fill-yellow-500/60",
              "fill-amber-600/60",
              "fill-orange-600/60",
              "fill-red-600/60",
              "fill-yellow-600/60",
              "fill-amber-700/60",
              "fill-orange-700/60",
              "fill-red-700/60",
              "fill-yellow-700/60"
            ];
            
            const leafShapes = [
              // Maple leaf
              <svg key={i} className={`absolute animate-falling-leaves ${leafColors[Math.floor(Math.random() * leafColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${25 + Math.random() * 35}px`,
                height: `${25 + Math.random() * 35}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0C60 15 80 25 90 40C95 50 90 60 80 70C70 80 60 85 50 90C40 85 30 80 20 70C10 60 5 50 10 40C20 25 40 15 50 0Z" />
              </svg>,
              // Oak leaf
              <svg key={i} className={`absolute animate-falling-leaves ${leafColors[Math.floor(Math.random() * leafColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${25 + Math.random() * 35}px`,
                height: `${25 + Math.random() * 35}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0C60 10 75 20 85 35C90 45 85 55 75 65C65 75 55 80 50 85C45 80 35 75 25 65C15 55 10 45 15 35C25 20 40 10 50 0Z" />
              </svg>,
              // Simple rounded leaf
              <svg key={i} className={`absolute animate-falling-leaves ${leafColors[Math.floor(Math.random() * leafColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${25 + Math.random() * 35}px`,
                height: `${25 + Math.random() * 35}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0C70 20 80 40 70 60C60 80 40 90 50 100C60 90 80 80 90 60C100 40 90 20 70 0C60 10 50 0 50 0Z" />
              </svg>,
              // Elongated leaf
              <svg key={i} className={`absolute animate-falling-leaves ${leafColors[Math.floor(Math.random() * leafColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${25 + Math.random() * 35}px`,
                height: `${25 + Math.random() * 35}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0C65 15 80 30 85 50C80 70 65 85 50 100C35 85 20 70 15 50C20 30 35 15 50 0Z" />
              </svg>,
              // Heart-shaped leaf
              <svg key={i} className={`absolute animate-falling-leaves ${leafColors[Math.floor(Math.random() * leafColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${25 + Math.random() * 35}px`,
                height: `${25 + Math.random() * 35}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0C60 20 80 30 85 50C80 70 60 80 50 100C40 80 20 70 15 50C20 30 40 20 50 0Z" />
              </svg>
            ];
            
            return leafShapes[Math.floor(Math.random() * leafShapes.length)];
          })}
        </div>
        
        {/* Falling Snowflakes - Dark Mode */}
        <div className="absolute inset-0 hidden dark:block">
          {[...Array(25)].map((_, i) => {
            const snowColors = [
              "fill-blue-200/70",
              "fill-blue-100/80",
              "fill-cyan-200/70",
              "fill-slate-200/80",
              "fill-white/90",
              "fill-blue-50/90"
            ];
            
            const snowflakeShapes = [
              // Simple snowflake
              <svg key={i} className={`absolute animate-falling-snow ${snowColors[Math.floor(Math.random() * snowColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 12}px`,
                height: `${8 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 7}s`,
                animationDuration: `${6 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0L50 100M0 50L100 50M25 25L75 75M75 25L25 75" stroke="currentColor" strokeWidth="3" fill="none"/>
              </svg>,
              // Star snowflake
              <svg key={i} className={`absolute animate-falling-snow ${snowColors[Math.floor(Math.random() * snowColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 12}px`,
                height: `${8 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 7}s`,
                animationDuration: `${6 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" fill="currentColor"/>
              </svg>,
              // Crystal snowflake
              <svg key={i} className={`absolute animate-falling-snow ${snowColors[Math.floor(Math.random() * snowColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 12}px`,
                height: `${8 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 7}s`,
                animationDuration: `${6 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0L55 20L75 25L55 30L50 50L45 30L25 25L45 20L50 0Z" fill="currentColor"/>
                <path d="M50 50L55 70L75 75L55 80L50 100L45 80L25 75L45 70L50 50Z" fill="currentColor"/>
              </svg>,
              // Diamond snowflake
              <svg key={i} className={`absolute animate-falling-snow ${snowColors[Math.floor(Math.random() * snowColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 12}px`,
                height: `${8 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 7}s`,
                animationDuration: `${6 + Math.random() * 2}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0L100 50L50 100L0 50Z" fill="currentColor"/>
              </svg>
            ];
            
            return snowflakeShapes[Math.floor(Math.random() * snowflakeShapes.length)];
          })}
        </div>
        
        {/* Additional swaying leaves for light mode */}
        <div className="absolute inset-0 dark:hidden">
          {[...Array(15)].map((_, i) => {
            const swayColors = [
              "fill-amber-400/40",
              "fill-orange-400/40",
              "fill-red-400/40",
              "fill-yellow-400/40",
              "fill-amber-500/40",
              "fill-orange-500/40",
              "fill-red-500/40"
            ];
            
            const swayShapes = [
              // Maple leaf
              <svg key={`sway-${i}`} className={`absolute animate-leaf-sway ${swayColors[Math.floor(Math.random() * swayColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 25}px`,
                height: `${20 + Math.random() * 25}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 1.5}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0C60 15 80 25 90 40C95 50 90 60 80 70C70 80 60 85 50 90C40 85 30 80 20 70C10 60 5 50 10 40C20 25 40 15 50 0Z" />
              </svg>,
              // Simple rounded leaf
              <svg key={`sway-${i}`} className={`absolute animate-leaf-sway ${swayColors[Math.floor(Math.random() * swayColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 25}px`,
                height: `${20 + Math.random() * 25}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 1.5}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0C70 20 80 40 70 60C60 80 40 90 50 100C60 90 80 80 90 60C100 40 90 20 70 0C60 10 50 0 50 0Z" />
              </svg>,
              // Oak leaf
              <svg key={`sway-${i}`} className={`absolute animate-leaf-sway ${swayColors[Math.floor(Math.random() * swayColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 25}px`,
                height: `${20 + Math.random() * 25}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 1.5}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0C60 10 75 20 85 35C90 45 85 55 75 65C65 75 55 80 50 85C45 80 35 75 25 65C15 55 10 45 15 35C25 20 40 10 50 0Z" />
              </svg>
            ];
            
            return swayShapes[Math.floor(Math.random() * swayShapes.length)];
          })}
        </div>
        
        {/* Additional swaying snowflakes for dark mode */}
        <div className="absolute inset-0 hidden dark:block">
          {[...Array(20)].map((_, i) => {
            const swaySnowColors = [
              "fill-blue-100/50",
              "fill-cyan-100/50",
              "fill-slate-100/50",
              "fill-white/60"
            ];
            
            const swaySnowShapes = [
              // Simple cross
              <svg key={`sway-snow-${i}`} className={`absolute animate-snow-sway ${swaySnowColors[Math.floor(Math.random() * swaySnowColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${6 + Math.random() * 10}px`,
                height: `${6 + Math.random() * 10}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 1.5}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0L50 100M0 50L100 50" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>,
              // Small star
              <svg key={`sway-snow-${i}`} className={`absolute animate-snow-sway ${swaySnowColors[Math.floor(Math.random() * swaySnowColors.length)]}`} style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${6 + Math.random() * 10}px`,
                height: `${6 + Math.random() * 10}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 1.5}s`
              }} viewBox="0 0 100 100">
                <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" fill="currentColor"/>
              </svg>
            ];
            
            return swaySnowShapes[Math.floor(Math.random() * swaySnowShapes.length)];
          })}
        </div>
        
        {/* Gradient orbs - theme based */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 dark:from-blue-400/15 dark:to-cyan-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-400/20 to-yellow-400/20 dark:from-slate-400/15 dark:to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-400/15 to-amber-400/15 dark:from-cyan-400/10 dark:to-slate-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-purple-600 dark:text-purple-400">Hello, I'm</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              Daniel Yu
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
              Full Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            edit
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
