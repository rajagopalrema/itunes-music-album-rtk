
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMusicAlbum } from "../MusicAlbumSlice";
import { AppDispatch } from "../store";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function DisplayItunesData() {

  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e:any) => {
    setQuery(e.target.value);
  }

  const searchString = () => {
    query.length > 0 ?
      dispatch(getMusicAlbum(query)) : dispatch(getMusicAlbum('null'));
  }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '800' }}>
      <IconButton sx={{ p: '10px', width: '900' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, width: 'auto' }}
        placeholder="Enter Artisits / Collection or Song Name..."
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleSearch}
      />
      <IconButton type="button" onClick={searchString} sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
export default DisplayItunesData