import React from "react";
import RecipeSlider from "./RecipeSlider";
import TrendingRecipes from "./TrendingRecipe";
import CategorySelection from "./CategorySelection";
import { API_URL } from "../hooks/useFetch";

const HomeView = ({filterbyCategory}) => {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-4 no-scrollbar sm:px-6 lg:px-8">
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}/search.php?f=c`}
        />

        <TrendingRecipes
          title="Quick Picks for you"
          fetchUrl={`${API_URL}/filter.php?a=Canadian`}
        />
        
        <CategorySelection  fetchUrl={`${API_URL}/categories.php`} filterbyCategory={filterbyCategory}   />
      </main>
    </>
  );
};

export default HomeView;
