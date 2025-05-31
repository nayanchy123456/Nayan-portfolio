import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark-mode", newMode);
      document.body.classList.toggle("light-mode", !newMode);
      return newMode;
    });
  };

  return (
    <header>
      <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
        <div className="logo">
          <span className="white">Na</span>
          <span className="red">y</span>
          <span className="white">an</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          onClick={toggleDarkMode}
          className="mode-toggle-btn"
          aria-label="Toggle dark/light mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
