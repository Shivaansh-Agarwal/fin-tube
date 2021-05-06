import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlaylistContext } from "../../contexts/playlist-context";
import Axios from "axios";
import "./styles/cardVideoMain.css";

export const CardVideoMain = ({ id, name: videoName, categoryId, creator }) => {
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  const navigate = useNavigate();
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const { id: creatorId, name: creatorName, imgSrc: creatorImgSrc } = creator;
  return (
    <div
      className="videocard"
      onClick={() =>
        openVideoPage(navigate, id, videoName, categoryId, creator)
      }
      data-categoryid={categoryId}
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
        showMoreOptions={showMoreOptions}
        setShowMoreOptions={setShowMoreOptions}
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

function CardThumbnailImg({ id }) {
  return (
    <div className="vediocard__thumbnail">
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
  showMoreOptions,
  setShowMoreOptions,
}) {
  return (
    <div className="videocard__details">
      <div className="videocard__details__left">
        <div className="videocard--creator-avatar">
          <img src={creatorImgSrc} alt="creator-img" />
        </div>
      </div>
      <div className="videoCard__details__center" data-creatorid={creatorId}>
        <span className="videocard--videoname">{videoName}</span>
        <span className="videocard--creatorname">{creatorName}</span>
      </div>
      <div className="vedioCard__details__right">
        <button
          title="Add to Watchlater"
          onClick={(e) => {
            setShowMoreOptions(true);
            e.stopPropagation();
          }}
        >
          <span className="material-icons">more_vert</span>
        </button>
      </div>
      {showMoreOptions && (
        <div className="videocard__more__options">
          <button
            onClick={(e) => {
              const playlist = playlistState.find(
                (list) => list.id === "f4558066-968c-11eb-a8b3-0242ac130003"
              );
              addToWatchLaterList(playlist, videoId, playlistDispatch);
              setShowMoreOptions(false);
              e.stopPropagation();
            }}
          >
            Save to Watch Later
          </button>
          <button
            onClick={(e) => {
              setShowMoreOptions(false);
              e.stopPropagation();
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

function openVideoPage(navigate, id, videoName, categoryId, creator) {
  navigate(`/watch/${id}`, {
    state: { id, videoName, categoryId, creator },
  });
}
