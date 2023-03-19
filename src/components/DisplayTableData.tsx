import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IMusicAlbumData } from '../Types/Interface';

const DisplayTableData = ({ musicAlbumList }: { musicAlbumList: any }) => {
    return (
        (musicAlbumList && musicAlbumList.length > 0) && musicAlbumList.map((musicInfo: IMusicAlbumData) => (
            <>
                <div data-testid="MusicData">
                    <Card sx={{ display: 'flex', width: '100%', marginTop: '10px', height:'auto', backgroundColor:'#FF9F29'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '30px', backgroundColor: '#FAF3E3' }}>
                            <CardContent sx={{ flex: '1 0 auto', width:'100%'}}>
                                <Typography component="div" variant="h5">
                                    {musicInfo.artistName}
                                </Typography>
                                <Typography variant="h6" alignItems="left" color="text.secondary" component="div">
                                    {musicInfo.collectionName}
                                </Typography>
                                <Typography variant="subtitle1" alignItems="left" color="text.secondary" component="div">
                                    Price :  ${musicInfo.collectionPrice}
                                </Typography>
                                <Typography variant="subtitle1" alignItems="left" color="#db5c27" component="div">
                                    Country: {musicInfo.country}
                                </Typography>
                                <a href={musicInfo.trackViewUrl} target="_new">
                                    <Typography variant="subtitle1" alignItems="left" color="#db5c27" component="div">
                                    </Typography>View Track</a>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="play/pause">
                                    <a href={musicInfo.previewUrl} target="_new"><PlayArrowIcon sx={{ height: 60, width: 60 }}></PlayArrowIcon></a>
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 300,  marginTop:4, marginBottom:3, marginright:5, marginlef:5, borderRadius:15, objectFit:'cover'}}
                            image={musicInfo.artworkUrl100}
                            alt="Music Album" />
                    </Card>
                </div></>
        )
        )
    )
}
export default DisplayTableData