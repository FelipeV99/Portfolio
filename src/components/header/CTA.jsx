import React from 'react'
import CV from '../../assets/cv Felipe Andrade.pdf'
import './header.css'
import {motion} from 'framer-motion'

const CTA = () => {
  return (
    <div className='container-CTA'>
        <motion.a href={CV} download className='btn btn-primary' id='btn-download-cv'
        whileHover={{scale:1.03}}
        whileTap={{scale:0.97}}
        >Download CV</motion.a>
        <motion.a href="#contact" className='btn btn-secondary' id='btn-talk'
        whileHover={{backgroundColor:"#FEFFD7", color:"#391E17", scale:1.03}}
        >Let's Talk</motion.a>
    </div>
  )
}

export default CTA