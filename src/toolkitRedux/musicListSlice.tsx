import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongInfo } from "../utils/musicList";

interface MusicListState {
  musicList: SongInfo[];
}

const initialState: MusicListState ={
  musicList: []
}

const musicListSlice = createSlice({
  name: 'musicList',
  initialState,
  reducers: {
    setMusicList: (state, action: PayloadAction<SongInfo[]>) => {
      state.musicList = action.payload;
    },
  },
});

export const { setMusicList } = musicListSlice.actions;
export default musicListSlice.reducer;
