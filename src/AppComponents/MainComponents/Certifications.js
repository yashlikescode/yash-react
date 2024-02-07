import React from 'react'
import {Link} from "react-router-dom";

export const Certifications = () => {
  return (
    <div>
      <article id="whole-certifications">
    <h2 id="certs-section"style={{paddingLeft: "10%",paddingRight: "10%",paddingTop:"6%"}}className="text-primary">Certifications</h2>
    <div style={{paddingLeft: "10%",paddingRight: "10%",paddingTop:"2%"}}>
    <section>
        <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button id='collapseOneButton' className="colabutton accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
            <h5>1. Meta Front-End Development Professional Certificate</h5>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ul>
                <li>Introduction to Front-End Development		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/T92SSTMMCWBC" target="_blank">Link</Link>]</li>
                <li>Programming in JavaScript		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/C88VKZ6WCGKZ" target="_blank">Link</Link>]</li>
                <li>Version Control		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/NL8JSWH2D3D5" target="_blank">Link</Link>]</li>
                <li>HTML and CSS in Depth    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/K9RNQEWEMYNC" target="_blank">Link</Link>]</li>
                <li>React Basics    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/TNEHZQF8JF69" target="_blank">Link</Link>]</li>
            </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
            <h5>2. Google Data Analytics Professional Certificate</h5>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ul>
              <li>Foundations: Data, Data, Everywhere   [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/39F4AFDRSG8R" target="_blank">Link</Link>]</li>
              <li>Ask Questions to Make Data-Driven Decisions   [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/LZS3F5VZCWL7" target="_blank">Link</Link>]</li>
              <li>Prepare Data for Exploration    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/3CH36JKEDP57" target="_blank">Link</Link>]</li>
              <li>Process Data from Dirty to Clean    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/35SVEASNYZ2L" target="_blank">Link</Link>]</li>
              <li>Analyze Data to Answer Questions    [<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/WXLWHUYLZN7V" target="_blank">Link</Link>]</li>
            </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <h5>3. Guided Projects on Linux</h5>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ul>
              <li>Getting started in Ubuntu Linux		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/DQU8B72WWGEY" target="_blank">Link</Link>] </li>
              <li>Command Line Basics in Linux			[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/9M72JMJPN3NL" target="_blank">Link</Link>]</li>
              <li>Files and Directories in Linux File-system			[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/UKR2HPNATZK2" target="_blank">Link</Link>]</li>
            </ul> 
            </div>
          </div>
        </div>

        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <h5>4. Google Project Management: Professional Certificate</h5>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <ul>
              <li>Foundations of Project Management		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/JEPGSDMKJG2A" target="_blank">Link</Link>] </li>
              <li>Project Initiation: Starting a Successful Project		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/S7KDDR7X7SEW" target="_blank">Link</Link>]</li>
              <li>Project Planning: Putting It All Together		[<Link rel="noopener noreferrer" to="https://www.coursera.org/account/accomplishments/certificate/NKJHFBGJX5XM" target="_blank">Link</Link>] </li>
            </ul>
            </div>
          </div>
        </div>


      </div>
    </section>

    </div>
  </article>
    </div>
  )
}
