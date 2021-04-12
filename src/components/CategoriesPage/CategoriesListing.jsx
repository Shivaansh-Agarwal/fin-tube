import React from "react";
import { useCategoriesContext } from "../../contexts/categories-context.jsx";
import { GridVideosGroup } from "../Grids";
import "./categories.css";

export const CategoriesListing = () => {
  const { state: categoriesList } = useCategoriesContext();
  return (
    <div className="categories">
      <GridVideosGroup videosGroup={categoriesList} type="categories" />
    </div>
  );
};
