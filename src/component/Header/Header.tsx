import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const logo: string = require("../../utils/image/logo.svg").default
const profile: string = require("../../utils/image/profile.svg").default
const playlist: string = require("../../utils/image/playlist.svg").default

const Header = React.memo(() => {
  return(
    <header className='header'>
    <Link to='/'><img className='header__logo' src={logo} alt="logo" /></Link>
    <nav className='header__nav-menu'>
      <ul className='header__menu-page'>
        <li className='header__menu-item'><Link to='/'><img className='header__menu-image' src={profile} alt="" /></Link></li>
        <li className='header__menu-item'><Link to='/library'><img className='header__menu-image' src={playlist} alt="" /></Link></li>
      </ul>
    </nav>
  </header>
  )
})
export default Header;
