
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMusicAlbum } from "../action/MusicAlbumSlice";
import { AppDispatch } from "../action/store";
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
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '800', backgroundColor:'#D3D3D3'}}>
      <IconButton sx={{ p: '10px', width: '600' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, width: '600', color:'#028A0F', backgroundColor:"#ffffff", paddingLeft:'10px', fontSize:'16px'}}
        placeholder="Enter Artisits / Collection or Song Name..."
        inputProps={{ 'aria-label': 'Enter Artisits / Collection or Song Name...' }}
        onChange={handleSearch}
      />
      <IconButton type="button" onClick={searchString} sx={{ p: '10px', backgroundColor:'#F5761A', marginLeft:'10px'}} aria-label="search" >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
export default DisplayItunesData