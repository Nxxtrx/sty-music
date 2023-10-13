import React, { useEffect } from 'react';
import './font/font.css'
import './app.scss'
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import Player from './component/Player/Player';
import { MusicList } from './utils/musicList';
import { SongInfo } from './utils/musicList';


function App() {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState<number>(0.1)
  const [currentSongIndex, setCurrentSongIndex] = React.useState<number>(0)
  const [outputSongList, setOutputSongList] = React.useState<SongInfo[]>(MusicList)
  const [seekBarPos, setSeekBarPos] = React.useState<number>(0)
  const [repeatSong, setRepeatSong] = React.useState<boolean>(false)
  const [isShuffle, setIsShuffle] = React.useState<boolean>(false)

  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const progressBarRef = React.useRef<HTMLInputElement | null>(null)


  useEffect(() => {
    if(isShuffle) {
      setOutputSongList(() => shuffleSongs(MusicList))
    } else {
      setOutputSongList(MusicList)
    }
  }, [isShuffle])

  React.useEffect(() => {
    if(isPlaying) {
      audioRef.current?.play().catch((err) => console.error(err))
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
      audioRef.current.src = outputSongList[currentSongIndex].url
      audioRef.current.load()
    }
  }, [currentSongIndex])

  React.useEffect(() => {
    if(audioRef.current && progressBarRef.current){
      const seconds = Math.floor(audioRef.current?.duration)
      progressBarRef.current.max = seconds.toString()
    }
  }, [audioRef.current?.onloadedmetadata, audioRef.current?.readyState])

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", () => {
        if(repeatSong && audioRef.current) {
          audioRef.current.currentTime = 0
          audioRef.current.play()
        } else {
          nextSong()
        }
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", nextSong);
      }
    };
  }, [currentSongIndex, repeatSong]);



  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  function playMusic() {
    setIsPlaying(!isPlaying)
  }

  function nextSong() {
    if(currentSongIndex < outputSongList.length -1) {
      setCurrentSongIndex(currentSongIndex + 1)
    } else {
      setCurrentSongIndex(0)
    }
  }

  function previousSong() {
    if(currentSongIndex !== 0) {
      setCurrentSongIndex(currentSongIndex - 1)

    } else {
      setCurrentSongIndex(0)
    }
  }

  function toggleRepeat() {
    setRepeatSong(!repeatSong)
  }

  function toggleShuffle() {
    setIsShuffle(!isShuffle)
  }

  function shuffleSongs(songsArray: SongInfo[]): SongInfo[] {
    let length = songsArray.length
    while(length) {
      let i = Math.floor(Math.random() * length--)
      let t = songsArray[length];
      songsArray[length] = songsArray[i]
      songsArray[i] = t
    }
    return songsArray
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
          url={outputSongList[currentSongIndex].url}
          artist={outputSongList[currentSongIndex].artist}
          songName={outputSongList[currentSongIndex].songName}
          coverImg={outputSongList[currentSongIndex].coverImg}
          playMusic={playMusic}
          progressBarRef={progressBarRef}
          changeRange={changeRange}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
          handleTimeUpdate={handleTimeUpdate}
          nextSong={nextSong}
          previousSong={previousSong}
          toggleRepeat={toggleRepeat}
          toggleShuffle={toggleShuffle}
          seekBarPos={seekBarPos}
        />
      </main>
    </div>
  );
}

export default App;
