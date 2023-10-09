import React, {ChangeEvent} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './font/font.css'
import './app.scss'
const music = require('./music/Karna.val.mp3')



function App() {

  const [isPlaying, setIsPlaying] = React.useState(false);

  const [volume, setVolume] = React.useState<number>(1.0)

  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const progressBarRef = React.useRef<HTMLInputElement | null>(null)

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  function playMusic() {
    if(isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  React.useEffect(() => {
    if(audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  React.useEffect(() => {
    if(audioRef.current && progressBarRef.current){
      const seconds = Math.floor(audioRef.current?.duration)
      progressBarRef.current.max = seconds.toString()
    }


  }, [audioRef.current?.onloadedmetadata, audioRef.current?.readyState])

  const changeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(audioRef.current && progressBarRef.current){
      audioRef.current.currentTime = parseInt(progressBarRef.current.value)
      // progressBarRef.current.style.setProperty('--seek-before-width', `${progressBarRef.current.value / dur}`)
    }

  }

  return (
    <div className="page">

      <header className='header'>
        <img className='header__logo' src='/image/logo.svg' alt="logo" />
        <nav className='header__nav-menu'>
          <ul className='header__menu-page'>
            <li className='header__menu-item'><img className='header__menu-image' src="/image/playlist.svg" alt="" /></li>
            <li className='header__menu-item'><img className='header__menu-image' src="/image/playlist.svg" alt="" /></li>
            <li className='header__menu-item'><img className='header__menu-image' src="/image/radio.svg" alt="" /></li>
            <li className='header__menu-item'><img className='header__menu-image' src="/image/videos.svg" alt="" /></li>
          </ul>
          <ul className='header__menu-page'>
            <li className='header__menu-item'><img className='header__menu-image' src="/image/profile.svg" alt="" /></li>
            <li className='header__menu-item'><img className='header__menu-image' src="/image/Logout.svg" alt="" /></li>
          </ul>
        </nav>
      </header>

      <main className='main'>

        <section className='home'>

          <div className='home__search'>
            <img className='home__search-img' src="/image/search.svg" alt="" />
            <input className='home__input' type="text" placeholder='search'/>
          </div>

          <div className='home__page'>

            <div className='banners'>
              <div className='banners__text-container'>
                <p className='banners__text'>Currated playlist</p>
                <div className='banners__name'>
                  <h2 className='banners__title'>R & B Hits</h2>
                  <p className='banners__description'>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
                </div>
                <div className='banners__like-container'>
                  <img className='banners__human-like' src="/image/humans.png" alt="" />
                  <img className='banners__like-logo' src="/image/Heart.svg" alt="" />
                  <p className='banners__like'>33k Likes</p>
                </div>
              </div>
              <img className='banners__artist' src="/image/photo.png" alt="" />
              <img className='banner__effect' src="/image/Vector.svg" alt="" />
            </div>

            <div className='home__chart'>
              <h2 className='chart__title'>Top charts</h2>
              <ul className='chart__list'>
                <li className='chart__item'>
                  <img className='chart__image' src="/image/rectangle1.png" alt="" />
                  <div className='chart__item-container'>
                    <h3 className='chart__item-title'>Golden age of 80s</h3>
                    <p className='chart__item-description'>Sean swadder</p>
                    <p className='chart__item-time'>2:34:45</p>
                  </div>
                  <button className='chart__item-like'><img className='chart__like-image' src="/image/like.svg" alt="" /></button>
                </li>
                <li className='chart__item'>
                  <img className='chart__image' src="/image/rectangle1.png" alt="" />
                  <div className='chart__item-container'>
                    <h3 className='chart__item-title'>Golden age of 80s</h3>
                    <p className='chart__item-description'>Sean swadder</p>
                    <p className='chart__item-time'>2:34:45</p>
                  </div>
                  <button className='chart__item-like'><img className='chart__like-image' src="/image/like.svg" alt="" /></button>
                </li>
                <li className='chart__item'>
                  <img className='chart__image' src="/image/rectangle1.png" alt="" />
                  <div className='chart__item-container'>
                    <h3 className='chart__item-title'>Golden age of 80s</h3>
                    <p className='chart__item-description'>Sean swadder</p>
                    <p className='chart__item-time'>2:34:45</p>
                  </div>
                  <button className='chart__item-like'><img className='chart__like-image' src="/image/like.svg" alt="" /></button>
                </li>
              </ul>
            </div>
          </div>

          <div className='releases'>
            <h2 className='releases__title'>New Releases</h2>
            <ul className='releases__list'>
              <li className='releases__item'>
                <img className='releases__item-image' src="/image/releases-image.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img className='releases__item-image' src="/image/releases-image.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img className='releases__item-image' src="/image/releases-image.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img className='releases__item-image' src="/image/releases-image.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img className='releases__item-image' src="/image/releases-image.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
              <li className='releases__item'>
                <img className='releases__item-image' src="/image/releases-image.png" alt="" />
                <h3 className='releases__item-title'>Sean swadder</h3>
              </li>
            </ul>
          </div>
        </section>
        <section className='player'>
          <div className='player__artist'>
            <img className='player__song-img' src="/image/releases-image.png" alt="" />
            <div className='player__artist-container'>
              <p className='player__song-title'>Seasons in</p>
              <p className='player__sing-artist'>James</p>
            </div>
          </div>

          <div className='player__bar'>
            <div className='player__btn-list'>
              <button className='player__btn player__shuffle-btn'></button>
              <button className='player__btn player__back-btn'></button>
              <button className='player__btn player__play-btn' onClick={playMusic}></button>
              <button className='player__btn player__next-btn'></button>
              <button className='player__btn player__repeat-btn'></button>
              <audio ref={audioRef} src={music}></audio>
            </div>
            <input className='player__music' type="range"  defaultValue={0} min={0} ref={progressBarRef} onChange={changeRange}/>
          </div>
          <div className='player__volume'>
            <img src="/image/volume.svg" alt="" />
            <input type="range" min={0} max={1} step={0.1} value={volume} onChange={handleVolumeChange}/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
