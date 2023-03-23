import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useSelector, useDispatch } from "react-redux";
import { getMusicAlbum } from "../feature/musicAlbumSlice";
import { IMusicAlbumData } from '../types/MusicAlbumData';
import { AppDispatch } from "../feature/store";
import SearchMusicAlbum from "../components/SearchMusicAlbum"
import DisplayTableData from "../components/DisplayTableData";
import { Appcontainer } from "./styles/Container";

function FetchMusicData() {
  const musicAlbumData: IMusicAlbumData[] = useSelector((state: any) => (state.musicAlbum.musicList));
  const loading = useSelector((state: any) => (state.musicAlbum.isloading));
  const [hasMore, setHasMore] = useState(true);
  const [dataIndex, setDataIndex] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const rowsPerPage = 10;

  useEffect(() => {
    dispatch(getMusicAlbum('null'));
  }, [dispatch]);

  useEffect(() => {
    setDataIndex(rowsPerPage);
    if (musicAlbumData.length > rowsPerPage) setHasMore(true);
  }, [musicAlbumData]);

  const LoadMoreData = () => {
    if (dataIndex >= musicAlbumData.length) {
      setHasMore(false);
    }
    else {
      setTimeout(() => {
        setDataIndex(dataIndex + rowsPerPage);
      }, 500)
    }
  }
  const fetchMoreData = (): IMusicAlbumData[] => {
    return musicAlbumData && musicAlbumData.length >0 ? musicAlbumData.slice(0, dataIndex):[];
  }

  return (
    <div className="App">
      <div id="container">
      <div><Appcontainer.MainTitle><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy7BBVWTBIfeoo2YkeqJBZ90nzHAiOY5fvH4hbN55s85S90OVvBzFUNDEVetgmDISyT4&usqp=CAU" alt="Logo" style={{width:'150px', height:'100px'}}></img>itunes Music List</Appcontainer.MainTitle></div>
        <SearchMusicAlbum />
        
        {(musicAlbumData && musicAlbumData.length === 0) && !loading ? (
          <Appcontainer.DataNotAvailable>Ooops...No result found...</Appcontainer.DataNotAvailable>
      ) :
          <><InfiniteScroll
            pageStart={0}
            initialLoad={false}
            loadMore={LoadMoreData}
            hasMore={hasMore}
            loader={<div className="pt-60"><div className="d-flex justify-content-center">
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">data loading in progress...</span>
              </div>
            </div></div>}
            useWindow={true}>
              <DisplayTableData musicAlbumList = {fetchMoreData()} />
          </InfiniteScroll>
      </>
        }
      </div>
    </div>
  );
}

export default FetchMusicData;