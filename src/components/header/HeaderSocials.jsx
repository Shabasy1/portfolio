import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {FiDribbble} from'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://linkedin.com" target="_blank"><ImGithub/></a>
        <a href="https://linkedin.com" target="_blank"><FiDribbble/></a>
        
      
    </div>
  )
}

export default HeaderSocials
