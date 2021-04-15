import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Axios from "axios";

import {
  ModalAddToPlaylist,
  ModalCreatePlaylist,
} from "../../components/Modal";

import { usePlaylistContext } from "../../contexts/playlist-context";
import { useVideoContext } from "../../contexts/video-context.jsx";
import { useCategoriesContext } from "../../contexts/categories-context.jsx";
import { GridVideosRecommendations } from "../../components/Grids";

import "./watch.css";

export const Watch = () => {
  const { state } = useLocation();
  const { id, videoName, categoryId, creator } = state;
  const [isModalOpenAddToPlaylist, setIsModalOpenAddToPlaylist] = useState(
    false
  );
  const [isModalOpenCreatePlaylist, setIsModalOpenCreatePlaylist] = useState(
    false
  );
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  const videoList = useVideoContext();
  const { state: categories } = useCategoriesContext();
  const reqCategory = categories.filter(({ id }) => id === categoryId)[0];
  const categoryVideoIds = reqCategory.videos;
  const categoryVideos = [];
  for (let i = 0; i < categoryVideoIds.length; i++) {
    for (let j = 0; j < videoList.length; j++) {
      if (categoryVideoIds[i] === videoList[j].id) {
        categoryVideos.push(videoList[j]);
        break;
      }
    }
  }

  return (
    <div className="watch">
      <div className="watch__video">
        <div className="player__wrapper">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        <div className="watch__details">
          <div>
            <strong>{videoName}</strong>
          </div>
          <div>{creator.name}</div>
          <div className="watch__buttons">
            <button
              onClick={() => {
                setIsModalOpenAddToPlaylist(true);
              }}
            >
              Add To Playlist
            </button>
            <button
              onClick={() => {
                const playlist = playlistState.find(
                  (list) => list.id === "f4558066-968c-11eb-a8b3-0242ac130003"
                );
                addToWatchLaterList(playlist, id, playlistDispatch);
              }}
            >
              Save to Watch Later
            </button>
          </div>
        </div>
      </div>
      <div className="watch__recommendations">
        <GridVideosRecommendations videoList={categoryVideos} />
      </div>
      <ModalAddToPlaylist
        videoId={id}
        modalVisibilityState={[
          isModalOpenAddToPlaylist,
          setIsModalOpenAddToPlaylist,
          setIsModalOpenCreatePlaylist,
        ]}
      />
      <ModalCreatePlaylist
        videoId={id}
        modalVisibilityState={[
          isModalOpenCreatePlaylist,
          setIsModalOpenCreatePlaylist,
        ]}
      />
    </div>
  );
};

async function addToWatchLaterList(playlist, videoId, playlistDispatch) {
  try {
    const updatedPlaylist = {
      ...playlist,
      videos: [...playlist.videos, videoId],
    };
    const { data, status } = await Axios.put(
      `/api/playlists/${playlist.id}`,
      updatedPlaylist
    );
    if (status === 200) {
      playlistDispatch({ type: "UPDATE", payload: data.playlist });
    }
  } catch (e) {
    console.error("Error while adding video to Watch Later List", e);
  }
}
