import React from 'react'
import './Home.scss'
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../../toolkitRedux/musicListSlice';
import { SongInfo } from '../../utils/musicList';
import { RootState } from '../../toolkitRedux/store';
const vector: string = require("../../utils/image/vector.svg").default
const artistPhoto = require('../../utils/image/photo.png')
const humans = require('../../utils/image/humans.png')
const heart: string = require("../../utils/image/Heart.svg").default
const liked: string = require("../../utils/image/liked.svg").default
const like: string = require("../../utils/image/like.svg").default

type Props = {
  setCurrentSongIndex: (songList: SongInfo[], index: number) => void
}

const Home = React.memo(({setCurrentSongIndex}:Props) => {

  const dispatch = useDispatch();

  const music = useSelector((state: RootState) =>state.musicList.musicList)

  const handleToggleLike = React.useCallback((index: number) => {
    dispatch(toggleLike(index))
  }, [dispatch])

  return (
    <section className='home'>
      <div className='home__page'>
        <div className='banners'>
          <div className='banners__text-container'>
            <p className='banners__text'>Currated playlist</p>
            <div className='banners__name'>
              <h2 className='banners__title'>R & B Hits</h2>
              <p className='banners__description'>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
            </div>
            <div className='banners__like-container'>
              <img className='banners__human-like' src={humans} alt="" />
              <img className='banners__like-logo' src={heart} alt="" />
              <p className='banners__like'>33k Likes</p>
            </div>
          </div>
          <img className='banners__artist' src={artistPhoto} alt="" />
          <img className='banner__effect' src={vector} alt="" />
        </div>

        <div className='home__chart'>
          <h2 className='chart__title'>Top charts</h2>
          <ul className='chart__list'>
            {music.slice(0, 3).map((item, index) => {
              return (
                <li className='chart__item' key={index}>
                  <div className='chart__image-container' onClick={() => setCurrentSongIndex(music, index)}>
                    <img className='chart__image' src={item.coverImg}  alt="" />
                  </div>
                  <div className='chart__item-container'>
                    <h3 className='chart__item-title'>{item.songName}</h3>
                    <p className='chart__item-description'>{item.artist}</p>
                  </div>
                  <button className='chart__item-like' onClick={() => handleToggleLike(item.id)}><img className='chart__like-image' src={`${item.isLiked ? liked : like}`} alt="" /></button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className='releases'>
        <h2 className='releases__title'>New Releases</h2>
        <ul className='releases__list'>
          {music.map((item, index) => {
            return (
              <li className='releases__item' key={index}>
                <div className='releases__image-container' onClick={() => setCurrentSongIndex(music, index)}>
                  <img className='releases__item-image' src={item.coverImg}  alt="" />
                </div>
                <h3 className='releases__item-title'>{item.artist}</h3>
                <p className='releases__item-description'>{item.songName}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
})

export default Home;
