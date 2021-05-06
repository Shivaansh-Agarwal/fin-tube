import React from "react";
import { CardVideoList } from "../Cards";
import "./lists.css";

export const VideosList = ({ videosList }) => {
  return (
    <div className="videoslist">
      {videosList &&
        videosList.map(({ id, name, categoryId, creator, playlists }) => {
          return (
            <div key={id} className="videoslist--card-wrapper">
              <CardVideoList
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
