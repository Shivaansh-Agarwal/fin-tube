import React, { createContext, useContext, useEffect, useReducer } from "react";
import Axios from "axios";

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "SET_DATA":
        return [...action.payload];
      case "CREATE":
        return [...state, action.payload];
      case "UPDATE":
        return state.map((playlist) => {
          if (playlist.id === action.payload.id) {
            return { ...playlist, videos: action.payload.videos };
          }
          return playlist;
        });
      case "DELETE":
        return state.filter((playlist) => playlist.id !== action.payload);
      default:
        throw new Error("Error in Playlist Reducer");
    }
  }

  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    (async function fetchPlaylists() {
      try {
        const { data } = await Axios.get("/api/playlists");
        dispatch({ type: "SET_DATA", payload: data.playlists });
      } catch (error) {
        throw new Error("Error in fetching Playlists");
      }
    })();
  }, []);

  return (
    <PlaylistContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylistContext = () => {
  return useContext(PlaylistContext);
};
