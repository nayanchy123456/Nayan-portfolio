// Project.jsx
import React from "react";
import "../Pages/Projects.css";

const Project = () => {
  const projects = [
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourdemo.com/task-manager",
    },
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourdemo.com/task-manager",
    },
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourdemo.com/task-manager",
    },
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourdemo.com/task-manager",
    },
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourdemo.com/task-manager",
    },
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourdemo.com/task-manager",
    },
    {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourdemo.com/task-manager",
    },
     {
      title: "Task Manager App",
      description: "A full-stack app to create, update, and track tasks with automatic overdue detection.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourdemo.com/task-manager",
    },
    // Add more projects here
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
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
