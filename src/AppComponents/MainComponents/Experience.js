import React from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Full-Stack and Gen AI Developer",
    company: "Tata Consultancy Services",
    date: "Jan 2025 – Present",
    bullets: [
      "Led delivery of 6 enterprise features across Angular and Spring Boot, reducing manual effort by 30%",
      "Optimized Redis caching and PostgreSQL query strategies to improve application responsiveness",
      "Developed scalable REST APIs and backend services supporting enterprise workflow automation",
      "Built Python-based AI automation pipelines for code analysis, improving maintainability scores by 20%",
      "Containerized applications with Docker and streamlined deployment workflows across environments",
      "Remediated 100+ vulnerabilities through structured refactoring, reducing SonarQube issues by 90%",
      "Mentored 2 developers on engineering best practices, code quality, and sprint delivery processes",
    ],
  },
  {
    role: "Full-Stack and Gen AI Developer",
    company: "Apex Marketing",
    date: "Aug 2024 – Jan 2025",
    bullets: [
      "Engineered scalable React and Node.js applications serving 5K+ monthly active users",
      "Implemented RESTful APIs with authentication (JWT/OAuth), rate limiting, and role-based access control (RBAC)",
      "Enhanced MongoDB schemas and query performance, reducing API response times by 40%",
      "Integrated LLM-powered AI services with prompt optimization and intelligent response caching",
      "Automated deployments using Docker, AWS, and CI/CD pipelines across multiple environments",
      "Established centralized logging, validation, and error-handling mechanisms for backend services",
      "Collaborated across 10+ client projects to deliver scalable full-stack solutions in Agile teams",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Vandhana International Pvt. Ltd.",
    date: "May 2024 – Aug 2024",
    bullets: [
      "Created WCAG-compliant applications improving accessibility and mobile usability by 40%",
      "Delivered Django and MySQL services supporting workflow automation and centralized operations",
      "Designed configurable scoring engines evaluating systems across 10+ operational parameters",
      "Implemented reusable APIs and modular frontend components to improve maintainability",
      "Streamlined database interactions and backend workflows to enhance platform performance",
      "Developed HRMS modules supporting attendance and employee management for 35+ active users",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "REVY Environmental Solutions Pvt. Ltd.",
    date: "Jun 2023 – May 2024",
    bullets: [
      "Architected a multi-tenant Angular and FastAPI platform supporting 100+ client workflows",
      "Defined scalable onboarding workflows reducing requirement gathering effort by 60%",
      "Automated operational pipelines, decreasing onboarding processing time by 90%",
      "Built reusable API-driven frontend modules improving development velocity and scalability",
      "Optimized PostgreSQL schemas and backend services to improve platform performance",
      "Established deployment-ready application architecture supporting future growth requirements",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experiences-section" style={{ padding: "6% 10% 0 10%" }}>
      <h2 className="text-primary">Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className={styles.experienceItem}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold" }}>{exp.role} | {exp.company}</div>
            <span style={{ fontStyle: "italic", color: "#666" }}>{exp.date}</span>
          </div>
          <ul style={{ marginTop: "0.5rem" }}>
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
