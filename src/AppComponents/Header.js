import React, { useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../store/viewSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentView = useSelector((state) => state.view.currentView);
  const detectKeyDown = useCallback((e) => {
    console.log(e.key);
    if (Number(e.key) === 1) scrollToTarget("cover-image");
    if (Number(e.key) === 2) scrollToTarget("experiences-section");
    if (Number(e.key) === 3) scrollToTarget("whole-certifications");
    if (Number(e.key) === 4) scrollToTarget("project-section");
    if (Number(e.key) === 5) scrollToTarget("social-section");
    if (Number(e.key) === 6) scrollToTarget("connect");
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
    return () => document.removeEventListener("keydown", detectKeyDown, true);
  }, [detectKeyDown]);

  useEffect(() => {
    if (location.pathname === "/photo" && currentView !== "photos") {
      dispatch(setView("photos"));
    } else if (location.pathname === "/" && currentView !== "software") {
      dispatch(setView("software"));
    }
  }, [location.pathname, currentView, dispatch]);

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
            to="/"
            style={{ color: "white", fontSize: "x-large" }}
            className="navbar-brand"
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
                {currentView === "software" && (
                  <>
                    <li className="nav-item">
                      <button
                        onClick={() => scrollToTarget("cover-image")}
                        id="nav-home"
                        style={{
                          color: "white",
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                        className="nav-link active btn"
                        aria-current="page"
                      >
                        Home
                        <span className="keyhelp">1</span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => scrollToTarget("experiences-section")}
                        id="nav-exp"
                        style={{
                          color: "white",
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                        className="nav-link active btn"
                        aria-current="page"
                      >
                        Experience
                        <span className="keyhelp">2</span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => scrollToTarget("whole-certifications")}
                        id="nav-cert"
                        style={{
                          color: "white",
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                        className="nav-link active btn"
                        aria-current="page"
                      >
                        Certifications
                        <span className="keyhelp">3</span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => scrollToTarget("project-section")}
                        id="nav-project"
                        style={{
                          color: "white",
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                        className="nav-link active btn"
                        aria-current="page"
                      >
                        Projects
                        <span className="keyhelp">4</span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => scrollToTarget("social-section")}
                        id="nav-social"
                        style={{
                          color: "white",
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                        className="nav-link active btn"
                        aria-current="page"
                      >
                        Links
                        <span className="keyhelp">5</span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => scrollToTarget("connect")}
                        id="nav-contact"
                        style={{
                          color: "white",
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                        className="nav-link active btn btn-link"
                        aria-current="page"
                      >
                        Connect With Me
                        <span className="keyhelp">6</span>
                      </button>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <div className="toggle-container">
                    <Link
                      to="/"
                      onClick={() => dispatch(setView("software"))}
                      style={{ textDecoration: "none" }}
                      className={`toggle-button ${currentView === "software" ? "active" : ""}`}
                    >
                      Software
                    </Link>
                    <Link
                      to="/photo"
                      onClick={() => dispatch(setView("photos"))}
                      style={{ textDecoration: "none" }}
                      className={`toggle-button ${currentView === "photos" ? "active" : ""}`}
                    >
                      Photography
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
