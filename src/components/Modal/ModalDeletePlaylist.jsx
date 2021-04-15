import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { usePlaylistContext } from "../../contexts/playlist-context.jsx";
import { deletePlaylist } from "./utilities/modal-utilities.js";

import { deletePlaylistModalStyles } from "./styles/modal-styles.js";
import "./styles/modal.css";

export const ModalDeletePlaylist = ({ playlistId, modalVisibilityState }) => {
  const [isModalOpen, setIsModalOpen] = modalVisibilityState;
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  return (
    <Modal isOpen={isModalOpen} style={deletePlaylistModalStyles}>
      <div className="modal__heading">Do you want to delete the playlist?</div>
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
            setIsModalOpen(false);
          }}
        >
          No
        </button>
        <button
          onClick={() => {
            deletePlaylist(
              playlistId,
              playlistState,
              playlistDispatch,
              setIsModalOpen
            );
          }}
        >
          YES
        </button>
      </div>
    </Modal>
  );
};
