import React, { createContext, useContext, useEffect, useReducer } from "react";
import Axios from "axios";

export const CategoriesContext = createContext();

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
        const { data } = await Axios.get("/api/categories");
        dispatch({ type: "SET_DATA", payload: data.categories });
      } catch (error) {
        throw new Error("Error while fetching categories data:", error);
      }
    })();
  }, []);
  return (
    <CategoriesContext.Provider value={state}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};
