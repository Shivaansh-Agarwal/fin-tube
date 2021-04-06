import React from "react";
import { useHistory } from "react-router-dom";
import { usePlaylistContext } from "../../contexts/playlist-context";
import Axios from "axios";
import "./cards.css";

export const VideoCard = ({
  id,
  name: videoName,
  categoryId,
  creator,
  playlists,
}) => {
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  const history = useHistory();
  const { id: creatorId, name: creatorName, imgSrc: creatorImgSrc } = creator;
  return (
    <div
      className="videocard"
      onClick={() => {
        history.push(`/watch/${id}`);
      }}
    >
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
          <button
            title="Add to Watchlater"
            onClick={(e) => {
              const playlist = playlistState.find(
                (list) => list.id === "f4558066-968c-11eb-a8b3-0242ac130003"
              );
              addToWatchLaterList(playlist, id, playlistDispatch);
              e.stopPropagation();
            }}
          >
            <span className="material-icons">playlist_add</span>
          </button>
        </div>
      </div>
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
