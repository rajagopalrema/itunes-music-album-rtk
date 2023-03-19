
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMusicAlbum } from "../action/MusicAlbumSlice";
import { AppDispatch } from "../action/Store";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Appcontainer } from "./styles/Container";

function SearchMusicAlbum() {

  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const handleSearch = (e: any) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setQuery(e.target.value);
      searchString();
    }
  };
  const searchString = () => {
    query.length > 0 ?
      dispatch(getMusicAlbum(query)) : dispatch(getMusicAlbum('null'));
  }

  return (
    <><Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '800', backgroundColor: '#D3D3D3', marginBottom: '30px' }}>
      <IconButton sx={{ p: '10px', width: '600' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, width: '600', color: '#028A0F', backgroundColor: "#ffffff", paddingLeft: '10px', fontSize: '16px' }}
        placeholder="Enter Artist / Collection or Song Name..."
        inputProps={{ 'aria-label': 'Enter Artist / Collection or Song Name...' }}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        type="textbox"
        value={query}
        data-testid='SearchName' />
      <IconButton type="button" data-testid='SearchButton' onClick={searchString} sx={{ p: '10px', backgroundColor: '#F5761A', marginLeft: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
      {(query.length > 0) ? (<Appcontainer.SearchResultText fontWeight='normal'>Search Result for: <Appcontainer.SearchResultText fontWeight='bolder'>'{query}'</Appcontainer.SearchResultText></Appcontainer.SearchResultText>) : ("")}
      </>
  );
}

export default SearchMusicAlbum