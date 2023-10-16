import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header className='header'>
    <img className='header__logo' src='./image/logo.svg' alt="logo" />
    <nav className='header__nav-menu'>
      <ul className='header__menu-page'>
        <li className='header__menu-item'><Link to='/'><img className='header__menu-image' src="./image/profile.svg" alt="" /></Link></li>
        <li className='header__menu-item'><Link to='/library'><img className='header__menu-image' src="./image/playlist.svg" alt="" /></Link></li>
      </ul>
    </nav>
  </header>
  )
}
export default Header;
