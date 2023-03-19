import { configureStore } from "@reduxjs/toolkit";
import musicAlbumReducer from "./MusicAlbumSlice";

 const Store = configureStore({
    reducer:{
        musicAlbum: musicAlbumReducer, 
    }
})

export default Store;
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
