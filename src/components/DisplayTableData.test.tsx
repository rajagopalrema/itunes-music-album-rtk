import { render, screen, RenderResult, fireEvent, within } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../action/store';
import FetchMusicData from './FetchMusicData';

export const renderSearch = (): RenderResult =>
    render(<Provider store={store}><FetchMusicData /></Provider>
    );

test("validation of inital loading of 10 data", async () => {
    renderSearch();
    const buttonElement = screen.getByTestId('SearchButton');
    const materialInput = screen.getByTestId('SearchName');
    const personNameInput = within(materialInput).getByRole('textbox');
    fireEvent.change(personNameInput, { target: { value: 'Yesudas' } })
    fireEvent.click(buttonElement);
    const results = await screen.findAllByTestId('MusicData', {}, { timeout: 10000 });
    expect(results).toHaveLength(10)
});