import React from "react";
import { useCategoriesContext } from "../../contexts/categories-context.jsx";
import { VideosGroupGrid } from "../Grids";
import "./categories.css";

export const CategoriesListing = () => {
  const { state: categoriesList } = useCategoriesContext();
  return (
    <div className="categories">
      <VideosGroupGrid videosGroup={categoriesList} type="categories" />
    </div>
  );
};
