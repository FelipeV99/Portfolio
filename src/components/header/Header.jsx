import './header.css'
import CTA from './CTA'

function Header() {
  return (
    <header className='min-vh-container center-me-vert container-desktop' id='header-container'>
      <h4 className='text-shadow'>Hello, I'm</h4>
      <h1 className='text-shadow'>Felipe Andrade</h1>
      <p className='text-shadow'>UX/UI Designer</p>
      <p className='text-shadow'>Front End Developer</p>
      <CTA />
    </header>
  )
}

export default Header