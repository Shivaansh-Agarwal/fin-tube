import React from "react";
import { VideoGrid } from "../Grids/Grids.jsx";
import { useVideoContext } from "../../contexts/video-context.jsx";
import "./home.css";

export const Home = () => {
  const videoList = useVideoContext();
  return (
    <div className="home">
      <h1>Home</h1>
      <VideoGrid videoList={videoList} />
    </div>
  );
};