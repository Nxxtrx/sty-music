import './Home.scss'

const Home = () => {
  return (
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
  )
}

export default Home;
