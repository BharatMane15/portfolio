import React from "react";
import "./About.css";
import { Heading } from "components/Heading/Heading";
const About = () => {
  const myProfileData = {
    name: {
      fname: "Bharat",
      sname: "Mane",
    },
    place: {
      hometown: "Kolhapur, India",
      currently: "Bangalore, Karnataka",
    },
    skills: [
      "React Js, HTML, CSS",
      "Node js, Express JS, Electron js ",
      "MUI, Bootstrap, Tailwind",
      "github, Gitlab, Docker",
    ],

    interest: ["Video Games", "Movies", "Traveling"],
  };
  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="< About />"
      id="about"
    >
      <Heading text="< About />" style={{ padding: "3rem" }} />
      <div className="mac-window-container">
        <div className="mac-window">
          <div className="mac-window-header">
            <div
              className="mac-window-header-dot"
              style={{ backgroundColor: "#ff5f57" }}
            ></div>
            <div
              className="mac-window-header-dot"
              style={{ backgroundColor: "#ffbd2e" }}
            ></div>
            <div
              className="mac-window-header-dot"
              style={{ backgroundColor: "#28ca42" }}
            ></div>
          </div>
          <div className="mac-window-content" style={{ padding: "3vh" }}>
            <pre>{JSON.stringify(myProfileData, null, 2)}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
