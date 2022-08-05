import React, { useState } from "react";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          loader="Loading..."
          next={() => {
            setPage(page + 8);
          }}
          hasMore={hasMore}
        >
          {videos.map((item, i) =>
            item.noq > 0 ? (
              <Link
                to={`/quiz/${item.youtubeID}`}
                state={{ videoTitle: item.title }}
                key={i}
              >
                <Video title={item.title} id={item.youtubeID} noq={item.noq} />
              </Link>
            ) : (
              <Video
                title={item.title}
                id={item.youtubeID}
                noq={item.noq}
                key={i}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No Data Found</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Videos;
