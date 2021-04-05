import React from "react";
import { Link } from "react-router-dom";
import { ModalDeletePlaylist } from "../Modal/Modal.jsx";
import { useModalContext } from "../../contexts/modal-context.jsx";
import "./cards.css";

export const VideoCard = ({
  id,
  name: videoName,
  categoryId,
  creator,
  playlists,
}) => {
  const { id: creatorId, name: creatorName, imgSrc: creatorImgSrc } = creator;
  return (
    <Link className="videocard" to={`/watch/${id}`}>
      <div className="vediocard__thumbnail">
        <img
          src={`http://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt="thumbnail"
        />
      </div>
      <div className="videocard__details">
        <div className="videocard__details__left">
          <div className="videocard--creator-avatar">
            <img src={creatorImgSrc} alt="creator-img" />
          </div>
        </div>
        <div className="videoCard__details__center">
          <span className="videocard--videoname">{videoName}</span>
          <span className="videocard--creatorname">{creatorName}</span>
        </div>
        <div className="vedioCard__details__right">
          <span className="material-icons">more_vert</span>
        </div>
      </div>
    </Link>
  );
};

export const VideosGroupCard = ({ id, name, videos, type }) => {
  //TODO: Rename CSS for this.
  const { dispatch: modalDispatch } = useModalContext();
  const endpoint =
    type === "playlists" ? `/playlists/${id}` : `/categories/${id}`;
  return (
    <Link className="playlist__card" to={endpoint}>
      <div className="playlist__card__thumbnail">
        <img src={`https://picsum.photos/200/160/`} alt="thumbnail" />
      </div>
      <div className="playlist__card__details">
        <div className="playlist__card--name">{name}</div>
        <div className="playlist__card--videoCount">
          Number of Videos: {videos ? videos.length : 0}
        </div>
        {type === "playlists" && (
          <button
            onClick={() => {
              modalDispatch({
                type: "DELETE_PLAYLIST_MODAL_VISIBILITY",
                payload: true,
              });
            }}
          >
            Delete Playlist
          </button>
        )}
      </div>
      <ModalDeletePlaylist playlistId={id} />
    </Link>
  );
};
