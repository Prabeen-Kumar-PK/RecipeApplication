import React from "react";
import RecipeSlider from "./RecipeSlider";
import TrendingRecipes from "./TrendingRecipe";
import CategorySelection from "./CategorySelection";
import { API_URL } from "../hooks/useFetch";

const HomeView = () => {
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}/search.php?f=c`}
        />

        <TrendingRecipes
          title="Quick Picks for you"
          fetchUrl={`${API_URL}/filter.php?a=Canadian`}
        />
        
        <CategorySelection />
      </main>
    </>
  );
};

export default HomeView;
