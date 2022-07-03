import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from "../../assets/logo.svg"

const Menu = () => (
  <>
    <p><a href="#about">About</a></p>
    <p><a href="#movies">Movies</a></p>
  </>

)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='wum__navbar'>
      <div className='wum__navbar-links'>
        <div className='wum__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='wum__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='wum__navbar-help'>
        <p><a href="#help">Help</a></p>
      </div>
      <div className='wum__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#ECE5F0" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#ECE5F0" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='wum__navbar-menu_container scale-up-center'>
            <div className='wum__navbar-menu_container-links'>
            <Menu/>
            </div>
            <div className='wum__navbar-menu_container-links-help'>
            <p><a href="#help">Help</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
