import './Player.scss'

type Props = {
  audioRef: any,
  url: string,
  artist: string,
  songName: string,
  coverImg: string
  progressBarRef: any,
  volume: number,
  seekBarPos:number,

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
  return(
    <section className='player'>
      <div className='player__artist'>
        <img className='player__song-img' src={coverImg} alt="" />
        <div className='player__artist-container'>
          <p className='player__song-title'>{songName}</p>
          <p className='player__sing-artist'>{artist}</p>
        </div>
      </div>

      <div className='player__bar'>
        <div className='player__btn-list'>
          <button className='player__btn player__shuffle-btn' onClick={toggleShuffle}></button>
          <button className='player__btn player__back-btn' onClick={previousSong}></button>
          <button className='player__btn player__play-btn' onClick={playMusic}></button>
          <button className='player__btn player__next-btn' onClick={nextSong}></button>
          <button className='player__btn player__repeat-btn' onClick={toggleRepeat}></button>
          <audio ref={audioRef} src={url} onTimeUpdate={handleTimeUpdate} autoPlay></audio>
        </div>
        <input className='player__music' type="range" min={0} step={0.01} value={seekBarPos} ref={progressBarRef} onChange={changeRange}/>
      </div>
      <div className='player__volume'>
        <img src="/image/volume.svg" alt="" />
        <input type="range" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange}/>
      </div>
    </section>
  )
}

export default Player;
