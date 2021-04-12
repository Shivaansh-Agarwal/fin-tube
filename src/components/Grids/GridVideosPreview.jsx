import React, { useState } from "react";
import { VideoCardMain } from "../Cards";
import "./styles/gridVideosPreview.css";

export const GridVideosPreview = ({ videoList }) => {
  return (
    <div className="grid__items">
      {videoList &&
        videoList.map(({ id, name, categoryId, creator, playlists }) => {
          return (
            <div key={id} className="grid__items--card-wrapper">
              <VideoCardMain
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
