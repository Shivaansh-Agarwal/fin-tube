import React, { useState } from "react";
import { usePlaylistContext } from "../../contexts/playlist-context";
import { useModalContext } from "../../contexts/modal-context.jsx";
import "./playlists.css";
import { v4 as uuidv4 } from "uuid";
import { GridVideosGroup } from "../../components/Grids";
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
      <label htmlFor="create-playlist">
        <div style={{ textAlign: "center", marginBottom: "0.2rem" }}>
          Create New Playlist
        </div>
        <input
          type="text"
          id="create-playlist"
          value={playlistName}
          onChange={(e) => {
            setPlaylistName(e.target.value);
          }}
        />
      </label>
      <button
        style={{ marginTop: "0.2rem", marginBottom: "0.5rem" }}
        onClick={() => {
          createPlaylist(playlistName, updatePlaylist, videoId, modalDispatch);
          setPlaylistName("");
        }}
        disabled={playlistName === "" ? true : false}
      >
        Create PlayList
      </button>
    </div>
  );
};

export const PlaylistsListing = () => {
  const { state: playlists, dispatch: updatePlaylist } = usePlaylistContext();
  const playlistsExceptWatchLater = playlists.filter(
    (playlist) => playlist.id !== "f4558066-968c-11eb-a8b3-0242ac130003"
  );
  return (
    <div className="playlists">
      <CreatePlaylist playlists={playlists} updatePlaylist={updatePlaylist} />
      <GridVideosGroup
        videosGroup={playlistsExceptWatchLater}
        type="playlists"
      />
    </div>
  );
};
