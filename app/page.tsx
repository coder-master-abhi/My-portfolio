import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import GithubContribution from "@/components/github-contribution"
import LinkedInProfile from "@/components/linkedin-profile"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <GithubContribution />
      <LinkedInProfile />
      <Contact />
      <Footer />
    </main>
  )
}
