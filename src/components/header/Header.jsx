import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/vishwak.png'
import HeaderSocial from './HeaderSocials'
import CIRCLE from '../../assets/circle-removebg-preview.png'



const Header = () => {
  return (
    <header>
      

      <div className="container header__container">
        <h5 className='hello'>Hello I'm</h5>
        <h1 className='name'>Vishwajeet Kale</h1>
        <h5 className="text-light">Full stack Developer <br /> <br /> I'm obsessed with making things and even more obsessed with making thinks better. <br />My goal is to be a successfull Web Developer which will clearly communicate with visitors.</h5>
        <CTA/>
        <HeaderSocial/>

        <div className='me'>
          <img src={CIRCLE} alt="cirle" className='circle'/>
          <img src={ME} alt="mee" className="headerimg"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header