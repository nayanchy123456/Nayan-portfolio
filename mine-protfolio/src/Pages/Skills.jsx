import React from "react";
import "./Skills.css";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React JS"},
  { icon: <FaJava />, name: "Java"},
  { icon: <SiSpring />, name: "Spring Boot"},
  { icon: <FaHtml5 />, name: "HTML"},
  { icon: <FaCss3Alt />, name: "CSS"},
  { icon: <FaJs />, name: "JavaScript"},
  { icon: <FaDatabase />, name: "MySQL" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Tech Stacks</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
