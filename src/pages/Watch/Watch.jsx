import React from "react";
import { useLocation } from "react-router-dom";
import "./watch.css";
import ReactPlayer from "react-player";
import {
  ModalAddToPlaylist,
  ModalCreatePlaylist,
} from "../../components/Modal/Modal.jsx";
import { useModalContext } from "../../contexts/modal-context.jsx";

import { useVideoContext } from "../../contexts/video-context.jsx";
import { useCategoriesContext } from "../../contexts/categories-context.jsx";
import { GridVideosRecommendations } from "../../components/Grids";

export const Watch = () => {
  const { state } = useLocation();
  const { id, videoName, categoryId, creator } = state;
  console.log(id, videoName, categoryId);

  const { dispatch: modalDispatch } = useModalContext();

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
                modalDispatch({
                  type: "ADD_PLAYLIST_MODAL_VISIBILITY",
                  payload: true,
                });
              }}
            >
              Add To Playlist
            </button>
            <button>Add to Watch Later</button>
          </div>
        </div>
      </div>
      <div className="watch__recommendations">
        <GridVideosRecommendations videoList={categoryVideos} />
      </div>
      <ModalAddToPlaylist videoId={id} />
      <ModalCreatePlaylist videoId={id} />
    </div>
  );
};
