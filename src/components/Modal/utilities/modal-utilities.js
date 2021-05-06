import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

export async function updatePlaylist(
  playlist,
  videoId,
  isSelected,
  playlistDispatch
) {
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

export async function createPlaylist(
  playlistName,
  playlistDispatch,
  videoId,
  setIsModalOpen
) {
  const newPlaylist = {
    id: uuidv4(),
    name: playlistName,
    videos: videoId ? [videoId] : [],
  };
  try {
    const { data, status } = await Axios.post("/api/playlists", newPlaylist);
    if (status === 201) {
      playlistDispatch({ type: "CREATE", payload: data.playlist });
    }
  } catch (error) {
    console.error("ERROR while creating Playlist", error);
  } finally {
    setIsModalOpen(false);
  }
}

export async function deletePlaylist(
  playlistId,
  playlistState,
  playlistDispatch,
  setIsModalOpen
) {
  try {
    const { data, status } = await Axios.delete(`/api/playlists/${playlistId}`);
    if (status === 200) {
      playlistDispatch({ type: "DELETE", payload: playlistId });
    }
  } catch (e) {
    console.error("Error in Deleting Playlist");
  } finally {
    setIsModalOpen(false);
  }
}
