import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { usePlaylistContext } from "../../contexts/playlist-context.jsx";

import { updatePlaylist } from "./utilities/modal-utilities.js";

import { addToPlaylistModalStyles } from "./styles/modal-styles.js";
import "./styles/modal.css";

export const ModalAddToPlaylist = function ({ videoId, modalVisibilityState }) {
  const [
    isModalOpen,
    setIsModalOpen,
    setIsCreateModalOpen,
  ] = modalVisibilityState;
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  return (
    <Modal isOpen={isModalOpen} style={addToPlaylistModalStyles}>
      <div className="modal__addToPlaylist">
        <div className="modal__heading">Add to Playlist</div>
        <ul className="modal__playlist">
          {playlistState.map((playlist) => {
            return (
              <li className="modal__playlist--item" key={playlist.id}>
                <label htmlFor={`${playlist.id}`}>
                  <input
                    id={`${playlist.id}`}
                    type="checkbox"
                    value={playlist.id}
                    data-playlist={playlist}
                    checked={playlist.videos.includes(videoId)}
                    onChange={(e) => {
                      updatePlaylist(
                        playlist,
                        videoId,
                        e.target.checked,
                        playlistDispatch
                      );
                    }}
                  />
                  {playlist.name}
                </label>
              </li>
            );
          })}
        </ul>
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
            className="modal__createNewPlaylist"
            onClick={() => {
              setIsModalOpen(false);
              setIsCreateModalOpen(true);
            }}
          >
            Create New Playlist
          </button>
        </div>
      </div>
    </Modal>
  );
};
