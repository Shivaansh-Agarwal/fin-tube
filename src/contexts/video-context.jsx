import { useEffect, createContext, useContext, useReducer } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  function reducer(state, action) {
    console.log(state);
    switch (action.type) {
      case "SET_DATA":
        return [...action.payload];
      default:
        throw new Error("something fishy...");
    }
  }
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    fetch("/api/videos")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "SET_DATA", payload: json.videoList }));
  }, []);
  return (
    <VideoContext.Provider value={state}>{children}</VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(VideoContext);
};
