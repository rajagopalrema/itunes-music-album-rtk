import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMusicAlbum = createAsyncThunk(
  "musicAlbum/getMusicAlbum",
  async (query: String) => {
    try {
      console.log("Search String", query);
      const response = await axios.get(
        "https://itunes.apple.com/search?term=" + query + "&limit=200"
      );
      return response.data.results;
    } catch (error) {
    }
  });
const musicAlbumSlice = createSlice({
  name: 'musicAlbum',
  initialState: {
    musicList: [],
    isloading: false,
    error: ''
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMusicAlbum.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getMusicAlbum.fulfilled, (state, action) => {
        console.log("fullfilled", action.payload);
        state.musicList = action.payload;
        state.isloading = false;
        state.error = "";
      })
      .addCase(getMusicAlbum.rejected, (state, action) => {
        state.musicList = [];
        state.isloading = false;
        state.error = action.error.message ?? 'Error';
      })
  },
  reducers: {}
});

export default musicAlbumSlice.reducer;