import React, { createContext, useContext, useReducer } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_PLAYLIST_MODAL_VISIBILITY":
        return {
          ...state,
          ADD_PLAYLIST_MODAL_VISIBILITY: action.payload,
          CREATE_PLAYLIST_MODAL_VISIBILITY: false,
        };
      case "CREATE_PLAYLIST_MODAL_VISIBILITY":
        return {
          ...state,
          ADD_PLAYLIST_MODAL_VISIBILITY: false,
          CREATE_PLAYLIST_MODAL_VISIBILITY: action.payload,
        };
      case "DELETE_PLAYLIST_MODAL_VISIBILITY":
        return {
          ...state,
          DELETE_PLAYLIST_MODAL_VISIBILITY: action.payload,
        };
      default:
        throw new Error("Error in Modal Context");
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    ADD_PLAYLIST_MODAL_VISIBILITY: false,
    CREATE_PLAYLIST_MODAL_VISIBILITY: false,
    DELETE_PLAYLIST_MODAL_VISIBILITY: false,
  });
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
