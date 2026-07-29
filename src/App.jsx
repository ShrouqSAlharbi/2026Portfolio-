import { useState } from 'react'
import Loader from './components/Loader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/hero/Hero.jsx'
import Journey from './components/Journey.jsx'
import Experience from './components/experience/Experience.jsx'
import Skills from './components/Skills.jsx'
import QASection from './components/qalab/QASection.jsx'
import Projects from './components/projects/Projects.jsx'
import QAProcess from './components/QAProcess.jsx'
import Certifications from './components/Certifications.jsx'
import ContactTerminal from './components/ContactTerminal.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Loader onDone={() => setLoading(false)} />
      {!loading && (
        <>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <Journey />
            <Experience />
            <Skills />
            <QASection />
            <Projects />
            <QAProcess />
            <Certifications />
            <ContactTerminal />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
