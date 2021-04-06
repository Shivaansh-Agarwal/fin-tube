import React from "react";
import { VideoCardList } from "../Cards";
import "./lists.css";

export const VideosList = ({ videosList }) => {
  return (
    <div className="videoslist">
      {videosList &&
        videosList.map(({ id, name, categoryId, creator, playlists }) => {
          return (
            <div key={id} className="videoslist--card-wrapper">
              <VideoCardList
                id={id}
                name={name}
                categoryId={categoryId}
                creator={creator}
                playlists={playlists}
              />
            </div>
          );
        })}
    </div>
  );
};
