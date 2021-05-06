import React from "react";
import { CardVideosGroup } from "../Cards";
import "./styles/gridVideosGroup.css";

export const GridVideosGroup = ({ videosGroup, type }) => {
  return (
    <div className="grid__videos__group">
      {videosGroup &&
        videosGroup.length !== 0 &&
        videosGroup.map(({ id, name, videos }) => {
          return (
            <div key={id} className="grid__items--card-wrapper">
              <CardVideosGroup
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
