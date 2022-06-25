import logo from './logo.svg';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import Socials from './components/socials/Socials'
import Footer from './components/footer/Footer'
import NewNav from './components/newnav/NewNav'
import './App.css';
import './index.css'

import {useLayoutEffect, useState} from 'react'

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

function App() {
  const [width, height] = useWindowSize();
  const proportion = width/height
  const needsImgAdjust = (proportion>2.026) ? true : false
  return (
   <>
   <div className={needsImgAdjust ? 'adjusted-wrap' : 'the-ultimate-wrap'}>
        <NewNav />
        <Socials />
        <Header />
        <Portfolio />
        <About />
        <Contact /> 
        <Footer />
        </div>
   </>
  );
}

export default App;
