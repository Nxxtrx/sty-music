import { useSelector } from 'react-redux'
import './Library.scss'
import { RootState } from '../../toolkitRedux/store'

type Props = {
  setCurrentSongIndex: (index: number) => void
}

export const Library =({setCurrentSongIndex}: Props) => {


  const isLikedSongList  = useSelector((state: RootState) => state.musicList.likedMusicList)
  return(
    <section className="library">
      <h2 className='library__title'>Liked song</h2>
      <ul className='library__container'>
        {isLikedSongList.map((item, index) => {
          return (
            <li className='library__item' key={index} onClick={() => setCurrentSongIndex(index)}>
              <div className='library__image-container'>
                <img className='library__item-image' src={item.coverImg}  alt="" />
              </div>
              <h3 className='library__item-title'>{item.artist}</h3>
              <p className='library__item-description'>{item.songName}</p>
            </li>
          )
        })}

      </ul>
    </section>
  )
}
