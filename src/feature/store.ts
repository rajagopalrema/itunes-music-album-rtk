import { configureStore } from "@reduxjs/toolkit";
import musicAlbumReducer from "./musicAlbumSlice";

 const store = configureStore({
    reducer:{
        musicAlbum: musicAlbumReducer, 
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
