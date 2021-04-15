import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { usePlaylistContext } from "../../contexts/playlist-context.jsx";

import { createPlaylist } from "./utilities/modal-utilities.js";

import { createPlaylistModalStyles } from "./styles/modal-styles.js";
import "./styles/modal.css";

export const ModalCreatePlaylist = function ({
  videoId,
  modalVisibilityState,
}) {
  const [playlistName, setPlaylistName] = useState("");
  const [isModalOpen, setIsModalOpen] = modalVisibilityState;
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  return (
    <Modal isOpen={isModalOpen} style={createPlaylistModalStyles}>
      <div className="modal__createPlaylist">
        <label htmlFor="create-playlist">
          <div className="modal__heading">Create New Playlist</div>
          <input
            type="text"
            id="create-playlist"
            value={playlistName}
            onChange={(e) => {
              setPlaylistName(e.target.value);
            }}
            autoFocus={true}
          />
        </label>
        <button
          className="modal__close"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <MdClose size="1.5rem" />
        </button>
        <div className="modal__buttons">
          <button
            onClick={() => {
              createPlaylist(
                playlistName,
                playlistDispatch,
                videoId,
                setIsModalOpen
              );
              setPlaylistName("");
            }}
            disabled={playlistName === "" ? true : false}
          >
            Create PlayList
          </button>
        </div>
      </div>
    </Modal>
  );
};
