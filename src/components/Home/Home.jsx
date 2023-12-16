import React from "react"
import Typed from "react-typed"

// SVG
import man from "images/dev.svg"

// Animation
import { Link } from "react-scroll"
import { motion } from "framer-motion"

// CSS
import "./home.css"
import Button from "components/Button/Button"

import ProfileImg from '../../images/profile.jpeg'

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
}

const Home = () => {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <img style={{width:'15vh',height:'15vh',borderRadius:'50%', objectFit: 'cover',}} src={ProfileImg} alt="profile" />
        <h2>Peace be upon you !</h2>
        <h1>I’m Bharat</h1>
        <p style={{ fontSize: "1.2rem ", fontWeight: "600" }}>
          I am a
          <span style={{ marginLeft: "8px" }}>
            <Typed
              strings={[
                "Fullstack Engineer",
                "React Js Developer",
              ]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
          </span>
        </p>
        <Link
          // className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          <Button text={"See my work"} type="submit" />
        </Link>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={man} alt="Developer" />
      </motion.div>
      
    </section>
  )
}

export default Home
