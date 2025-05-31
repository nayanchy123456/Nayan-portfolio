import React from "react";
import "./Home.css";
import { Typewriter as SimpleTypewriter } from "react-simple-typewriter";
import Typewriter from 'typewriter-effect';
import ProfilePic from "../assets/profile.JPEG";
import SocialLinks from "../Components/SocialLinks";

const Home = ({ darkMode }) => {
  return (
    <section id="home" className={`home ${darkMode ? "dark" : "light"}`}>
      <div className="home-container">
        <div className="home-left">
          <div className="image-wrapper">
            <div className="image-backdrop"></div>
            <img 
              src={ProfilePic} 
              alt="Nayan Chaudhary" 
              className="profile-pic"
              loading="lazy"
            />
            <div className="image-border"></div>
            <div className="image-glow"></div>
            <div className="image-dots"></div>
          </div>
        </div>

        <div className="home-right">
          <h1 className="greeting">
            Hi, I'm{" "}
            <span className="highlight">
              <Typewriter
                options={{
                  strings: ['Nayan Chaudhary'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  cursor: '|',
                }}
              />
            </span>
          </h1>

          <h2 className="title">
            <SimpleTypewriter
              words={[
                "Frontend Developer",
                "React Specialist",
                "UI/UX Designer",
                "Clean Code Advocate",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="intro-text">
            I build exceptional digital experiences with modern web technologies.
            Currently focused on creating accessible, human-centered interfaces.
          </p>

          <div className="button-group">
            <a href="#projects" className="btn primary-btn">
              <span>View Projects</span>
              <div className="hover-effect"></div>
            </a>
            <a href="#contact" className="btn secondary-btn">
              <span>Contact Me</span>
              <div className="hover-effect"></div>
            </a>
          </div>

          <SocialLinks  darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Home;