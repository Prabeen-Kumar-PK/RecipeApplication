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
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/"
          className="text-gray-100 hover:text-cyan-300 mb-4  text-xl font-light tracking-wide px-4 flex items-center group"
         
        >
          <ChevronLeft className="w-6 h-6 mr-1"/>
         Back to Home Page
        </Link>

        <div className="bg-gray-900 rounded-3xl  shadow-2xl p-6 md:p-12 shadow-black/70 border border-gray-800">
         <div className="flex space-x-12 flex-wrap justify-between items-center ">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-3xl font-bold text-gray-100 mb-6 leading-tight">{meal?.strMeal}</h1>
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal} 
              className="h-100 rounded-lg shadow-xl border border-gray-900 shadow-white/25 mb-6 hover:ring-1 hover:ring-cyan-400 transition duration-500 hover:scale-105 hover:border-none hover:shadow-cyan-400/30"
              />
          </div>
          <div className=" mb-8 lg:mb-0 bg-gray-800 rounded-lg p-6 lg:w-1/2 shadow-inner  border border-gray-900 shadow-gray-50/20 hover:ring-1 hover:ring-cyan-400 transition duration-500">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Utensils className="mr-2 text-cyan-300 " />
              Main Ingredients
              </h2>
              <hr className="text-gray-100/20"/>
              <br />
            <ul className="list-none list-inside  grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 p-0">
              {ingredients.map((item, index) => (
                <li key={index} className="text-gray-100 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  {item.measure} <span className="text-gray-400"> {item.ingredient}  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-gray-700">
              <div className="text-lg text-gray-400 space-x-3 flex flex-wrap ga">
                <div className="bg-gray-900  px-4  py-1.5  rounded-full font-semibold text-sm mb-2">
                <span className="text-gray-400  font-light">Cuisine: </span>
                <span className="text-gray-100 font-extralight">{meal?.strArea}</span>
                </div>
                <div className="bg-gray-900   px-4  py-1.5  rounded-full font-semibold text-sm mb-2">
                  <span className="text-gray-400  font-light">Category: </span>
                  <span className="text-gray-100 font-extralight">{meal?.strCategory}</span>
                </div>
              </div>
            </div>
          </div>

         </div>
          <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-inner border border-gray-900 shadow-gray-50/20 hover:ring-1 hover:ring-cyan-400 transition duration-500">  
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <CookingPot  className="mr-2 text-cyan-300 " />
              Cooking Instructions
            </h2>
              <hr className="text-gray-100/20"/>
              <br />
              <p className="text-gray-400 leading-relaxed font-light">
                {meal?.strInstructions.split("\r\n").map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </p>
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
