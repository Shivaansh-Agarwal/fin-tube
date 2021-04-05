import React from "react";
import ReactDOM from "react-dom";
import { useModalContext } from "../../contexts/modal-context.jsx";
import { usePlaylistContext } from "../../contexts/playlist-context.jsx";
import { CreatePlaylist } from "../PlaylistsPage/PlaylistsListing.jsx";
import Axios from "axios";
import "./modal.css";

export const ModalAddToPlaylist = ({ videoId }) => {
  const { state: modalState, dispatch: modalDispatch } = useModalContext();
  const { ADD_PLAYLIST_MODAL_VISIBILITY: modalVisibility } = modalState;
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();

  async function updatePlaylist(playlist, videoId, isSelected) {
    try {
      let updatedPlaylist = { ...playlist };
      if (isSelected && !playlist.videos.includes(videoId)) {
        updatedPlaylist = {
          ...playlist,
          videos: [...playlist.videos, videoId],
        };
      } else if (!isSelected && playlist.videos.includes(videoId)) {
        updatedPlaylist = {
          ...playlist,
          videos: playlist.videos.filter((id) => id !== videoId),
        };
      }
      const { data, status } = await Axios.put(
        `/api/playlists/${playlist.id}`,
        updatedPlaylist
      );
      if (status === 200) {
        playlistDispatch({ type: "UPDATE", payload: data.playlist });
      }
    } catch (err) {
      console.error("Error while updating playlist", err);
    }
  }

  return ReactDOM.createPortal(
    modalVisibility && (
      <div
        className="modal__wrapper"
        onClick={() => {
          modalDispatch({
            type: "ADD_PLAYLIST_MODAL_VISIBILITY",
            payload: false,
          });
        }}
      >
        <div
          className="modal__inner"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>Add to Playlist</div>
          <ul className="list__group">
            {playlistState.map((playlist) => {
              return (
                <li className="list__group--item" key={playlist.id}>
                  <label htmlFor={`${playlist.id}`}>
                    <input
                      id={`${playlist.id}`}
                      type="checkbox"
                      value={playlist.id}
                      data-playlist={playlist}
                      checked={playlist.videos.includes(videoId)}
                      onChange={(e) => {
                        updatePlaylist(playlist, videoId, e.target.checked);
                      }}
                    />
                    {playlist.name}
                  </label>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              modalDispatch({
                type: "ADD_PLAYLIST_MODAL_VISIBILITY",
                payload: false,
              });
            }}
          >
            CLOSE
          </button>
          <div>
            <button
              onClick={() => {
                modalDispatch({
                  type: "CREATE_PLAYLIST_MODAL_VISIBILITY",
                  payload: true,
                });
              }}
            >
              Create New Playlist
            </button>
          </div>
        </div>
      </div>
    ),
    document.querySelector("#modal")
  );
};

export const ModalCreatePlaylist = ({ videoId }) => {
  const { state: modalState, dispatch: modalDispatch } = useModalContext();
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  const { CREATE_PLAYLIST_MODAL_VISIBILITY: modalVisibility } = modalState;
  return ReactDOM.createPortal(
    modalVisibility && (
      <div
        className="modal__wrapper"
        onClick={() => {
          modalDispatch({
            type: "CREATE_PLAYLIST_MODAL_VISIBILITY",
            payload: false,
          });
        }}
      >
        <div
          className="modal__inner"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CreatePlaylist
            playlists={playlistState}
            updatePlaylist={playlistDispatch}
            videoId={videoId}
          />
        </div>
      </div>
    ),
    document.querySelector("#modal")
  );
};

export const ModalDeletePlaylist = ({ playlistId }) => {
  const { state: modalState, dispatch: modalDispatch } = useModalContext();
  const { DELETE_PLAYLIST_MODAL_VISIBILITY: modalVisibility } = modalState;
  const {
    state: playlistState,
    dispatch: playlistDispatch,
  } = usePlaylistContext();
  return ReactDOM.createPortal(
    modalVisibility && (
      <div
        className="modal__wrapper"
        onClick={() => {
          modalDispatch({
            type: "DELETE_PLAYLIST_MODAL_VISIBILITY",
            payload: false,
          });
        }}
      >
        <div
          className="modal__inner"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>Do you want to delete the playlist?</div>
          <button
            onClick={() => {
              modalDispatch({
                type: "DELETE_PLAYLIST_MODAL_VISIBILITY",
                payload: false,
              });
            }}
          >
            NO
          </button>
          <button
            onClick={() => {
              deletePlaylist(
                playlistId,
                playlistState,
                playlistDispatch,
                modalDispatch
              );
            }}
          >
            YES
          </button>
        </div>
      </div>
    ),
    document.querySelector("#modal")
  );
};

async function deletePlaylist(
  playlistId,
  playlistState,
  playlistDispatch,
  modalDispatch
) {
  try {
    const { data, status } = await Axios.delete(`/api/playlists/${playlistId}`);
    if (status === 200) {
      playlistDispatch({ type: "DELETE", payload: playlistId });
    }
  } catch (e) {
    console.error("Error in Deleting Playlist");
  } finally {
    modalDispatch({
      type: "DELETE_PLAYLIST_MODAL_VISIBILITY",
      payload: false,
    });
  }
}
