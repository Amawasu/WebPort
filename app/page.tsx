import Profile from "@/components/profile"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Languages from "@/components/languages"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Profile />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Languages />
      <Certificates />
      <Contact />
    </main>
  )
}
