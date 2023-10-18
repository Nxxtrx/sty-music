import './ResultSearch.scss'
import { SongInfo } from "../../utils/musicList"
import { useDispatch, useSelector } from 'react-redux'
import { toggleLike } from '../../toolkitRedux/musicListSlice'
import React from 'react'
import { RootState } from '../../toolkitRedux/store'

type Props = {
  setCurrentSongIndex: (songList: SongInfo[], index: number) => void
}

export const ResultSearch = ({setCurrentSongIndex}: Props) => {



  const dispatch = useDispatch();
  const searchSong = useSelector((state: RootState) => state.musicList.searchResult)

  const handleToggleLike = (index: number) => {
    dispatch(toggleLike(index))

  }

  return (
    <ul className="result">
      {searchSong.map((item, index) => {
        return(
          <li className='result__item' key={index}>
            <div className='result__image-container' onClick={() => setCurrentSongIndex(searchSong, index)}>
              <img className='result__image' src={item.coverImg}  alt="" />
            </div>
            <div className='result__item-container'>
              <h3 className='result__item-title'>{item.songName}</h3>
              <p className='result__item-description'>{item.artist}</p>
            </div>
            <button className='result__item-like' onClick={() => handleToggleLike(item.id)}><img className='result__like-image' src={`${item.isLiked ? './image/liked.svg' : './image/like.svg'}`} alt="" /></button>
          </li>
        )
      })}
    </ul>
  )
}
