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
    <>
      {/* Navbar (<header>) and footer sit outside <main> so they are exposed as
          the page's banner and contentinfo landmarks. */}
      <SiteShell />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <FeaturedWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
