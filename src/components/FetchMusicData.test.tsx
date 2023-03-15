import { render, screen, RenderResult } from '@testing-library/react'
import FetchMusicData from "../components/FetchMusicData"
import { Provider } from 'react-redux';
import store from '../action/store';
import * as APIService from '../action/MusicAlbumSlice';

describe('Validate', () => {
})
it('Validating music info is loading', async () => {
    render(<Provider store={store}><FetchMusicData /></Provider>)
    APIService.getMusicAlbum('Yesudas');
    jest.setTimeout(10000);
    let result = await store.dispatch(APIService.getMusicAlbum('Yesudas'))
    const musicInfo = result.payload;
    console.log(musicInfo.length);
    const state = store.getState().musicAlbum;
})

test("No of data loading",  async () => {
    render(<Provider store={store}><FetchMusicData /></Provider>);
    const buttonElement =  await screen.findAllByAltText('MusicData');
});







