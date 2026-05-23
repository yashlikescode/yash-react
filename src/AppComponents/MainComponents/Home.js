import React from "react";
import expand from "./main_assets/expand-more.png"; // Adjust the path as needed
import { Link } from "react-router-dom";
import {
  SiNodedotjs,
  SiOpenai
} from "react-icons/si";

import { Stack, Chip } from "@mui/material";

const chips = [
  {
    label: "AI",
    icon: <SiOpenai size={16} />,
    border: "#10A37F",
    bg: "rgba(16,163,127,0.12)",
  },
  {
    label: "Full-Stack",
    icon: <SiNodedotjs size={16} />,
    border: "#7bfb61",
    bg: "rgba(97,218,251,0.12)",
  },
];

export const Home = () => {
  const scrollToTarget = (elementId) => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect();
      window.scrollTo({
        top: elementPosition.top + window.scrollY,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="redes">
        <Link
          className="github"
          aria-label="Yashasvi on Github"
          target="_blank"
          to="https://github.com/yashlikescode"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              fill="white"
              d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"
            />
          </svg>
        </Link>
        <Link
          className="whatsapp"
          aria-label="Chat on WhatsApp"
          target="_blank"
          to="https://wa.me/+918540904380"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            width="25px"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </Link>

        <Link
          className="linkedin"
          aria-label="Yashasvi on LinkedIn"
          target="_blank"
          to="https://www.linkedin.com/in/kmryashasvi/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            width="20px"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </Link>
      </div>

      <article id="home-article" style={{ overflow: "hidden" }}>
        <div id="cover-image" style={{ overflow: "hidden" }}>
          <div id="bubbles"></div>
          <div id="bubbles2"></div>
          <div id="bubbles3"></div>
        </div>
        <span className="material-symbols-outlined">
          <Link onClick={() => scrollToTarget("experiences-section")}>
            <img src={expand} alt="Down Arrow" />
          </Link>
        </span>
        <div
          id="salutation"
          className="text-overlay"
          style={{
            padding: "20px",
            borderRadius: "0.3cm",
            transition: "transform 4s ease",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Hii, I'm <span className="myName">Yashasvi,</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.8vw, 1.25rem)",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}
          >
            Helping businesses and organizations grow, perform better, and save
            time.
          </p>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {chips.map((chip) => (
              <Chip
                key={chip.label}
                icon={chip.icon}
                label={chip.label}
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.08)",
                  background: chip.bg,
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  px: 1.8,
                  py: 2.2,
                  margin: "0 9px",
                  fontWeight: 500,
                  transition: "all 0.10s ease",

                  "& .MuiChip-icon": {
                    color: chip.border,
                    ml: "10px",
                  },

                  "&:hover": {
                    borderColor: chip.border,
                    transform: "translateY(-2px)",
                    background: chip.bg,
                    boxShadow: `0 0 18px ${chip.border}40`,
                  },
                }}
              />
            ))}
          </Stack>
          <div className="buttons-container">
            <Link
              rel="noopener noreferrer"
              to="./Yashasvi_Resume_4_3_7.pdf"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button class="Download-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 -960 960 960"
                >
                  <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-160h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm221.5-198.5Q510-807 510-820t-8.5-21.5Q493-850 480-850t-21.5 8.5Q450-833 450-820t8.5 21.5Q467-790 480-790t21.5-8.5Z"
                    fill="white"
                  ></path>
                </svg>
                <span>Resume</span>
              </button>
            </Link>

            <button
              class="Download-button"
              onClick={() => scrollToTarget("experiences-section")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 640 640"
              >
                <path
                  d="M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z"
                  fill="white"
                ></path>
              </svg>
              <span>Experience</span>
            </button>

            <button
              class="Download-button"
              onClick={() => scrollToTarget("project-section")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M40-160v-640l240 40v560L40-160Zm320-40v-560h240v560H360Zm560 40-240-40v-560l240-40v640Zm-800-95 80-13v-424l-80-14v451Zm320-25h80v-400h-80v400Zm400 26v-452l-80 14v424l80 14Zm-720-1v-451l80 14v424l-80 13Zm320-25v-400h80v400h-80Zm400 26-80-14v-424l80-14v452Z"
                  fill="white"
                ></path>
              </svg>
              <span>Projects</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
