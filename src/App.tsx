
import FetchMusicData from "./components/FetchMusicData";

function App() {
  // // Company list state
  // const musicAlbumData: IMusicAlbumData[] = useSelector((state: any) => (state.musicAlbum.musicList));
  // const loading = useSelector((state: any) => (state.musicAlbum.isloading));
  // const [hasMore, setHasMore] = useState(true);
  // const [dataIndex, setDataIndex] = useState<number>(0);
  // const dispatch = useDispatch<AppDispatch>();
  // const rowsPerPage = 10;

  // // const handleSearch = (e: any) => {
  // //   setQuery(e.target.value);
  // // }
  // useEffect(() => {
  //   dispatch(getMusicAlbum('null'));
  // }, [dispatch]);

  // useEffect(() => {
  //   setDataIndex(rowsPerPage);
  //   if (musicAlbumData.length > rowsPerPage) setHasMore(true);
  // }, [musicAlbumData]);

  // const LoadMoreData = () => {
  //   if (dataIndex >= musicAlbumData.length) {
  //     setHasMore(false);
  //   }
  //   else {
  //     setTimeout(() => {
  //       setDataIndex(dataIndex + rowsPerPage);
  //     }, 500)
  //   }
  // }
  // const fetchMoreData = (): IMusicAlbumData[] => {
  //   return musicAlbumData.slice(0, dataIndex);
  // }

  return (
<FetchMusicData />
  )
}

export default App;