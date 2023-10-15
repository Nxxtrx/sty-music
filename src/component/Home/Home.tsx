import './Home.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setMusicList } from '../../toolkitRedux/musicListSlice';
import { MusicList } from '../../utils/musicList';
import React from 'react';
import { RootState } from '../../toolkitRedux/store';

const Home: React.FC = () => {

  const dispatch = useDispatch();
  const music = useSelector((state: RootState) =>state.musicList.musicList)

  React.useEffect(() => {
    dispatch(setMusicList(MusicList))
  }, [dispatch])


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
            {music.slice(0, 3).map((item) => {
              return (
                <li className='chart__item'>
                  <img className='chart__image' src={item.coverImg} alt="" />
                  <div className='chart__item-container'>
                    <h3 className='chart__item-title'>{item.songName}</h3>
                    <p className='chart__item-description'>{item.artist}</p>
                  </div>
                  <button className='chart__item-like'><img className='chart__like-image' src="/image/like.svg" alt="" /></button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className='releases'>
        <h2 className='releases__title'>New Releases</h2>
        <ul className='releases__list'>
          {music.map((item) => {
            return (
              <li className='releases__item'>
                <img className='releases__item-image' src={item.coverImg} alt="" />
                <h3 className='releases__item-title'>{item.artist}</h3>
                <p className='releases__item-description'>{item.songName}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Home;
