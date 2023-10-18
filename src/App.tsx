import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from './toolkitRedux/store';
import './font/font.css'
import './app.scss'
import Header from './component/Header/Header';
import { Search } from './component/Search/Search';
import Home from './component/Home/Home'
import { Library } from './component/Library/Library';
import Player from './component/Player/Player';
import { SongInfo } from './utils/musicList';
import { ResultSearch } from './component/ResultSearch/ResultSearch';
import { useDispatch } from 'react-redux';
import { setSearchResult } from './toolkitRedux/musicListSlice';

function App() {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState<number>(0.1)
  const [currentSongIndex, setCurrentSongIndex] = React.useState<number>(0)
  const [outputSongList, setOutputSongList] = React.useState<SongInfo[]>(useSelector((state: RootState) =>state.musicList.musicList))
  const [seekBarPos, setSeekBarPos] = React.useState<number>(0)
  const [repeatSong, setRepeatSong] = React.useState<boolean>(false)
  const [isShuffle, setIsShuffle] = React.useState<boolean>(false)
  const [count, setCount] = React.useState<any>()

  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const progressBarRef = React.useRef<HTMLInputElement | null>(null)

  const dispatch = useDispatch()
  const musicList = useSelector((state: RootState) =>state.musicList.musicList)


  function choocePlaylist(songList: SongInfo[], index:number) {
    setOutputSongList(songList)
    setCurrentSongIndex(index)
    setCount(index)
  }

  useEffect(() => {
    if(isShuffle) {
      setOutputSongList(() => shuffleSongs(outputSongList))
    } else {
      setOutputSongList(outputSongList)
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

    if(audioRef.current && count >= 0) {
      audioRef.current.src = outputSongList[currentSongIndex].url
      audioRef.current.load()
      audioRef.current.play()
      setIsPlaying(true)
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
    if(!isPlaying) {
      setIsPlaying(true)
      audioRef.current?.play()
    } else {
      setIsPlaying(false)
      audioRef.current?.pause()
    }
  }

  function nextSong() {
    if(outputSongList[currentSongIndex] && outputSongList.length !== 0) {
      if(currentSongIndex < outputSongList.length -1 && currentSongIndex + 1) {
        setCurrentSongIndex(currentSongIndex + 1)
      } else {
        setCurrentSongIndex(0)
      }
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
    const shuffledArray = [...songsArray]

    let length = shuffledArray.length
    while(length) {
      let i = Math.floor(Math.random() * length--)
      let t = shuffledArray[length];
      shuffledArray[length] = shuffledArray[i]
      shuffledArray[i] = t
    }
    return shuffledArray
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

  const handleSearch = (search: string) => {
    const searchResult = musicList.filter(item => item.songName.toLowerCase().includes(search) || item.artist.toLowerCase().includes(search))
    dispatch(setSearchResult(searchResult))
  }

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Search handleSearch={handleSearch}/>
        <Routes>
          <Route path='/' element={<Home setCurrentSongIndex={choocePlaylist}/>} />
          <Route path='library' element={<Library  setCurrentSongIndex={choocePlaylist}/>} />
          <Route path='search' element={<ResultSearch setCurrentSongIndex={choocePlaylist}/>}/>
        </Routes>
        <Player
          audioRef={audioRef}
          url={outputSongList[currentSongIndex].url}
          artist={outputSongList[currentSongIndex].artist}
          songName={outputSongList[currentSongIndex].songName}
          coverImg={outputSongList[currentSongIndex].coverImg}
          songId={outputSongList[currentSongIndex].id}
          isLiked={outputSongList[currentSongIndex].isLiked}
          repeatSong={repeatSong}
          isShuffle={isShuffle}
          isPlaying={isPlaying}
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
