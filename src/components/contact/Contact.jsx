import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from'react-icons/ri'
import {BsWhatsapp} from'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs.sendForm('service_nvbvoew', 'template_c1b4xnj', form.current, 'XOGWgdn9xHNext8Hj')
        
        e.target.reset()
          
      };
    
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className='contact__option'>
                    <MdOutlineMail className='contact__opstion-icon'/>
                    <h4>Email</h4>
                    <h5>ahmedshabasy27@gmail.com</h5>
                    <a href="mailto:ahmedshabasy27@gmail.com" target='_blank'>
                        Send a message
                    </a>

                </article>
                <article className='contact__option'>
                    <RiMessengerLine className='contact__opstion-icon'/>
                    <h5>Ahmed Elshabasy</h5>
                    <h4>Messenger</h4>
                    <a href="the facebook link"  target='_blank'>
                        Send Message
                    </a>

                </article>
                <article className='contact__option'  target='_blank'>
                    <BsWhatsapp className='contact__opstion-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+201030282620</h5>
                    <a href="http://wa.me/+201030282620" target='_blank'>
                        Send Message
                    </a>

                </article>
            </div>
            {/*end of contact options*/}
            <form ref={form} on onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>

    </section>
  )
}

export default Contact
