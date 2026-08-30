"use client";

import { useEffect, useState, useMemo } from "react";

const StarField = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full opacity-0 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const name = "Daniel Yu";

  useEffect(() => {
    const handleType = () => {
      const fullText = name;
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-black text-white selection:bg-primary/30">
      <StarField />

      <div className="max-w-2xl w-full space-y-8 relative z-10">
        <section id="about" className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight min-h-[1.2em]">
            <span className="text-primary drop-shadow-[0_0_15px_rgba(230,210,255,0.4)]">{text}</span>
            <span className="animate-pulse font-light ml-1 text-primary">|</span>
          </h1>

          <div className="space-y-4 text-xl leading-relaxed text-zinc-400">
            <p>
              I am a Computer Science and Applied Mathematics student and aspiring software engineer
              at the University of Maryland, with interests in distributed systems and cybersecurity.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium tracking-widest pt-6">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-yu05/" },
              { label: "Email", href: "mailto:dxyy05@gmail.com" },
              { label: "GitHub", href: "https://github.com/dxyu05" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-500 hover:text-primary transition-all duration-300 uppercase relative group"
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
