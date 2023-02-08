import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Me from '../../img/444444.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get TO kNOW</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+3 years</small>

            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80 completed</small>

            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officia tempore atque sequi nulla sit laboriosam minima, architecto et impedit laudantium, optio natus, accusantium sapiente. Quae maxime vitae cumque quisquam?
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About
