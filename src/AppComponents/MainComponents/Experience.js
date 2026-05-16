import React from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Full-Stack Development",
    company: "Tata Consultancy Services",
    date: "Jan 2025 - Present",
    bullets: [
      "Designed and built scalable system architecture for 6 features across APIs, UI, and services, reducing manual workflow effort by 30%",
      "Remediated 100+ vulnerabilities and reduced SonarQube-reported issues by 90% via structured refactoring",
      "Deployed AI-assisted code analysis pipelines, increasing maintainability scores by 20%",
      "Guided 2 junior developers over 10 sprint cycles, improving delivery consistency and code standards",
      "Designed CI/CD architecture integrating AI-based analysis pipelines, reducing defect leakage by 20%",
    ],
  },
  {
    role: "Web Development",
    company: "Aventra Systems",
    date: "Oct 2024 - Jan 2025",
    bullets: [
      "Architected a scalable multi-tenant system handling 100+ client workflows with 35% improved performance",
      "Delivered onboarding flow reducing requirement gathering time by 60%",
      "Streamlined onboarding process cutting processing time by 90%",
      "Partnered with 5+ stakeholders delivering 10+ feature updates",
    ],
  },
  {
    role: "Web Development",
    company: "REVY Environmental Solutions Pvt. Ltd",
    date: "May 2023 - Oct 2024",
    bullets: [
      "Delivered a scalable, responsive web platform tailored for enterprise client workflows",
      "Architected a custom onboarding pipeline using dynamic questionnaires for requirement analysis",
      "Implemented rule-based recommendation engine mapping client inputs to products/services",
      "Automated end-to-end onboarding, cutting processing time by ~90% with zero manual effort",
      "Collaborated in an agile setup, refining deliverables through regular stakeholder reviews",
      "Executed SEO enhancements improving crawlability and search ranking performance",
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
