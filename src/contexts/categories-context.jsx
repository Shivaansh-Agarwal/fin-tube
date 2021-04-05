import React, { createContext, useContext, useEffect, useReducer } from "react";
import Axios from "axios";

export const CategoriesContext = createContext();

function getCategoriesList(videos, categories) {
  return categories.map((category) => {
    return {
      ...category,
      videos: videos
        .filter(({ categoryId }) => categoryId === category.id)
        .map((video) => video.id),
    };
  });
}

export const CategoriesProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "SET_DATA":
        return [...action.payload];
      default:
        throw new Error("Problem in reducer of categories");
    }
  }
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    (async function getCategories() {
      try {
        const { data: categoriesData } = await Axios.get("/api/categories");
        const { data: videosData } = await Axios.get("/api/videos");
        const categoriesList = getCategoriesList(
          videosData.videoList,
          categoriesData.categories
        );
        dispatch({ type: "SET_DATA", payload: categoriesList });
      } catch (error) {
        throw new Error("Error while fetching categories data:", error);
      }
    })();
  }, []);
  return (
    <CategoriesContext.Provider value={{ state }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};
