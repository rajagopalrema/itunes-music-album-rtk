import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IMusicAlbumData } from '../interface';

const DisplayTableData = ({ musicAlbumList }: { musicAlbumList: any }) => {

    return (
        (musicAlbumList && musicAlbumList.length > 0) && musicAlbumList.map((musicInfo: IMusicAlbumData) => (
            <>
                <div>
                    <Card sx={{ display: 'flex', width: '100%', marginTop: '20px', height:'auto',backgroundColor: '#6495ED' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '40px', backgroundColor: '#ffffff' }}>
                            <CardContent sx={{ flex: '1 0 auto', height: 'auto' }}>
                                <Typography component="div" variant="h5" color="#565656">
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
                            sx={{ width: 300, objectFit: "cover",marginTop: 5, alignContent:'top'}}
                            image={musicInfo.artworkUrl100}
                            alt="Live from space album cover" />
                    </Card>
                </div></>
        )
        )
    )
}
export default DisplayTableData