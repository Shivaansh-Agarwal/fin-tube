import React, { useState } from "react";
import { usePlaylistContext } from "../../contexts/playlist-context";
import { useModalContext } from "../../contexts/modal-context.jsx";
import "./playlists.css";
import { v4 as uuidv4 } from "uuid";
import { VideosGroupGrid } from "../Grids/Grids.jsx";
import Axios from "axios";

async function createPlaylist(
  playlistName,
  updatePlaylist,
  videoId,
  modalDispatch
) {
  const newPlaylist = {
    id: uuidv4(),
    name: playlistName,
    videos: videoId ? [videoId] : [],
  };
  try {
    const { data, status } = await Axios.post("/api/playlists", newPlaylist);
    if (status === 201) {
      updatePlaylist({ type: "CREATE", payload: data.playlist });
    }
  } catch (error) {
    console.error("ERROR while creating Playlist", error);
  } finally {
    modalDispatch({ type: "CREATE_PLAYLIST_MODAL_VISIBILITY", payload: false });
  }
}

export const CreatePlaylist = ({ playlists, updatePlaylist, videoId }) => {
  const [playlistName, setPlaylistName] = useState("");
  const { dispatch: modalDispatch } = useModalContext();

  return (
    <div className="create-playlist">
      <label htmlFor="playlist">
        Create New Playlist
        <input
          type="text"
          id="playlist"
          value={playlistName}
          onChange={(e) => {
            setPlaylistName(e.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          createPlaylist(playlistName, updatePlaylist, videoId, modalDispatch);
          setPlaylistName("");
        }}
      >
        Create PlayList
      </button>
    </div>
  );
};

export const PlaylistsListing = () => {
  const { state: playlists, dispatch: updatePlaylist } = usePlaylistContext();
  return (
    <div className="playlists">
      <h1>Playlists</h1>
      <CreatePlaylist playlists={playlists} updatePlaylist={updatePlaylist} />
      <VideosGroupGrid videosGroup={playlists} type="playlists" />
    </div>
  );
};
