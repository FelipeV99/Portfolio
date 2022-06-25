import React, { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import { AiFillMail } from 'react-icons/ai'
import { AiFillEnvironment } from 'react-icons/ai'
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sko64yq', 'template_gb539y9', form.current, 'MXv6p75pzG_f61tld')
    e.target.reset()
  };

  return (
    <section id="contact">
      <div className='contact-container-content'>
        <h1 className='center-text margin-h1-bottom' id="contact-title">Contact</h1>
        <div className="contact-container">
          <div className="team-up">
            <h5>Ready to Team Up?</h5>
            <p className='contact-text'>You can find me on my socials, you can also connect with me trough this form or write me directly to <a href="mailto:afelipea99@gmail.com">afelipea99@gmail.com</a></p>
          </div>
          <form className="form-style" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' required />
            <label className='margin-label' htmlFor="email">Email</label>
            <input type="email" name='email' required />
            <label className='margin-label' htmlFor="message">Message</label>
            <textarea name='message' required autoCapitalize='words' />
            <button className="btn btn-primary" id="btn-message" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>

  )
}
export default Contact
