import { useRef } from 'react'
import { FaStopCircle, FaBars, FaTimes } from 'react-icons/fa'
import "./newnav.css"
import {motion} from 'framer-motion'


const NewNav = () => {
  const navRef = useRef();
  const hambRef = useRef();
  const homeRef = useRef();
  const logoRef = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive-nav")
    hambRef.current.classList.toggle("hide-hamb")
    homeRef.current.classList.toggle("change-align")
    logoRef.current.classList.toggle("logo-style")
  }

  const RemoveHamb = () =>{
    hambRef.current.classList.remove("hide-hamb")
    homeRef.current.classList.remove("change-align")
    navRef.current.classList.add("responsive-nav")
    logoRef.current.classList.remove("logo-style")

  }
  return (
    <>
    <div className='nav-container'>

    
    <div className='whole' ref={homeRef} >
        <a id="home" href="#" ref={logoRef} >
            <FaStopCircle id="my-logo" size={20} />
            <p>Felipe</p>
        </a>
        <nav className="responsive-nav"  ref={navRef}>
          <motion.a className='nav-link'
          whileHover={{
            scale: 1.05,
          }}
          href="#container-portfolio"  onClick={RemoveHamb}>Portfolio</motion.a>
          <motion.a 
                    whileHover={{
                      scale: 1.05,
                    }}
          className='nav-link' href="#about" onClick={RemoveHamb}>About</motion.a>
          <motion.a  
                    whileHover={{
                      scale: 1.05,
                      
                    }}
          className='nav-link' href="#contact" onClick={RemoveHamb}>Contact</motion.a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes size="20"/>
          </button>
        </nav>
        <button className='nav-btn hamb-btn' onClick={showNavbar} ref={hambRef}>
          <FaBars size={20}/>
        </button>
    </div>
    </div>
    </>
  )
}

export default NewNav
