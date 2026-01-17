// About.jsx
import React, { useState } from "react";
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import ProfilePic from "../assets/personalPicture.jpeg";
import SocialLinks from "../Components/SocialLinks";
import { FaDownload, FaAward, FaBriefcase, FaArrowDown, FaAws } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("bio");

  const handleResumeDownload = () => {
    // Add your resume file path here
    const resumeUrl = "/Nayan_cv.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Nayan_cv.pdf";
    link.click();
  };

  const handleCertificateView = (certificateType) => {
    // Add your certificate image paths or URLs here
    if (certificateType === "aws") {
      window.open("aws_cloud_certificate.pdf", "_blank");
    } else if (certificateType === "nea") {
      window.open("nea_certificate.pdf", "_blank");
    }
  };

  const tabContent = {
    bio: (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2>About Me</h2>
        <p>
          I'm a Final Year Undergraduate student completing my last semester on
          Bachelor of Engineering in Information Technology (BEIT). As a passionate
          Java developer, I focus on creating robust and scalable applications.
        </p>

        <h3>My Approach</h3>
        <p className="philosophy">
          I believe in building solutions that prioritize user experience and solve
          real-world problems through clean, maintainable code.
        </p>

        <h3>Personal Interests</h3>
        <ul>
          <li>📚 Books reader and lifelong learner</li>
          <li>🎵 Music lover and football player</li>
          <li>🚀 Always eager to explore new technologies</li>
        </ul>
      </motion.div>
    ),
    skills: (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2>Technical Skills</h2>
        <p className="skills-intro">
          I specialize in full-stack development with expertise in modern web
          technologies and cloud services.
        </p>

        <div className="tech-overview">
          <div className="tech-category">
            <h4>Frontend Development</h4>
            <p>React JS, HTML5, CSS3, JavaScript</p>
          </div>
          <div className="tech-category">
            <h4>Backend Development</h4>
            <p>Java, Spring Boot, MySQL</p>
          </div>
          <div className="tech-category">
            <h4>Cloud & Tools</h4>
            <p>AWS Cloud Services</p>
          </div>
        </div>

        <div className="skills-redirect">
          <FaArrowDown className="arrow-icon" />
          <p>View my complete tech stack with detailed proficiency in the Skills section below</p>
        </div>
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2>Experience & Achievements</h2>

        <div className="experience-item">
          <div className="experience-header">
            <FaBriefcase className="experience-icon" />
            <div>
              <h3>Web Development Intern</h3>
              <h4>Nepal Electricity Authority</h4>
            </div>
          </div>
          <p className="experience-description">
            Contributed to building a modern, responsive website for Nepal
            Electricity Authority using contemporary web technologies and best
            practices.
          </p>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-grid">
            <div className="cert-card">
              <FaAws className="cert-icon aws-icon" />
              <h4>AWS Cloud Practitioner</h4>
              <button
                className="view-cert-btn"
                onClick={() => handleCertificateView("aws")}
              >
                <FaAward /> View Certificate
              </button>
            </div>
            <div className="cert-card">
              <FaBriefcase className="cert-icon nea-icon" />
              <h4>NEA Internship Certificate</h4>
              <button
                className="view-cert-btn"
                onClick={() => handleCertificateView("nea")}
              >
                <FaAward /> View Certificate
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Profile Picture + Social Links + Resume Button */}
        <div className="about-left">
          <div className="about-image">
            <img src={ProfilePic} alt="My Profile" />
          </div>
          <SocialLinks />
          <button className="resume-btn" onClick={handleResumeDownload}>
            <FaDownload /> Download Resume
          </button>
        </div>

        {/* Right: Tabbed Content */}
        <div className="about-right">
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === "bio" ? "active" : ""}`}
              onClick={() => setActiveTab("bio")}
            >
              Bio
            </button>
            <button
              className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
          </div>

          <div className="tab-content">
            <AnimatePresence mode="wait">
              {tabContent[activeTab]}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;