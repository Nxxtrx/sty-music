import React, { useEffect } from 'react';
import './font/font.css'
import './app.scss'
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import Player from './component/Player/Player';
import { MusicList } from './utils/musicList';

function App() {


  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState<number>(1.0)
  const [currentSongIndex, setCurrentSongIndex] = React.useState<number>(0)
  const [seekBarPos, setSeekBarPos] = React.useState<number>(0)

  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const progressBarRef = React.useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if(isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  React.useEffect(() => {
    if(audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  React.useEffect(() => {
    if(audioRef.current) {
      audioRef.current.src = MusicList[currentSongIndex].url
      audioRef.current.load()
    }
  }, [currentSongIndex])

  React.useEffect(() => {
    if(audioRef.current && progressBarRef.current){
      const seconds = Math.floor(audioRef.current?.duration)
      progressBarRef.current.max = seconds.toString()
    }
  }, [audioRef.current?.onloadedmetadata, audioRef.current?.readyState])


  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  function playMusic() {
    setIsPlaying(!isPlaying)
  }

  function nextSong() {
    if(currentSongIndex < MusicList.length -1 && audioRef.current) {
      setCurrentSongIndex(currentSongIndex + 1)

    } else {
      setCurrentSongIndex(0)
    }
  }

  const handleTimeUpdate = () => {
    if(audioRef.current && progressBarRef.current){
      setSeekBarPos(audioRef.current.currentTime)
      progressBarRef.current.value = seekBarPos.toString()
    }
  }

  const changeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(audioRef.current && progressBarRef.current){
      audioRef.current.currentTime = parseInt(progressBarRef.current.value)
    }
  }

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Home />
        <Player
          audioRef={audioRef}
          url={MusicList[currentSongIndex].url}
          artist={MusicList[currentSongIndex].artist}
          songName={MusicList[currentSongIndex].songName}
          coverImg={MusicList[currentSongIndex].coverImg}
          playMusic={playMusic}
          progressBarRef={progressBarRef}
          changeRange={changeRange}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
          handleTimeUpdate={handleTimeUpdate}
          nextSong={nextSong}
          seekBarPos={seekBarPos}
        />
      </main>
    </div>
  );
}

export default App;
