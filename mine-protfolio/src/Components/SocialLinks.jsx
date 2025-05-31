import React from "react";
import "./SocialLinks.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/nayanchy123456" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/nayan-chaudhary-99b126317/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/nayan._.chaudhary/" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;
