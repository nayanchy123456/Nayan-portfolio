import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import ProfilePic from "../assets/profile.JPEG";
import SocialLinks from "../Components/SocialLinks";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Profile Picture + Social Links */}
        <div className="about-left">
          <div className="about-image">
            <img src={ProfilePic} alt="My Profile" />
          </div>
          <SocialLinks />
        </div>

        {/* Right: About Text */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate frontend developer with a love for clean, responsive UI.
            I enjoy building web apps using modern tech like React JS and Spring Boot.
          </p>

          <h3>Personal Interests</h3>
          <ul>
            <li>📚 Avid reader and lifelong learner</li>
            <li>🎵 Music lover</li>
            <li>🌱 Enthusiast of sustainable tech and green solutions</li>
            <li>🚀 Always eager to explore new technologies</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
