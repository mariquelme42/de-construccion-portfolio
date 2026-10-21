import { About } from "@/components/About"
import { Approach } from "@/components/Approach"
import { Capabilities } from "@/components/Capabilities"
import { Contact, Footer } from "@/components/Contact"
import { Header } from "@/components/Header"
import { Hero, Manifesto } from "@/components/Hero"
import { Projects } from "@/components/Projects"

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Manifesto />
        <Projects />
        <Approach />
        <About />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
