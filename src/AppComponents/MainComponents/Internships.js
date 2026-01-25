import React, { useState, useEffect } from "react";

export const Internships = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-elementsu"); // Use the correct class name here
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-elementsu");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup observer when component is unmounted
    return () => observer.disconnect();
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <div id="whole-internships">
      <h2
        id="internships-section"
        style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "6%" }}
        className="text-primary"
      >
        Internships
      </h2>
      <article
        style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "2%" }}
        id="whole-internships"
      >
        <div style={{ paddingBottom: "2%" }}>
          <div className="scroll-container hidden-elementsu">
            <div className="scroll-element">
              <h4>Summer Internship - Eastern Railways, Indian Railways</h4>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Topic: Evaluation of Driving Technique using Speed-Time Chart
              </h6>
              <span>August 2021 - September 2021</span>
              <button
                class="btn btn-link expbut"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show Less ⟰" : "Show More ⟱"}
              </button>
              <div class="collapse" id="collapseExample">
                <p>
                  <ul>
                    <li>
                      Developed an Evaluation System for Driving Technique of
                      Loco Pilots of Sealdah Suburban Trains using Speed-Time
                      Chart
                    </li>
                    <li>
                      Two type of files were available for the analysis:
                      <ul>
                        <li>
                          A file containing details like time of arrival of
                          trains, stoppage time at the stations and departure
                          time
                        </li>
                        <li>
                          File containing data consisting of its speed and
                          geolocation of every three seconds provided by tracker
                          installed in every locomotive
                        </li>
                      </ul>
                    </li>
                    <li>
                      Speed-Time chart was generated using the extracted data of
                      journey of the loco pilot from both the files
                    </li>
                    <li>
                      Final score of the loco pilot was calculated based on
                      whether he as done Brake Feel and Brake Power tests and
                      the duration for which the train was near the Average
                      Maximum Speed of the sections it has passed from
                    </li>
                    <li>
                      Also considered Weather and Crowd Density aspects, because
                      these factors affect the efficiency of the system
                    </li>
                    <li>
                      Worked under the guidance of IT Cell, Control Room,
                      Sealdah, Eastern Railways
                    </li>
                    <li>
                      Used MATLAB for the Data Analysis and Visualization.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <br />

          <div className="scroll-container2 hidden-elementsu">
            <div className="scroll-element">
              <h4>Summer Internship - Electric Loco Shed, Vadodara</h4>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Topic: Testing Setup for Digital I/O Cards of TCN based VCUs{" "}
              </h6>
              <span>June 2022 - July 2022</span>
              <button
                class="btn btn-link expbut"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample2"
                onClick={() => setIsExpanded2(!isExpanded2)}
              >
                {isExpanded2 ? "Show Less ⟰" : "Show More ⟱"}
              </button>
              <div class="collapse" id="collapseExample2">
                <p>
                  <ul>
                    <li>
                      Developed a testing setup for the Digital I/O cards for
                      TCN (Train Communication Network) based VCUs (Vehicle
                      Control Units)
                    </li>
                    <li>
                      The conventional MICAS based VCUs of locomotives were
                      being replaced by TCN based VCUs provided by CDAC in new
                      IGBT based Locomotives, but the official manual for the
                      testing/maintenance of new VCUs was not provided by Indian
                      Railways although more than 500 locos were working on line
                      with TCN based VCU
                    </li>
                    <li>
                      Electric Loco Shed Tuglakabad was the first to develop
                      test jig for testing Digital I/O cards of CDAC TCN based
                      vehicle control unit with help of D413 tool and CDAC VCU
                      Rack. Its design was made available in the Loco Shed
                      Vadodara on request
                    </li>
                    <li>
                      VCU works on different signals achieved on different pins,
                      testing setup is made by taking output of a pin as the
                      input of another pin and getting known output at the
                      interval of 30 seconds
                    </li>
                    <li>
                      The looping connections were made using the diagram
                      provided by Electric Loco Shed Tuglakabad, which made
                      Electric Loco Shed Vadodara, the second Loco Shed to
                      perform testing of Digital I/O cards of TCN based VCU.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <br />

          <div className="scroll-container3 hidden-elementsu">
            <div className="scroll-element">
              <h4>
                Summer Internship - Vandhana International Pvt. Ltd., New Delhi
              </h4>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Topic: Development of Training Modules and PPTs for T28 Machine
                and A25 Trolleys{" "}
              </h6>
              <span>June 2023 - Jul 2023</span>
              <button
                class="btn btn-link expbut"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample3"
                onClick={() => setIsExpanded3(!isExpanded3)}
              >
                {isExpanded3 ? "Show Less ⟰" : "Show More ⟱"}
              </button>
              <div class="collapse" id="collapseExample3">
                <p>
                  <ul>
                    <li>
                      Demonstrated proficiency in operating and understanding
                      the T28 track machine through extensive research and
                      multiple information sources.
                    </li>
                    <li>
                      Designed and created 12 comprehensive training modules for
                      a diverse range of Track Machines, significantly
                      contributing to Vandhana International Pvt. Ltd.'s
                      training program for both internal and external staff.
                    </li>
                    <li>
                      Iteratively improved training modules based on feedback
                      from various stakeholders, ensuring alignment with the
                      evolving organizational needs and industry standards.
                    </li>
                    <li>
                      Acquired knowledge of instructional design principles
                      during the module development process, enhancing
                      presentation and communication skills to effectively
                      convey project findings and ideas.
                    </li>
                    <li>
                      Gained practical insights and firsthand observations of
                      various machines, including SRGM, Pit-Jacks, and Mobile
                      Jacks.
                    </li>
                    <li>
                      Collaborated with industry professionals, obtaining a deep
                      understanding of real-world applications and challenges
                      within the field.
                    </li>
                    <li>
                      Developed a comprehensive understanding of the railway
                      sector and its equipment, highlighting the critical role
                      of track machines in ensuring safe and efficient
                      operations.
                    </li>
                    <li>
                      Thrived in a professional work environment, emphasizing
                      the importance of teamwork, effective communication, and
                      professionalism for achieving success.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
