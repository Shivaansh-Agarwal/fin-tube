import React from "react";
import { GridVideosPreview } from "../../components/Grids";
import { useVideoContext } from "../../contexts/video-context.jsx";
import "./home.css";

export const Home = () => {
  const videoList = useVideoContext();
  return (
    <div className="home">
      <GridVideosPreview videoList={videoList} />
    </div>
  );
};
