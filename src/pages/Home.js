import React, { useState } from "react";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import ExercisesPreview from "../components/ExercisesPreview";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <ExercisesPreview />
    </div>
  );
}
