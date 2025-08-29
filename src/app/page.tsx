import {
  Header,
  Hero,
  Projects,
  Experience,
  Skills,
  Interests,
  Contact,
  Footer
} from "@/components/site"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
