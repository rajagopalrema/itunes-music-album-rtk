import { render} from '@testing-library/react'
import FetchMusicData from "../components/FetchMusicData"
import { Provider } from 'react-redux';
import * as APIService from '../feature/musicAlbumSlice';
import store from "../feature/store";

describe('Validate', () => {
})
it('Validating music info is loading', async () => {
    render(<Provider store={store}><FetchMusicData /></Provider>)
    jest.setTimeout(10000);
    let result = await store.dispatch(APIService.getMusicAlbum('null'))
    const musicInfo = result.payload;
    expect(musicInfo).toHaveLength(200);
})








