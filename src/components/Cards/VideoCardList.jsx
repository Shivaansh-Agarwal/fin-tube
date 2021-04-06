import React from "react";
import { useHistory } from "react-router-dom";
import { usePlaylistContext } from "../../contexts/playlist-context";
import Axios from "axios";
import "./styles/videocard-list.css";

export const VideoCardList = ({ id, name: videoName, categoryId, creator }) => {
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  const history = useHistory();
  const { id: creatorId, name: creatorName, imgSrc: creatorImgSrc } = creator;
  return (
    <div
      className="videocard__list"
      onClick={() => openVideoPage(history, id)}
      data-categoryId={categoryId}
    >
      <CardThumbnailImg id={id} />
      <CardDetails
        videoId={id}
        creatorImgSrc={creatorImgSrc}
        videoName={videoName}
        creatorName={creatorName}
        creatorId={creatorId}
        playlistState={playlistState}
        playlistDispatch={playlistDispatch}
      />
    </div>
  );
};

function CardThumbnailImg({ id }) {
  return (
    <div className="videocard__list__thumbnail">
      <img
        src={`http://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="thumbnail"
      />
    </div>
  );
}

function CardDetails({
  videoId,
  creatorImgSrc,
  videoName,
  creatorName,
  creatorId,
  playlistState,
  playlistDispatch,
}) {
  return (
    <div className="videocard__list--details__wrapper">
      <div className="videocard__list--creator-avatar">
        <img src={creatorImgSrc} alt="creator-img" />
      </div>
      <div className="videocard__list--details" data-creatorid={creatorId}>
        <div className="videocard__list--detials-inner">
          <span className="videocard--videoname">{videoName}</span>
          <span className="videocard--creatorname">{creatorName}</span>
        </div>
        <div className="videocard__list--buttons">
          <button
            onClick={(e) => {
              //TODO
              e.stopPropagation();
            }}
          >
            <span className="material-icons">more_vert</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function openVideoPage(history, id) {
  history.push(`/watch/${id}`);
}
