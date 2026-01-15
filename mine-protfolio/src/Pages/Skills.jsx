import React from "react";
import "./Skills.css";
import { 
  FaReact, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";
import { 
  SiSpring, 
  SiVercel, 
  SiNetlify,
  SiPostman
} from "react-icons/si";

const Skills = () => {
  const techStack = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaJava />, name: "Java", color: "#f89820" },
    { icon: <SiSpring />, name: "Spring Boot", color: "#6DB33F" },
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaDatabase />, name: "MySQL", color: "#4479A1" },
  ];

  const tools = [
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <FaGithub />, name: "GitHub", color: "#FFFFFF" },
    { icon: <FaCode />, name: "VS Code", color: "#007ACC" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  ];

  const cloudDeployment = [
    { icon: <FaAws />, name: "AWS", color: "#FF9900" },
    { icon: <SiVercel />, name: "Vercel", color: "#FFFFFF" },
    { icon: <SiNetlify />, name: "Netlify", color: "#00C7B7" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-description">
          A comprehensive toolkit of modern technologies and frameworks that I leverage 
          to build robust, scalable, and user-centric applications.
        </p>
        
        <div className="skills-grid-wrapper">
          {/* Tech Stack */}
          <div className="skill-category">
            <div className="category-header">
              <h3 className="category-title">Tech Stack</h3>
              <div className="title-underline"></div>
            </div>
            <div className="skills-cards">
              {techStack.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category">
            <div className="category-header">
              <h3 className="category-title">Tools</h3>
              <div className="title-underline"></div>
            </div>
            <div className="skills-cards">
              {tools.map((tool, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon" style={{ color: tool.color }}>
                    {tool.icon}
                  </div>
                  <span className="skill-label">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & Deployment */}
          <div className="skill-category">
            <div className="category-header">
              <h3 className="category-title">Cloud & Deployment</h3>
              <div className="title-underline"></div>
            </div>
            <div className="skills-cards">
              {cloudDeployment.map((item, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <span className="skill-label">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;