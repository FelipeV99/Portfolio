import React from 'react'
import './socials.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaBehanceSquare} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Socials = () => {
  return (
    <div className="socials-div">
        <motion.a 
        href="https://www.behance.net/felipeandrade27" target="_blank"
        whileHover={{scale:1.3}}
        ><FaBehanceSquare size="20" /></motion.a>
        <motion.a href="https://www.linkedin.com/in/felipe-a-411294138/" target="_blank"
        whileHover={{scale:1.3}}
        ><FaLinkedin size="20" /></motion.a>
        <motion.a href="https://github.com/FelipeV99" target="_blank"
        whileHover={{scale:1.3}}
        ><FaGithubSquare size="20" /></motion.a>
        <span className='vertical-line'></span>
    </div>
  )
}

export default Socials