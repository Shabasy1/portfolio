import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
/*منساش اعمل امبورت للصورة الي تحت */
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ahmed Elshabasy</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        
        
        <div>
          {/* <img src="" alt=""/> هنا المفروض احط الصورة بتاعتي  */}
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header
