import React, {ChangeEvent} from 'react';
import './font/font.css'
import './app.scss'
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import Player from './component/Player/Player';
import { moviesApi } from './api';
const music = 'https://www.youtube.com/watch?v=88IGhXL925U&list=LL&index=2'





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
      <Header />

      <main className="main">
        <Home />
        <Player
          audioRef={audioRef}
          music={music}
          playMusic={playMusic}
          progressBarRef={progressBarRef}
          changeRange={changeRange}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
        />
      </main>
    </div>
  );
}

export default App;
