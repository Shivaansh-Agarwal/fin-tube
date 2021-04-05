import React from "react";
import { useVideoContext } from "../../contexts/video-context.jsx";
import { usePlaylistContext } from "../../contexts/playlist-context.jsx";
import { VideoGrid } from "../Grids/Grids.jsx";

function getRequiredPlaylist(playlists, reqPlaylistId) {
  return playlists.filter(({ id }) => id === reqPlaylistId)[0];
}

export const PlaylistOpen = ({ match }) => {
  const playlistId = match.params.id;
  const videoList = useVideoContext();
  const { state: playlists } = usePlaylistContext();
  const reqPlaylist = getRequiredPlaylist(playlists, playlistId);
  const playlistVideosIds = reqPlaylist.videos;
  const playlistVideos = [];
  for (let i = 0; i < playlistVideosIds.length; i++) {
    for (let j = 0; j < videoList.length; j++) {
      if (playlistVideosIds[i] === videoList[j].id) {
        playlistVideos.push(videoList[j]);
        break;
      }
    }
  }
  return (
    <div className="playlists">
      <h1>{reqPlaylist.name}</h1>
      <VideoGrid videoList={playlistVideos} />
    </div>
  );
};
