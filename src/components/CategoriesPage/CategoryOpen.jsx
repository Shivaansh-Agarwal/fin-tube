import React from "react";
import { useVideoContext } from "../../contexts/video-context.jsx";
import { useCategoriesContext } from "../../contexts/categories-context.jsx";
import { VideoGrid } from "../Grids/Grids.jsx";

function getRequiredCategory(categories, reqCategoryId) {
  return categories.filter(({ id }) => id === reqCategoryId)[0];
}

export const CategoryOpen = ({ match }) => {
  const categoryId = match.params.id;
  const videoList = useVideoContext();
  const categories = useCategoriesContext();
  const reqCategory = getRequiredCategory(categories, categoryId);
  const categoryVideoIds = reqCategory.videos;
  const categoryVideos = [];
  for (let i = 0; i < categoryVideoIds.length; i++) {
    for (let j = 0; j < videoList.length; j++) {
      if (categoryVideoIds[i] === videoList[j].id) {
        categoryVideos.push(videoList[j]);
        break;
      }
    }
  }
  return (
    <div className="playlists">
      <h1>{reqCategory.name}</h1>
      <VideoGrid videoList={categoryVideos} />
    </div>
  );
};
