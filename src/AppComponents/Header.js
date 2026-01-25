import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Making the nav bar names bold on scroll
var collapsed = 0;

export const Header = () => {
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    console.log(e.key);
    if (Number(e.key) === 1) scrollToTarget("cover-image");
    if (Number(e.key) === 2) scrollToTarget("experiences-section");
    if (Number(e.key) === 3) scrollToTarget("whole-certifications");
    if (Number(e.key) === 4) scrollToTarget("all-educations");
    if (Number(e.key) === 5) scrollToTarget("project-section");
    if (Number(e.key) === 6) scrollToTarget("a-resume");
    if (Number(e.key) === 7) scrollToTarget("connect");
  };

  const buttonRef = useRef(null);

  const scrollToTarget = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect();
      window.scrollTo({
        top: elementPosition.top + window.scrollY,
        behavior: "smooth",
      });
    }
    buttonRef.current.click();
  };

  return (
    <div>
      <nav
        id="nav-bar"
        style={{ zIndex: "100", backgroundColor: "rgb(66, 135, 245)" }}
        className="navbar navbar-expand-lg fixed-top"
      >
        <div className="container-fluid">
          <Link
            style={{ color: "white", fontSize: "x-large" }}
            className="navbar-brand"
            href="#"
          >
            <h1 style={{ fontSize: "x-large" }}>Yashasvi</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            style={{ backgroundColor: "rgb(0, 123, 191)" }}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                ref={buttonRef}
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul
                style={{ fontSize: "large" }}
                className="navbar-nav justify-content-end flex-grow-1 pe-3"
              >
                <li className="nav-item">
                  <Link
                    onClick={() => scrollToTarget("cover-image")}
                    id="nav-home"
                    style={{ color: "white" }}
                    className="nav-link active btn"
                    aria-current="page"
                  >
                    Home
                    <span className="keyhelp">1</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => scrollToTarget("experiences-section")}
                    id="nav-exp"
                    style={{ color: "white" }}
                    className="nav-link active btn"
                    aria-current="page"
                  >
                    Experience
                    <span className="keyhelp">2</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => scrollToTarget("whole-certifications")}
                    id="nav-cert"
                    style={{ color: "white" }}
                    className="nav-link active btn"
                    aria-current="page"
                  >
                    Certifications
                    <span className="keyhelp">3</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => scrollToTarget("all-educations")}
                    id="nav-edu"
                    style={{ color: "white" }}
                    className="nav-link active btn"
                    aria-current="page"
                  >
                    Education
                    <span className="keyhelp">4</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => scrollToTarget("project-section")}
                    id="nav-project"
                    style={{ color: "white" }}
                    className="nav-link active btn"
                    aria-current="page"
                  >
                    Projects
                    <span className="keyhelp">5</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => scrollToTarget("a-resume")}
                    id="nav-resume"
                    style={{ color: "white" }}
                    className="nav-link active btn"
                    aria-current="page"
                  >
                    Resume
                    <span className="keyhelp">6</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => scrollToTarget("connect")}
                    id="nav-contact"
                    style={{ color: "white" }}
                    className="nav-link active btn btn-link"
                    aria-current="page"
                  >
                    Connect With Me
                    <span className="keyhelp">7</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
