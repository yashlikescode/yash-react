import React from "react";

const experiences = [
  {
    role: "Full-Stack Development",
    company: "Tata Consultancy Services",
    date: "Jan 2025 - Present",
    bullets: [
      "Progressed from Angular developer to full-stack role across Angular and Spring Boot",
      "Led multiple Angular and Spring Boot version upgrades to improve stability and maintainability",
      "Delivered end-to-end features covering business logic, UI/UX styling, and core front-end functionality",
      "Built an Electron-based internal tool to streamline deployment workflows and eliminate repetitive tasks",
      "Refactored the application to meet accessibility standards, transforming a previously inaccessible platform",
      "Eliminated ~90% of SonarQube issues through systematic code quality and technical debt reduction",
    ],
    tech: "Angular, Python, SpringBoot, Java, TypeScript, JavaScript, Postgres, Electron",
  },
  {
    role: "Web Development",
    company: "Aventra Systems",
    date: "Oct 2024 - Jan 2025",
    bullets: [
      "Built a mobile-first, WCAG-aligned website to support early-stage startup growth",
      "Designed and implemented a digital efficiency scoring model to assess client systems",
      "Developed HRMS status–driven recommendation logic to guide operational improvements",
      "Iterated features using agile sprints with continuous client feedback loops",
      "Optimized on-page SEO structure and performance to boost organic visibility",
    ],
    tech: "JavaScript, HTML, Tailwind, CSS",
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
    tech: "React.Js, HTML, CSS, Bootstrap, JavaScript",
  },
];

export const Experience = () => {
  return (
    <section id="experiences-section" style={{ padding: "6% 10%" }}>
      <h2 className="text-primary">Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="experience-item" style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h3 style={{ margin: 0 }}>{exp.role} | {exp.company}</h3>
            <span style={{ fontStyle: "italic", color: "#666" }}>{exp.date}</span>
          </div>
          <ul style={{ marginTop: "0.5rem" }}>
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div style={{ marginTop: "0.25rem", color: "#444" }}>Tech: {exp.tech}</div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
