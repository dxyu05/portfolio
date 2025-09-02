"use client"

import { ChevronDown } from "lucide-react"
import { useState, useEffect, useCallback, useMemo } from "react"

interface SnowflakeProps {
  color: string;
  style: React.CSSProperties;
}

interface LeafProps {
  color: string;
  style: React.CSSProperties;
}

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const typingTexts = useMemo(() => [
    "Developer",
    "Engineer",
    "Student", 
    "Pickleballer",
    "Dog Lover",
    "Music Lover",
    "Gamer",
  ], [])

  const updateText = useCallback(() => {
    const currentFullText = typingTexts[currentTextIndex]
    
    if (!isDeleting) {
      if (currentText.length < currentFullText.length) {
        setCurrentText(currentFullText.slice(0, currentText.length + 1))
      } else {
        setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, currentText.length - 1))
      } else {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length)
      }
    }
  }, [currentText, isDeleting, currentTextIndex, typingTexts])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const timeout = setTimeout(() => {
      updateText()
    }, isDeleting ? 100 : 200)
    
    return () => clearTimeout(timeout)
  }, [updateText, isDeleting, isClient])

  // Memoize all the animated elements to prevent re-randomization
  const fallingLeaves = useMemo(() => {
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
      (props: LeafProps) => (
        <svg className={`absolute animate-falling-leaves ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0C60 15 80 25 90 40C95 50 90 60 80 70C70 80 60 85 50 90C40 85 30 80 20 70C10 60 5 50 10 40C20 25 40 15 50 0Z" />
        </svg>
      ),
      // Oak leaf
      (props: LeafProps) => (
        <svg className={`absolute animate-falling-leaves ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0C60 10 75 20 85 35C90 45 85 55 75 65C65 75 55 80 50 85C45 80 35 75 25 65C15 55 10 45 15 35C25 20 40 10 50 0Z" />
        </svg>
      ),
      // Simple rounded leaf
      (props: LeafProps) => (
        <svg className={`absolute animate-falling-leaves ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0C70 20 80 40 70 60C60 80 40 90 50 100C60 90 80 80 90 60C100 40 90 20 70 0C60 10 50 0 50 0Z" />
        </svg>
      ),
      // Elongated leaf
      (props: LeafProps) => (
        <svg className={`absolute animate-falling-leaves ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0C65 15 80 30 85 50C80 70 65 85 50 100C35 85 20 70 15 50C20 30 35 15 50 0Z" />
        </svg>
      ),
      // Heart-shaped leaf
      (props: LeafProps) => (
        <svg className={`absolute animate-falling-leaves ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0C60 20 80 30 85 50C80 70 60 80 50 100C40 80 20 70 15 50C20 30 40 20 50 0Z" />
        </svg>
      )
    ];

    return [...Array(20)].map((_, i) => {
      const LeafComponent = leafShapes[Math.floor(Math.random() * leafShapes.length)];
      const color = leafColors[Math.floor(Math.random() * leafColors.length)];
      const style = {
        left: `${Math.random() * 100}%`,
        width: `${25 + Math.random() * 35}px`,
        height: `${25 + Math.random() * 35}px`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${5 + Math.random() * 2}s`
      };
      
      return <LeafComponent key={i} color={color} style={style} />;
    });
  }, []);

  const fallingSnowflakes = useMemo(() => {
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
      (props: SnowflakeProps) => (
        <svg className={`absolute animate-falling-snow ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0L50 100M0 50L100 50M25 25L75 75M75 25L25 75" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      ),
      // Star snowflake
      (props: SnowflakeProps) => (
        <svg className={`absolute animate-falling-snow ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" fill="currentColor"/>
        </svg>
      ),
      // Crystal snowflake
      (props: SnowflakeProps) => (
        <svg className={`absolute animate-falling-snow ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0L55 20L75 25L55 30L50 50L45 30L25 25L45 20L50 0Z" fill="currentColor"/>
          <path d="M50 50L55 70L75 75L55 80L50 100L45 80L25 75L45 70L50 50Z" fill="currentColor"/>
        </svg>
      ),
      // Diamond snowflake
      (props: SnowflakeProps) => (
        <svg className={`absolute animate-falling-snow ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0L100 50L50 100L0 50Z" fill="currentColor"/>
        </svg>
      )
    ];

    return [...Array(25)].map((_, i) => {
      const SnowflakeComponent = snowflakeShapes[Math.floor(Math.random() * snowflakeShapes.length)];
      const color = snowColors[Math.floor(Math.random() * snowColors.length)];
      const style = {
        left: `${Math.random() * 100}%`,
        width: `${8 + Math.random() * 12}px`,
        height: `${8 + Math.random() * 12}px`,
        animationDelay: `${Math.random() * 7}s`,
        animationDuration: `${6 + Math.random() * 2}s`
      };
      
      return <SnowflakeComponent key={i} color={color} style={style} />;
    });
  }, []);

  const swayingLeaves = useMemo(() => {
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
      (props: LeafProps) => (
        <svg className={`absolute animate-leaf-sway ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0C60 15 80 25 90 40C95 50 90 60 80 70C70 80 60 85 50 90C40 85 30 80 20 70C10 60 5 50 10 40C20 25 40 15 50 0Z" />
        </svg>
      ),
      // Simple rounded leaf
      (props: LeafProps) => (
        <svg className={`absolute animate-leaf-sway ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0C70 20 80 40 70 60C60 80 40 90 50 100C60 90 80 80 90 60C100 40 90 20 70 0C60 10 50 0 50 0Z" />
        </svg>
      ),
      // Oak leaf
      (props: LeafProps) => (
        <svg className={`absolute animate-leaf-sway ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0C60 10 75 20 85 35C90 45 85 55 75 65C65 75 55 80 50 85C45 80 35 75 25 65C15 55 10 45 15 35C25 20 40 10 50 0Z" />
        </svg>
      )
    ];

    return [...Array(15)].map((_, i) => {
      const LeafComponent = swayShapes[Math.floor(Math.random() * swayShapes.length)];
      const color = swayColors[Math.floor(Math.random() * swayColors.length)];
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${20 + Math.random() * 25}px`,
        height: `${20 + Math.random() * 25}px`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${1.5 + Math.random() * 1.5}s`
      };
      
      return <LeafComponent key={`sway-${i}`} color={color} style={style} />;
    });
  }, []);

  const swayingSnowflakes = useMemo(() => {
    const swaySnowColors = [
      "fill-blue-100/50",
      "fill-cyan-100/50",
      "fill-slate-100/50",
      "fill-white/60"
    ];
    
    const swaySnowShapes = [
      // Simple cross
      (props: SnowflakeProps) => (
        <svg className={`absolute animate-snow-sway ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0L50 100M0 50L100 50" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      // Small star
      (props: SnowflakeProps) => (
        <svg className={`absolute animate-snow-sway ${props.color}`} style={props.style} viewBox="0 0 100 100">
          <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" fill="currentColor"/>
        </svg>
      )
    ];

    return [...Array(20)].map((_, i) => {
      const SnowflakeComponent = swaySnowShapes[Math.floor(Math.random() * swaySnowShapes.length)];
      const color = swaySnowColors[Math.floor(Math.random() * swaySnowColors.length)];
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${6 + Math.random() * 10}px`,
        height: `${6 + Math.random() * 10}px`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 1.5}s`
      };
      
      return <SnowflakeComponent key={`sway-snow-${i}`} color={color} style={style} />;
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background */}
      {isClient && (
        <div className="absolute inset-0">
          {/* Falling Leaves - Light Mode */}
          <div className="absolute inset-0 dark:hidden">
            {fallingLeaves}
          </div>
          
          {/* Falling Snowflakes - Dark Mode */}
          <div className="absolute inset-0 hidden dark:block">
            {fallingSnowflakes}
          </div>
          
          {/* Additional swaying leaves for light mode */}
          <div className="absolute inset-0 dark:hidden">
            {swayingLeaves}
          </div>
          
          {/* Additional swaying snowflakes for dark mode */}
          <div className="absolute inset-0 hidden dark:block">
            {swayingSnowflakes}
          </div>
          
          {/* Gradient orbs - theme based */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 dark:from-blue-400/15 dark:to-cyan-400/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-400/20 to-yellow-400/20 dark:from-slate-400/15 dark:to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-400/15 to-amber-400/15 dark:from-cyan-400/10 dark:to-slate-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-blue-600 dark:text-amber-400">Hi! I&apos;m, </span>
              <span className="text-slate-700 dark:text-orange-300">Daniel Yu</span>
            </h1>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-cyan-600 dark:text-red-400 tracking-tight min-h-[1.2em]">
              {currentText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Scroll Down Arrow */}
          <div className="flex justify-center mt-8">
            <a href="#about" className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" />
            </a>
          </div>


        </div>
      </div>
    </section>
  )
}
