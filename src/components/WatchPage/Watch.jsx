import React from "react";
import "./watch.css";
import { Iframe } from "../Iframe/Iframe.jsx";
import { ModalAddToPlaylist, ModalCreatePlaylist } from "../Modal/Modal.jsx";
import { useModalContext } from "../../contexts/modal-context.jsx";

export const Watch = ({ match }) => {
  const { dispatch: modalDispatch } = useModalContext();
  return (
    <div className="watch">
      <h1>VideoPLay</h1>
      <div className="iframe__wrapper">
        <Iframe id={match.params.id} />
      </div>
      <div className="watch__buttons">
        <button
          onClick={() => {
            modalDispatch({
              type: "ADD_PLAYLIST_MODAL_VISIBILITY",
              payload: true,
            });
          }}
        >
          Add To Playlist
        </button>
        <button>Add to Watch Later</button>
      </div>
      <ModalAddToPlaylist videoId={match.params.id} />
      <ModalCreatePlaylist videoId={match.params.id} />
    </div>
  );
};
