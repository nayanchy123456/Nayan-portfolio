// Project.jsx
import React from "react";
import "../Pages/Projects.css";

const Project = () => {
  const projects = [
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Java","Spring Boot", "MySQL"],
      github: "https://github.com/nayanchy123456/Task-Manager",
    },
    {
      title: "BMI Calculator",
      description: "A simple web app that calculates Body Mass Index (BMI) based on user input for height and weight, and categorizes the result (e.g., underweight, normal, overweight, or obese).",
      tech: ["JavaScript"],
      github: "https://github.com/nayanchy123456/BMI-Calculator",
    },
    {
      title: "Tic Tac Toe",
      description: "A classic two-player Tic Tac Toe game built using JavaScript, HTML, and CSS. Players take turns marking X or O on a 3×3 grid until one wins or the game ends in a draw.",
      tech: ["JavaScript"],
      github: "https://github.com/nayanchy123456/Tic-Tac-Toe",
      demo: "https://candid-sable-45b67d.netlify.app/"
    },
    {
      title: "Password Generator App",
      description: "A web-based tool built with JavaScript that generates strong, random passwords based on user-selected criteria such as length, uppercase, lowercase, numbers, and special characters.",
      tech: ["JavaScript"],
      github: "https://github.com/nayanchy123456/Password-Generator-App",
      demo: "https://precious-tanuki-9e1937.netlify.app/"
    },
    {
      title: "Weather Application",
      description: "A React-based web app that fetches real-time weather data using a public API. Users can search for any city to view current temperature, weather conditions, humidity, wind speed, and more in a clean, responsive UI.",
      tech: ["React"],
      github: "https://github.com/nayanchy123456/weatherApplication",
      demo: "https://weather-application-upba.vercel.app/"
    },
    {
      title: "Note Taker",
      description: "A full-stack web application using Java, Servlets, JSP, and MySQL that allows users to create, edit, and delete personal notes. Each note is stored securely in a database and can be managed through a simple, user-friendly interface.",
      tech: ["Java", "Servlet", "JSP", "MySQL"],
      github: "https://github.com/nayanchy123456/TODO-Project",
    },

    {
      title: "Online Voting System",
      description: "This is Group project. Online Voting System is a web application which was designed using tech stacks like Html,css,js in frontend and Python(Django) in backend with db.sqlite3 as database. This project was design to conduct the online voting to select the Class Representatives of the college or class.In this project i have contributed in frontend part only(HTML,CSS,JS) ",
      tech: ["Python","Django", "HTML", "CSS", "JS","db.sqlite3"],
      github: "https://github.com/anishkarn33/Online_voting_sysytem",
    },
    {
      title: "E-Learning",
      description: "This is group project. E-learning is a web application which was designed using tech stacks like React Js in frontend and Python(Django) in backend with postgresql as database. In this project i have contributed to the frontend part only.",
      tech: ["React", "Python", "Django", "postgresql"],

    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-title-wrapper">
        <h2 className="projects-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-item">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
