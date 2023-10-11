import './Player.scss'

type Props = {
  audioRef: any,
  music: any,
  progressBarRef: any,
  volume: number

  playMusic: () => void;
  changeRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Player = ({audioRef, music, playMusic, progressBarRef, changeRange, volume, handleVolumeChange}: Props) => {
  return(
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
  )
}

export default Player;
