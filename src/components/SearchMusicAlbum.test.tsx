import { render, screen, RenderResult } from '@testing-library/react'
import SearchMusicAlbum from "../components/SearchMusicAlbum"
import { Provider } from 'react-redux';
import store from '../action/store';

export const renderSearch = (): RenderResult =>
    render(<Provider store={store}><SearchMusicAlbum /></Provider>
    );

test("Validate PlaceHolder Text", () => {
    renderSearch();
    const textElement = screen.getByPlaceholderText("Enter Artisits / Collection or Song Name...");
    console.log(textElement);
    expect(textElement).toBeInTheDocument();
});

test("Validation number of Button Elements available", async () => {
    renderSearch();
    const buttonElement = await screen.findAllByRole('button');
    expect(buttonElement).toHaveLength(2);
});

