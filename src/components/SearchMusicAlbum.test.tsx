import { render, screen, RenderResult} from '@testing-library/react'
import SearchMusicAlbum from "../components/SearchMusicAlbum"
import { Provider } from 'react-redux';
import store from '../action/Store';

export const renderSearch = (): RenderResult =>
    render(<Provider store={store}><SearchMusicAlbum /></Provider>
    );

test("Validate Search Input Exists", () => {
    renderSearch();
    const textElement = screen.getByPlaceholderText("Enter Artist / Collection or Song Name...");
    expect(textElement).toBeInTheDocument();
});

test("Validate whether Search Button Exists", () => {
    renderSearch();
    const buttonElement = screen.getAllByTestId('SearchButton');
    expect(buttonElement).toBeTruthy();
});



