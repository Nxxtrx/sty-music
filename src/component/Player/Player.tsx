import './Player.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLike } from '../../toolkitRedux/musicListSlice'
import { RootState } from '../../toolkitRedux/store'
import { useEffect, useState } from 'react'

const liked: string = require("../../utils/image/liked.svg").default
const unLike: string = require("../../utils/image/like.svg").default
const volumeIcon: string = require("../../utils/image/volume.svg").default


type Props = {
  audioRef: any,
  url: string,
  artist: string,
  songName: string,
  coverImg: string,
  songId: number,
  isLiked: Boolean,
  progressBarRef: any,
  volume: number,
  seekBarPos:number,
  repeatSong: boolean,
  isShuffle: boolean,
  isPlaying: boolean,

  playMusic: () => void;
  changeRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleTimeUpdate: () => void,
  nextSong: () => void,
  previousSong: () => void,
  toggleRepeat: () => void,
  toggleShuffle: () => void,
}

const Player = (
  {
    audioRef,
    url,
    artist,
    songName,
    coverImg,
    songId,
    isLiked,
    repeatSong,
    isShuffle,
    isPlaying,
    playMusic,
    progressBarRef,
    changeRange,
    volume,
    seekBarPos,
    handleVolumeChange,
    handleTimeUpdate,
    nextSong,
    previousSong,
    toggleRepeat,
    toggleShuffle
  }: Props) => {

    const [like, setLike] = useState(false)

    const dispatch = useDispatch();

    const handleToggleLike = (index: number) => {
      dispatch(toggleLike(index))
    }

    const likedMusicList = useSelector((state: RootState) =>state.musicList.likedMusicList)


    useEffect(() => {
      if(likedMusicList.some((item) => item.id === songId)){
        setLike(true)
      } else {
        setLike(false)
      }
    }, [handleToggleLike])

  return(
    <section className='player'>
      <div className='player__artist'>
        <img className='player__song-img' src={coverImg} alt="" />
        <div className='player__artist-container'>
          <p className='player__song-title'>{songName}</p>
          <p className='player__sing-artist'>{artist}</p>
        </div>
        <button className='player__item-like' onClick={() => handleToggleLike(songId)}><img className='player__like-image' src={`${like ? liked : unLike}`} alt="" /></button>
      </div>

      <div className='player__bar'>
        <div className='player__btn-list'>
          <button className={`player__btn player__shuffle-btn ${isShuffle ? 'player__shuffle-btn_type_active' : ''}`} onClick={toggleShuffle}></button>
          <button className='player__btn player__back-btn' onClick={previousSong}></button>
          <button className={`player__btn player__play-btn ${isPlaying ? 'player__play-btn_type_pause' : ''}`} onClick={playMusic}></button>
          <button className='player__btn player__next-btn' onClick={nextSong}></button>
          <button className={`player__btn player__repeat-btn ${repeatSong ? 'player__repeat-btn_type_active' : ''}`} onClick={toggleRepeat}></button>
          <audio ref={audioRef} src={url} onTimeUpdate={handleTimeUpdate}></audio>
        </div>
        <input className='player__music' type="range" min={0} step={0.01} value={seekBarPos} ref={progressBarRef} onChange={changeRange}/>
      </div>
      <div className='player__volume'>
        <img src={volumeIcon} alt="" />
        <input type="range" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange}/>
      </div>
    </section>
  )
}

export default Player;
