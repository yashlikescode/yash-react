import React, { useState } from "react";
import cppStlLogo from "./ProjectAssetss/cpp-stl-logo.png";
import drivinglogo from "./ProjectAssetss/new-driving.png";
import matrixlogo from "./ProjectAssetss/matrix-man-logo.png";
import resumesc from "./ProjectAssetss/resume-parser.png";
import reactweb from "./ProjectAssetss/new-react.png";
import stlprime from "./ProjectAssetss/stl-prime.png";
import deter from "./ProjectAssetss/deter.png";
import polrec from "./ProjectAssetss/polar-rect.png";
import yashfm from "./ProjectAssetss/yashfm.png";
import reactgate from "./ProjectAssetss/reactgate.png";
import openpap from "./ProjectAssetss/openpap.jpg";
//---------------------------------------------------------------------------
export const Projects = () => {
  const [active, setActive] = useState("web");

  const projects = [
    {
      title: "Open Question Papers",
      image: openpap,
      desc: "Upload or Download Question papers of any exam.",
      link: "https://openpapers.vercel.app",
      type: "web",
      repoLink: "https://github.com/yashlikescode/open-question-papers",
    },
    {
      title: "Online Song Player",
      image: yashfm,
      desc: "A platform for listening song without login and ads.",
      link: "https://yashfm.vercel.app",
      type: "web",
      repoLink: "https://github.com/yashlikescode/react-audio-player",
    },
    {
      title: "GATE Exam [Ongoing]",
      image: reactgate,
      desc: "A platform for students to give mock GATE Exam.",
      link: "https://reactgate.vercel.app",
      type: "web",
      repoLink: "https://github.com/yashlikescode/react-gate",
    },
    {
      title: "My React Website",
      image: reactweb,
      desc: "Developed my personal website using React.Js and Bootstrap",
      link: "https://www.yashlikescode.in",
      type: "web",
      repoLink: "https://github.com/yashlikescode/yash-react",
    },
    {
      title: "Driving Technique",
      image: drivinglogo,
      desc: "Website for Evaluation of Driving Technique of Loco Pilots",
      link: "https://stlyash.github.io/Driving/",
      type: "web",
      repoLink: "https://github.com/yashlikescode/Driving",
    },

    {
      title: "STL C++ App",
      image: cppStlLogo,
      desc: "Developed an Android App which introduces STL libraries of C++ | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 3.18k (May,2024)",
      link: "https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.stlcpp",
      type: "android",
    },
    {
      title: "STL Prime App",
      image: stlprime,
      desc: "Created a prime and paid version of the C++ STL App | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 11 (May,2024)",
      link: "https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.webexp",
      type: "android",
    },
    {
      title: "Determinant Calculator",
      image: deter,
      desc: "An app that calculates determinant of order 2,3 and 4 | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 4.24k (May,2024)",
      link: "https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.determinantCalculator",
      type: "android",
    },
    {
      title: "Polar to Rect. Form Converter",
      image: polrec,
      desc: `Created an App which converts Polar to Rectangular Coordinates and vice-versa | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 3.01k (May,2024)`,
      link: "https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.rectangluarToPolarConv",
      type: "android",
    },
    {
      title: "Matrix Man App",
      image: matrixlogo,
      desc: "Created an App which can calculate Determinant, Inverse,etc. | 𝗧𝗼𝘁𝗮𝗹 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝘀: 432 (May,2024)",
      link: "https://play.google.com/store/apps/details?id=appinventor.ai_kmryashasvi.MatrixMan",
      type: "android",
    },
    {
      title: "Resume Parser",
      image: resumesc,
      desc: "Developed a resume parser in Python using Spacy",
      link: "https://colab.research.google.com/drive/1I3G8cj53AYda24XR8q4rn-6KJIF6h4OT?usp=sharing",
      type: "python",
    },
    {
      title: "C++ STL Reference Redefined",
      image: cppStlLogo,
      desc: "App which introduces STL libraries of C++ ",
      link: "https://www.microsoft.com/store/productId/9N336FFZDGS5?ocid=pdpshare",
      type: "windows",
    },
  ];

  const categories = [
    { id: "web", label: "Web" },
    { id: "android", label: "Android" },
    { id: "windows", label: "Windows" },
    { id: "python", label: "Python" },
  ];

  const renderCards = () => {
    return projects
      .filter((project) => project.type === active)
      .map((p, i) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={i}>
          <div
            className="card h-100"
            style={{
              minHeight: 160,
              overflow: "hidden",
              borderRadius: "0.5rem",
            }}
          >
            <div className="row g-0 h-100 align-items-center p-2">
              <div className="col-4 p-2">
                <img
                  src={p.image}
                  alt={p.title}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0.4rem",
                    border: "1px solid rgb(0,0,0)",
                  }}
                />
              </div>
              <div className="col-8">
                <div className="card-body p-2">
                  <h5 className="card-title mb-1">{p.title}</h5>
                  <p
                    className="card-text small text-muted mb-2"
                    style={{ fontSize: 12 }}
                  >
                    {p.desc}
                  </p>
                  <div className="d-flex gap-2 mb-2">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Live
                      </a>
                    )}
                    {p.repoLink && (
                      <a
                        href={p.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <div className="whole-proj">
      <h2
        id="project-section"
        className="text-primary"
        style={{ padding: "3% 0 1% 10%" }}
      >
        Projects
      </h2>

      <article
        id="all-projects"
        style={{
          margin: "0 8%",
          backgroundColor: "rgba(63,127,231,0.06)",
          borderRadius: "0.6rem",
        }}
      >
        <div
          className="container-fluid"
          style={{ padding: 0, border: "1px solid rgba(63,127,231,0.2)" }}
        >
          <div
            className="d-flex flex-wrap gap-2 p-3 align-items-center"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
          >
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`btn btn-sm ${active === c.id ? "btn-primary" : "btn-outline-primary"}`}
              >
                {c.label}
              </button>
            ))}
            <div className="ms-auto text-muted small">
              Showing{" "}
              <strong>
                {projects.filter((p) => p.type === active).length}
              </strong>{" "}
              results
            </div>
          </div>

          <div className="container-fluid p-3">
            <div className="row">{renderCards()}</div>
          </div>
        </div>
      </article>
    </div>
  );
};
