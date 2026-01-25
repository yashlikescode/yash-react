import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import copyim from "./footer_assets/copy.png";
import doneim from "./footer_assets/done.png";
import sign from "./footer_assets/signature.png";

export const Footer = () => {
  const [emailCopyStatus, setEmailCopyStatus] = useState(copyim);
  const [phoneCopyStatus, setPhoneCopyStatus] = useState(copyim);
  const [onPhone, setOnPhone] = useState(false);

  const copyText = (text, setStatus) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setStatus(doneim))
      .catch((error) => console.error("Copy failed:", error));
    setTimeout(() => setStatus(copyim), 3000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setOnPhone(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="web-foot">
      <div
        className="row"
        style={{
          color: "white",
          alignItems: "center",
          backgroundColor: "rgb(66, 135, 245)",
        }}
      >
        <div className="col firstrow" style={{ margin: "3%" }}>
          <img id="sign" alt="Signature of Yashasvi" src={sign} />
        </div>

        <div
          className="col ctcme secrow"
          style={{ margin: "3%", marginRight: "20%" }}
        >
          <h3 id="cont">Contact Me</h3>
          <button
            className="coppybut"
            style={{ padding: 0, border: 0, backgroundColor: "transparent" }}
            onClick={() =>
              copyText("kmryashasvi@gmail.com", setEmailCopyStatus)
            }
          >
            kmryashasvi@gmail.com
            <img id="em-cpy" src={emailCopyStatus} alt="Copy Button" />
          </button>
          {!onPhone ? "|" : ""}
          {onPhone ?<br />: ""}
          <button
            className="coppybut"
            style={{
              border: 0,
              backgroundColor: "transparent",
            }}
            onClick={() => copyText("+91 8540904380", setPhoneCopyStatus)}
          >
            +91 8540904380
            <img id="ph-cpy" src={phoneCopyStatus} alt="Copy Button" />
          </button>
        </div>
        <div
          style={{ height: "1px", backgroundColor: "rgb(148, 168, 223)" }}
        ></div>
        <span
          style={
            onPhone
              ? { textAlign: "left", margin: "2%" }
              : { textAlign: "center", margin: "2%" }
          }
        >
          <Link
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "white" }}
            to="https://github.com/yashlikescode/react-website"
          >
            Copyright © {year} Yashasvi
          </Link>
        </span>
        <div
          style={{ height: "1px", backgroundColor: "rgb(148, 168, 223)" }}
        ></div>
        <span
          style={
            onPhone
              ? { textAlign: "left", margin: "2%" }
              : { textAlign: "center", margin: "2%" }
          }
        >
          Previous Versions:
          <Link
            rel="noopener noreferrer"
            className="web-link"
            target="_blank"
            style={{ color: "white" }}
            to="https://yashlikescode.github.io/personal-web/"
          >
            v2
          </Link>
          <Link
            rel="noopener noreferrer"
            className="web-link"
            target="_blank"
            style={{ color: "white" }}
            to="https://sites.google.com/view/kmryashasviyash/home"
          >
            v1
          </Link>
        </span>
      </div>
    </div>
  );
};
