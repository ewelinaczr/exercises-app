import React, { createContext, useEffect, useState } from "react";
import {
  exerciseOptions,
  exerciseUrl,
  fetchData,
  exerciseUrl_bodyParts,
} from "../utils/fetchData";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchExercisesCategories = async () => {
      const categoriesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        exerciseOptions
      );
      setCategories([...categoriesData]);
    };
    fetchExercisesCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
