import React from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, useFetch } from "../hooks/useFetch";
import { ChevronLeft, ChevronRight, CookingPot, Loader, Utensils } from "lucide-react";
import TrendingRecipe from "./TrendingRecipe";

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${API_URL}/lookup.php?i=${id}`);
  const meal = data?.meals?.[0] || [];
  console.log(meal);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }
  console.log(ingredients);

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-cyan-400" />
        Preparing your recipe...
      </div>
    );
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group mb-4 flex items-center px-1 text-base font-light tracking-wide text-gray-100 hover:text-cyan-300 sm:px-4 sm:text-xl"
         
        >
          <ChevronLeft className="mr-1 h-5 w-5 sm:h-6 sm:w-6"/>
         Back to Home Page
        </Link>

        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-4 shadow-2xl shadow-black/70 sm:p-6 md:p-8 lg:p-12">
         <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="w-full lg:mb-0 lg:max-w-[420px]">
            <h1 className="mb-6 text-2xl font-bold leading-tight text-gray-100 sm:text-3xl">{meal?.strMeal}</h1>
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal} 
              className="mb-2 aspect-square w-full rounded-lg border border-gray-900 object-cover shadow-xl shadow-white/25 transition duration-500 hover:scale-[1.02] hover:border-none hover:ring-1 hover:ring-cyan-400 hover:shadow-cyan-400/30"
              />
          </div>
          <div className="w-full rounded-lg border border-gray-900 bg-gray-800 p-4 shadow-inner shadow-gray-50/20 transition duration-500 hover:ring-1 hover:ring-cyan-400 sm:p-6 lg:mb-0 lg:w-1/2">
            <h2 className="mb-4 flex items-center text-xl font-semibold sm:text-2xl">
              <Utensils className="mr-2 text-cyan-300 " />
              Main Ingredients
              </h2>
              <hr className="text-gray-100/20"/>
              <br />
            <ul className="list-none list-inside  grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 p-0">
              {ingredients.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-100 sm:text-base">
                  <ChevronRight className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span className="break-words">
                    {item.measure} <span className="text-gray-400"> {item.ingredient}  </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-gray-700">
              <div className="flex flex-wrap gap-3 text-lg text-gray-400">
                <div className="mb-2 rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold">
                <span className="text-gray-400  font-light">Cuisine: </span>
                <span className="text-gray-100 font-extralight">{meal?.strArea}</span>
                </div>
                <div className="mb-2 rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold">
                  <span className="text-gray-400  font-light">Category: </span>
                  <span className="text-gray-100 font-extralight">{meal?.strCategory}</span>
                </div>
              </div>
            </div>
          </div>

         </div>
          <div className="mt-8 rounded-lg border border-gray-900 bg-gray-800 p-4 shadow-inner shadow-gray-50/20 transition duration-500 hover:ring-1 hover:ring-cyan-400 sm:p-6">  
            <h2 className="mb-4 flex items-center text-xl font-semibold sm:text-2xl">
              <CookingPot  className="mr-2 text-cyan-300 " />
              Cooking Instructions
            </h2>
              <hr className="text-gray-100/20"/>
              <br />
              <div className="text-sm leading-relaxed font-light text-gray-400 sm:text-base">
                {meal?.strInstructions.split("\r\n").map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
          </div>
        </div>

        <TrendingRecipe
          title="More from the same cuisine"
          fetchUrl={`${API_URL}/filter.php?a=${meal?.strArea}`}/>

      </main>
    </>
  );
};

export default RecipeDetailView;
