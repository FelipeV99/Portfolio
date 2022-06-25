import React from 'react'
import Card from './Card'
import Projects from '../../projects.json'
import './portfolio.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
const Portfolio = () => {
  const [activeProjectType, setActiveProjectType] = useState("Featured Projects")
  const myProjects = Projects.filter(project => project.type.includes(activeProjectType))
  return (
    <div id='container-portfolio'>
      <div id="portfolio">
        <h1 className='margin-h1-bottom center-text'>Projects</h1>
        <div className='div-buttons'>
          <motion.button type="button" onClick={() => setActiveProjectType("All")} className={activeProjectType === "All" ? "active btn-tag" : "inactive btn-tag"}
            whileHover={{ scale: 1.08 }}
          >All</motion.button>
          <motion.button type="button" onClick={() => setActiveProjectType("Featured Projects")} className={activeProjectType === "Featured Projects" ? "active btn-tag" : "inactive btn-tag"}
            whileHover={{ scale: 1.08 }}
          >Featured Projects</motion.button>
          <motion.button type="button" onClick={() => setActiveProjectType("UX")} className={activeProjectType === "UX" ? "active btn-tag" : "inactive btn-tag"}
            whileHover={{ scale: 1.08 }}
          >UX</motion.button>
          <motion.button type="button" onClick={() => setActiveProjectType("UI")} className={activeProjectType === "UI" ? "active btn-tag" : "inactive btn-tag"}
            whileHover={{ scale: 1.08 }}
          >UI</motion.button>
          <motion.button type="button" onClick={() => setActiveProjectType("Front End")} className={activeProjectType === "Front End" ? "active btn-tag" : "inactive btn-tag"}
            whileHover={{ scale: 1.08 }}
          >Front End</motion.button>
          <motion.button type="button" onClick={() => setActiveProjectType("Art")} className={activeProjectType === "Art" ? "active btn-tag" : "inactive btn-tag"}
            whileHover={{ scale: 1.08 }}
          >Art</motion.button>

        </div>

        <div id="projects-div">
          {myProjects.map(project => {
            return (
                <motion.div key= {project.key} variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}

                  initial="hidden"
                  whileInView="visible"
                >
                  <Card  title={project.title} thumbName={project.thumbName} type={project.type} imageName={project.imageName} fitHeight={project.fitHeight} />
                </motion.div>
            )
          })}
        </div>





      </div>

    </div>

  )


}

export default Portfolio