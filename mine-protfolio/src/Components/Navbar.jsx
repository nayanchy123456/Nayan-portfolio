import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  // Initialize state with localStorage value or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Apply the theme class to body
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
    // Update all components by setting data-theme attribute
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
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
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <span role="img" aria-label="Sun">☀️</span>
          ) : (
            <span role="img" aria-label="Moon">🌙</span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;