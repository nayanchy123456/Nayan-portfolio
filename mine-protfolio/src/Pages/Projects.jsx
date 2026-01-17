// Project.jsx
import React from "react";
import "../Pages/Projects.css";

const Project = () => {
  const projects = [
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Java", "Spring Boot", "MySQL"],
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
      description: "This is Group project. Online Voting System is a web application for conducting online voting to select class/college representatives. Developed responsive frontend using HTML, CSS, and JavaScript, and integrated with Django backend APIs for authentication, voting workflows, and result display. ",
      tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "db.sqlite3"],
      github: "https://github.com/anishkarn33/Online_voting_sysytem",
    },
    {
      title: "E-Learning",
      description: "This is group project. E-learning is a web application which provides facilities like accessing notes, chatting with the tutors, watching the recorded lectures. In this project i have developed responsicve frontend using react, and integrated with Djando APIs.",
      tech: ["React", "Python", "Django", "postgresql"],
      github: "",
    },

    {
      title: "Community Ev Station Platform",
      description: "Implemented JWT authentication, role-based dashboards, charger search, Google Maps integration, and slot booking. This Project currently in progress with ongoing feature enhancements.",
      tech: ["React", "Java", "Spring Boot", "MySQL"],
      github: [
        { label: "Frontend", link: "https://github.com/nayanchy123456/ev-station-frontend-new" },
        { label: "Backend", link: "https://github.com/nayanchy123456/ev-station-backend" },
      ],
    }

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
              {Array.isArray(project.github) ? (
                project.github.map((repo, idx) => (
                  <a key={idx} href={repo.link} target="_blank" rel="noopener noreferrer">
                    {repo.label}
                  </a>
                ))
              ) : (
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
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
