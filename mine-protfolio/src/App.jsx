import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./App.css";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import UnderwaterBubbleTrail from "./Components/UnderwaterBubbleTrail";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Update body class on theme change
  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, [darkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
      <div className={`app ${darkMode ? "dark" : "light"}`}>
        <UnderwaterBubbleTrail />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="main-content">
          <section id="home">
            <Home darkMode={darkMode} />
          </section>
          <section id="about">
            <About darkMode={darkMode} />
          </section>
          <section id="skills">
            <Skills darkMode={darkMode} />
          </section>
          <section id="projects">
            <Projects darkMode={darkMode} />
          </section>
          <section id="contact">
            <Contact darkMode={darkMode} />
          </section>
        </main>
      </div>
  );
}

export default App;
