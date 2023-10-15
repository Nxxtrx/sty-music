import './Header.scss'

const Header = () => {
  return(
    <header className='header'>
    <img className='header__logo' src='./image/logo.svg' alt="logo" />
    <nav className='header__nav-menu'>
      <ul className='header__menu-page'>
        <li className='header__menu-item'><img className='header__menu-image' src="./image/profile.svg" alt="" /></li>
        <li className='header__menu-item'><img className='header__menu-image' src="./image/playlist.svg" alt="" /></li>
        <li className='header__menu-item'><img className='header__menu-image' src="./image/radio.svg" alt="" /></li>
        <li className='header__menu-item'><img className='header__menu-image' src="./image/videos.svg" alt="" /></li>
      </ul>
      <ul className='header__menu-page'>
        <li className='header__menu-item'><img className='header__menu-image' src="./image/profile.svg" alt="" /></li>
        <li className='header__menu-item'><img className='header__menu-image' src="./image/Logout.svg" alt="" /></li>
      </ul>
    </nav>
  </header>
  )
}
export default Header;
