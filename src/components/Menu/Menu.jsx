import React from "react";
import "./menu.css";
// Router
import { NavLink } from "components/Nav/NavLink/NavLink";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink
          text="About"
          path="about"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Skills"
          path="workedOn"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Projects"
          path="projects"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Contact"
          path="contact"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
  );
};

export default Menu;