import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { SongInfo, MusicList } from "../utils/musicList";


interface MusicListState {
  musicList: SongInfo[];
  likedMusicList: SongInfo[];
  searchResult: SongInfo[];
}

const initialState: MusicListState ={
  musicList: MusicList,
  likedMusicList: [],
  searchResult: []
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

        state.searchResult = state.searchResult.map((result) => {
          if (result.id === songToLike.id) {
            return {
              ...result,
              isLiked: songToLike.isLiked
            };
          }
          return result;
        });
      }
    },
    setSearchResult: (state, action: PayloadAction<SongInfo[]> ) => {
      state.searchResult = action.payload
    }
  },
});

export const { toggleLike, setSearchResult } = musicListSlice.actions;
export default musicListSlice.reducer;
