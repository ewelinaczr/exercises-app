import React, { createContext, useState, useEffect } from "react";
import {
  exerciseOptions,
  exerciseUrl,
  fetchData,
  exerciseUrl_bodyParts,
} from "../utils/fetchData";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [category, setCategory] = useState("all");

  // SEARCH BY BODY PART / TARGET / NAME / EQUIPMENT
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(exerciseUrl, exerciseOptions);
      const SearchExercises = exercisesData.filter(
        (ex) =>
          ex.name.toLocaleLowerCase().includes(search) ||
          ex.target.toLocaleLowerCase().includes(search) ||
          ex.equipment.toLocaleLowerCase().includes(search) ||
          ex.bodyPart.toLocaleLowerCase().includes(search)
      );
      setSearch("");
      setExercises(SearchExercises);
    }
  };

  // SEARCH BY CATEGORY
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (category === "all") {
        exercisesData = await fetchData(exerciseUrl, exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [category]);

  return (
    <SearchContext.Provider
      value={{
        setSearch,
        handleSearch,
        exercises,
        search,
        setExercises,
        setCategory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
