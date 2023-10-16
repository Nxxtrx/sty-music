import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongInfo, MusicList } from "../utils/musicList";


interface MusicListState {
  musicList: SongInfo[];
  likedMusicList: SongInfo[];
}

const initialState: MusicListState ={
  musicList: MusicList,
  likedMusicList: []
}

const musicListSlice = createSlice({
  name: 'musicList',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const songToLike = state.musicList.find((song) => song.id === action.payload)
      if(songToLike) {
        const isLikedSong = state.likedMusicList.some((liked) => liked.id === songToLike.id)
        if(!isLikedSong) {
          songToLike.isLiked = true
          state.likedMusicList.push(songToLike)
        } else {
          songToLike.isLiked = false
          state.likedMusicList = state.likedMusicList.filter((liked) => liked.id !== songToLike.id)
        }
      }

      // const songToLike = state.musicList[action.payload]
      // const isLikedId = state.likedMusicList.some((liked) => liked.id === songToLike.id)
      // if(!isLikedId) {
      //   songToLike.isLiked = true
      //   state.likedMusicList.push(songToLike)
      // } else {
      //   songToLike.isLiked = false
      //   state.likedMusicList = state.likedMusicList.filter((liked) => liked.id !== songToLike.id)
      // }
    }
  },
});

export const { toggleLike } = musicListSlice.actions;
export default musicListSlice.reducer;
