import { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

export const WatchLaterContext = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchLaterVideosList, setWatchLatervideosList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await Axios.get("/api/watchlater");
        setWatchLatervideosList(data);
      } catch (e) {
        console.error("Error while fetching WatchLater Data");
      }
    })();
  }, []);
  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterVideosList,
        setWatchLatervideosList,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLaterContext = () => {
  return useContext(WatchLaterContext);
};
