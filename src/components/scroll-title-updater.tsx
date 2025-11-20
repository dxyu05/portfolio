"use client"

import { useEffect } from "react"

const SECTION_TITLES: Record<string, string> = {
  home: "Home",
  about: "About",
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
  interests: "Interests",
  contact: "Contact",
}

export function ScrollTitleUpdater() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const baseTitle = document.title || "Portfolio"
    let activeId: string | null = null

    const sections = Object.keys(SECTION_TITLES)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the entry with the largest intersection ratio that is intersecting
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = visibleEntries[0]
        if (!top) return

        const id = top.target.id
        if (id && id !== activeId) {
          activeId = id
          const sectionTitle = SECTION_TITLES[id] ?? ""
          document.title = sectionTitle ? `${baseTitle} — ${sectionTitle}` : baseTitle
          // Update hash without scrolling
          history.replaceState(null, "", `#${id}`)
        }
      },
      {
        // Trigger when section is at least 35% visible
        threshold: [0.35, 0.5, 0.75, 1],
        rootMargin: "0px 0px -40% 0px",
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return null
}


