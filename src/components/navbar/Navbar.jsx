import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='wum__navbar'>
      <div className='wum__navbar-links'>
        <div className='wum__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='wum__navbar-links_container'>
          <p><a href="#about">About</a></p>
          <p><a href="#movies">Movies</a></p>
        </div>
      </div>
      <div className='wum__navbar-help'>
      <p><a href="#help">Help</a></p>
      </div>
      <div className='wum__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#D5F2E3" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#D5F2E3" size={27} onClick={() => setToggleMenu(true)} />
        }
      </div>
    </div>
  )
}

export default Navbar
