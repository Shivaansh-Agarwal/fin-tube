import React from "react";
import { Link } from "react-router-dom";
import { ModalDeletePlaylist } from "../Modal/Modal.jsx";
import { useModalContext } from "../../contexts/modal-context.jsx";
import "./cards.css";

/**
 * This Component is used to display a collection of videos: playlist, categories.
 */
export const VideosGroupCard = ({ id, name, videos, type }) => {
  const { dispatch: modalDispatch } = useModalContext();
  const endpoint =
    type === "playlists" ? `/playlists/${id}` : `/categories/${id}`;
  let thumbnailImgSrc = "https://picsum.photos/200/160/";
  if (videos && videos.length !== 0) {
    thumbnailImgSrc = `http://img.youtube.com/vi/${videos[0]}/hqdefault.jpg`;
  }
  return (
    <div className="videos-group__card">
      <Link to={endpoint}>
        <div className="videos-group__card__thumbnail">
          <img src={thumbnailImgSrc} alt="thumbnail" />
          <div className="videos-group__card--info">
            <div>{videos ? videos.length : 0}</div>
            <div>
              <span className="material-icons">playlist_play</span>
            </div>
          </div>
        </div>
        <div className="videos-group__card__details">
          <div className="videos-group__card--name">{name}</div>
          <div className="videos-group__card--videoCount">
            <span>{videos ? videos.length : 0} Videos</span>
          </div>
        </div>
      </Link>
      <div className="videos-group__card__buttons">
        {type === "playlists" && (
          <button
            onClick={(e) => {
              modalDispatch({
                type: "DELETE_PLAYLIST_MODAL_VISIBILITY",
                payload: true,
              });
              e.stopPropagation();
            }}
          >
            <span className="material-icons">delete</span>
          </button>
        )}
      </div>
      <ModalDeletePlaylist playlistId={id} />
    </div>
  );
};
