import React from "react";
import "./watchlater.css";
import { VideoGrid } from "../Grids/Grids.jsx";
import { useVideoContext } from "../../contexts/video-context.jsx";
// import { useWatchLaterContext } from "../../contexts/watchLater-context.jsx";
import { usePlaylistContext } from "../../contexts/playlist-context";

export const WatchLaterListing = () => {
  const videoList = useVideoContext();
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  const watchLaterVideosList = playlistState.find(
    (playlist) => playlist.id === "f4558066-968c-11eb-a8b3-0242ac130003"
  ).videos;
  const watchLaterFinalList = watchLaterVideosList.map((videoId) => {
    return videoList.find((video) => videoId === video.id);
  });
  return (
    <div className="watchlater">
      {watchLaterVideosList.length === 0 && (
        <p>No videos added to Watch Later...</p>
      )}
      {watchLaterVideosList.length !== 0 && (
        <VideoGrid videoList={watchLaterFinalList} />
      )}
    </div>
  );
};
