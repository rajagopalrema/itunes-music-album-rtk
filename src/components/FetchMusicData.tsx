import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useSelector, useDispatch } from "react-redux";
import { getMusicAlbum } from "../action/MusicAlbumSlice";
import { IMusicAlbumData } from '../interface';
import { AppDispatch } from "../action/store";
import DisplayItunesData from "../components/SearchMusicAlbum"
import DisplayTableData from "../components/DisplayTableData";

function App() {
  // Company list state
  const musicAlbumData: IMusicAlbumData[] = useSelector((state: any) => (state.musicAlbum.musicList));
  const loading = useSelector((state: any) => (state.musicAlbum.isloading));
  const [hasMore, setHasMore] = useState(true);
  const [dataIndex, setDataIndex] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();
  const rowsPerPage = 10;

  // const handleSearch = (e: any) => {
  //   setQuery(e.target.value);
  // }
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
    return musicAlbumData.slice(0, dataIndex);
  }

  return (
    <div className="App">
      <div id="container">
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy7BBVWTBIfeoo2YkeqJBZ90nzHAiOY5fvH4hbN55s85S90OVvBzFUNDEVetgmDISyT4&usqp=CAU" style={{width:'250px', height:'200px'}}></img><h1 className="title">itunes Music List</h1></div>
        <DisplayItunesData />
        <br />
        {/* { loading && <div>
          <div className="d-flex justify-content-center">
              { <div className="spinner-border text-danger" role="status">
                <span className="sr-only"></span>
              </div>
            } </div></div>
        }
        {!loading && error ? <div>{error}</div> : null} */}

        {(musicAlbumData && musicAlbumData.length === 0) && !loading ? (
        <div className="d-flex justify-content-center">
          <p><h2 className="NoData">Ooops...No result found...</h2> </p>
        </div>
      ) :
        // (companies && companies.length > 0) && companies.map((com: IMusicAlbumData, index) => (
          <><InfiniteScroll
            pageStart={0}
            initialLoad={false}
            loadMore={LoadMoreData}
            hasMore={hasMore}
            loader={<div className="pt-60"><div className="d-flex justify-content-center">
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only"></span>
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

export default App;