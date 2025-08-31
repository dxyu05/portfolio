import {
  Header,
  Hero,
  About,
  Projects,
  Experience,
  Skills,
  Interests,
  Contact
} from "@/components/site"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </div>
  )
}
