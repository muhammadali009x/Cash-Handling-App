import React from 'react'
import logo from '../images/moneeCoin.png'
import Navigation from './Navigation'
import '../css/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>
          <span className='logo__text'>m</span>
          <img src={logo} className='logo__image' alt='monee logo'/>
          <span className='logo__text'>nee</span>
        </h1>
      </div>
      <Navigation />
    </header>
  )
}

export default Header
