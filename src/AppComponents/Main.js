import React from 'react'
import {Certifications} from './MainComponents/Certifications.js'
import {ContactMe} from './MainComponents/ContactMe.js'
import {Home} from './MainComponents/Home.js'
import {Projects} from './MainComponents/Projects.js'
import { Experience } from './MainComponents/Experience.js'
import { Links } from "./MainComponents/Links.js";



export const Main = () => {
  return (
    <div>
      <Home />
      <Experience />
      <Certifications />
      <Projects />
      <Links/>
      <ContactMe />
    </div>
  )
}
