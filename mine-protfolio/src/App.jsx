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

  useEffect(() => {
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("light-mode", !newMode);
      document.body.classList.toggle("dark-mode", newMode);
      return newMode;
    });
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <UnderwaterBubbleTrail/>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content">
        <section id="home">
          <Home darkMode={darkMode} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills/>
        </section>
         <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
    </div>
  );
}

export default App;
