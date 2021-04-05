import React from "react";
import { VideoCard, VideosGroupCard } from "../Cards/Cards.jsx";
import "./grids.css";

export const VideoGrid = ({ videoList }) => {
  return (
    <div className="grid__items">
      {videoList &&
        videoList.map(({ id, name, categoryId, creator, playlists }) => {
          return (
            <div key={id} className="grid__items--card-wrapper">
              <VideoCard
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

export const VideosGroupGrid = ({ videosGroup, type }) => {
  return (
    <div className="grid__items">
      {videosGroup &&
        videosGroup.length !== 0 &&
        videosGroup.map(({ id, name, videos }) => {
          return (
            <div key={id} className="grid__items--card-wrapper">
              <VideosGroupCard
                id={id}
                name={name}
                videos={videos}
                type={type}
              />
            </div>
          );
        })}
    </div>
  );
};
