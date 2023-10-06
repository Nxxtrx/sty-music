import React from 'react';
import './font/font.css'
import './app.scss'

function App() {
  return (
    <div className="page">
      <header className='header'>
        <img className='header__logo' src='/image/logo.svg' alt="logo" />
        <nav className='header__nav-menu'>
          <ol className='header__menu-page'>
            <li className='header__menu-item'><img src="/image/Home.svg" alt="" /></li>
            <li className='header__menu-item'><img src="/image/playlist.svg" alt="" /></li>
            <li className='header__menu-item'><img src="/image/radio.svg" alt="" /></li>
            <li className='header__menu-item'><img src="/image/videos.svg" alt="" /></li>
          </ol>
          <ol className='header__auth'>
            <li className='header__menu-item'><img src="/image/profile.svg" alt="" /></li>
            <li className='header__menu-item'><img src="/image/Logout.svg" alt="" /></li>
          </ol>
        </nav>
      </header>
      <main className='main'>
        <section className='home'>
          <div className='home__search'>
            <img src="/image/search.svg" alt="" />
            <input type="text" placeholder='search'/>
          </div>
          <div className='home__page'>
            <div className='banners'>
              <p className='banners__text'>Currated playlist</p>
              <h2 className='banners__title'>R & B Hits</h2>
              <p className='banners__description'>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
            </div>
            <div className='home__chart'>
              <h2 className='chart__title'>Top charts</h2>
              <ul className='chart__list'>
                <li className='chart__item'>
                  <img src="/image/rectangle1.png" alt="" />
                  <div className='chart__item-container'>
                    <h3 className='chart__item-title'>Golden age of 80s</h3>
                    <p className='chart__item-description'>Sean swadder</p>
                    <p className='chart__item-time'>2:34:45</p>
                  </div>
                  <button className='chart__item-like'></button>
                </li>
                <li className='chart__item'>
                  <img src="/image/rectangle1.png" alt="" />
                  <div className='chart__item-container'>
                    <h3 className='chart__item-title'>Golden age of 80s</h3>
                    <p className='chart__item-description'>Sean swadder</p>
                    <p className='chart__item-time'>2:34:45</p>
                  </div>
                  <button className='chart__item-like'></button>
                </li>
                <li className='chart__item'>
                  <img src="/image/rectangle1.png" alt="" />
                  <div className='chart__item-container'>
                    <h3 className='chart__item-title'>Golden age of 80s</h3>
                    <p className='chart__item-description'>Sean swadder</p>
                    <p className='chart__item-time'>2:34:45</p>
                  </div>
                  <button className='chart__item-like'></button>
                </li>
              </ul>
            </div>
          </div>
          <div className='releases'>
            <ul className='releases__list'>
              <li className='releases__item'>
                <img className='releases__item-image' src="/image/rectangle1.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img src="/image/rectangle1.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img src="/image/rectangle1.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img src="/image/rectangle1.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img src="/image/rectangle1.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
