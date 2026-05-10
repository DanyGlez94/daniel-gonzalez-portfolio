import SiteShell from '@/components/site-shell'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import FeaturedWork from '@/components/featured-work'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="relative">
      <SiteShell />
      <Hero />
      <About />
      <Experience />
      <FeaturedWork />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
