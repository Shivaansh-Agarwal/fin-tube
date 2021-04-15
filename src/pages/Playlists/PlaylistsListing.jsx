import React, { useState } from "react";
import { usePlaylistContext } from "../../contexts/playlist-context";
import "./playlists.css";
import { GridVideosGroup } from "../../components/Grids";
import { ModalCreatePlaylist } from "../../components/Modal";

export const PlaylistsListing = () => {
  const [isModalOpenCreatePlaylist, setIsModalOpenCreatePlaylist] = useState(
    false
  );
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  const playlistsExceptWatchLater = playlistState.filter(
    (playlist) => playlist.id !== "f4558066-968c-11eb-a8b3-0242ac130003"
  );
  return (
    <div className="playlists">
      <button
        onClick={() => {
          setIsModalOpenCreatePlaylist(true);
        }}
      >
        Create PlayList
      </button>
      <GridVideosGroup
        videosGroup={playlistsExceptWatchLater}
        type="playlists"
      />
      <ModalCreatePlaylist
        modalVisibilityState={[
          isModalOpenCreatePlaylist,
          setIsModalOpenCreatePlaylist,
        ]}
      />
    </div>
  );
};
