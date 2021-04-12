import React from "react";
import { VideosCardGroup } from "../Cards";
import "./styles/gridVideosGroup.css";

export const GridVideosGroup = ({ videosGroup, type }) => {
  return (
    <div className="grid__videos__group">
      {videosGroup &&
        videosGroup.length !== 0 &&
        videosGroup.map(({ id, name, videos }) => {
          return (
            <div key={id} className="grid__items--card-wrapper">
              <VideosCardGroup
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
