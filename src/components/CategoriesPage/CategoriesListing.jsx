import React from "react";
import { useVideoContext } from "../../contexts/video-context";
import { useCategoriesContext } from "../../contexts/categories-context.jsx";
import { VideosGroupGrid } from "../Grids/Grids.jsx";
import "./categories.css";

export const CategoriesListing = () => {
  const videosList = useVideoContext();
  const categoriesList = useCategoriesContext();
  const categories = categoriesList.map((category) => {
    const videoIds = videosList
      .filter(({ categoryId }) => categoryId === category.id)
      .map(({ id }) => id);
    return { ...category, videoIds };
  });
  return (
    <div className="categories">
      <h1>Categories</h1>
      <VideosGroupGrid videosGroup={categories} type="categories" />
    </div>
  );
};
