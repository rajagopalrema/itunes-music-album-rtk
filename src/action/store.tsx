import { configureStore } from "@reduxjs/toolkit";
import musicAlbumReducer from "./MusicAlbumSlice";

 const store = configureStore({
    reducer:{
        musicAlbum: musicAlbumReducer, 
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
