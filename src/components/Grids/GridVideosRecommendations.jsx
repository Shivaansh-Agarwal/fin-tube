import React, { useState } from "react";
import { VideoCardMain } from "../Cards";
import "./styles/gridVideosRecommendations.css";

export const GridVideosRecommendations = ({ videoList }) => {
  return (
    <div className="grid__recommendations">
      {videoList &&
        videoList.map(({ id, name, categoryId, creator, playlists }) => {
          return (
            <div key={id} className="grid__recommendations--card-wrapper">
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
