import React from "react";
// import { useVideoContext } from "../../contexts/video-context";
import { useCategoriesContext } from "../../contexts/categories-context.jsx";
import { VideosGroupGrid } from "../Grids/Grids.jsx";
import "./categories.css";

export const CategoriesListing = () => {
  // const videosList = useVideoContext();
  const { state: categoriesList } = useCategoriesContext();
  // const categories = categoriesList.map((category) => {
  //   const videos = videosList
  //     .filter(({ categoryId }) => categoryId === category.id)
  //     .map(({ id }) => id);
  //   return { ...category, videos };
  // });
  return (
    <div className="categories">
      <h1>Categories</h1>
      <VideosGroupGrid videosGroup={categoriesList} type="categories" />
    </div>
  );
};
