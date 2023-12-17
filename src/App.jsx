import React, { useEffect, useState } from "react"

// Components
import Nav from "components/Nav/Nav"
import Home from "components/Home/Home"
import Menu from "components/Menu/Menu"
import Contact from "components/Contact/Contact"
import Services from "components/Services/Services"
import Footer from "components/Footer/Footer"

// Animation
import Aos from "aos"
import "aos/dist/aos.css"
import About from "components/About/About"
import Projects from "components/Projects/Projects"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 })
  }, [])

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Services />
       <Projects/> 
      <Contact />
      <Footer />
    </div>
  )
}

export default App
